// pages/silahlar/[slug].js
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import styles from '../../components/Weapons.module.css';
import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
    console.log('Redis client connected');
});

client.on('error', (err) => {
    console.log('Redis error:', err);
});

function cacheData(key, data, expirationInSeconds) {
    client.set(key, JSON.stringify(data), 'EX', expirationInSeconds);
}

function getCachedData(key, callback) {
    client.get(key, (error, result) => {
        if (error) {
            console.log(error);
            callback(null);
        } else {
            callback(JSON.parse(result));
        }
    });
}

const SilahlarSlugPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [weapons, setWeapons] = useState([]);

    useEffect(() => {
        if (slug) {
            async function fetchData() {
                const cacheKey = `weapons-${slug}`;
                const cachedWeapons = await new Promise((resolve) => {
                    getCachedData(cacheKey, resolve);
                });

                if (cachedWeapons) {
                    setWeapons(cachedWeapons);
                } else {
                    const response = await fetch(`https://api.valorantgame.com.tr/api/weapons?populate=*&filters[weapon_type][$eqi]=${slug}`);
                    const data = await response.json();
                    setWeapons(data.data);
                    cacheData(cacheKey, data.data, 60); // Önbelleğe alınan verileri 60 saniye sakla
                }
            }
            fetchData();
        }
    }, [slug]);



    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.Label}>
                <h1 className={styles.Title}>{slug ? slug.replace(/-/g, ' ') : 'Silahlar'}</h1>
            </div>
            <SideBar />
            <div className={styles.cardContainer}>
                {weapons.map((weapon) => {
                    const formattedTitle = weapon.attributes.weapon_name.toLowerCase().replace(/\s+/g, '');

                    return (
                        <div key={weapon.id} className={styles.card}>
                            <a href={`/silahlar/${formattedTitle}`}>
                                <Image src={weapon.attributes.weapon_img} width={300} height={180} priority={true} alt={weapon.attributes.weapon_name} />
                                <div className={styles.CardHead}>
                                    <h3>{weapon.attributes.weapon_name}</h3>
                                </div>

                                <div className={styles.cardBottomLine}>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SilahlarSlugPage;
