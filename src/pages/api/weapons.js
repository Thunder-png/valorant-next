// pages/api/weapons.js
export default async function handler(req, res) {
    const { slug } = req.query;
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

    const response = await fetch(`https://api.valorantgame.com.tr/api/weapons?populate=*&filters[weapon_type][$eqi]=${slug}`);
    const data = await response.json();
    res.status(200).json(data.data);
}