// pages/api/weapons.js
import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
    console.log('Redis client connected');
});

client.on('error', (err) => {
    console.log('Redis error:', err);
});

export default async function handler(req, res) {
    const { slug } = req.query;

    client.get(slug, async (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        if (result) {
            res.status(200).json(JSON.parse(result));
        } else {
            const response = await fetch(`https://api.valorantgame.com.tr/api/weapons?populate=*&filters[weapon_type][$eqi]=${slug}`);
            const data = await response.json();
            client.set(slug, JSON.stringify(data.data), 'EX', 60);
            res.status(200).json(data.data);
        }
    });
}
