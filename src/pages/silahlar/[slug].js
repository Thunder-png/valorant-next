// pages/silahlar/[slug].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import styles from '../../components/Weapons.module.css';

const SilahlarSlugPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [weapons, setWeapons] = useState([]);

    useEffect(() => {
        if (slug) {
            async function fetchData() {
                const response = await fetch('https://api.valorantgame.com.tr/api/weapons?populate=*');
                const data = await response.json();
                const filteredWeapons = data.data.filter(weapon => weapon.attributes.weapon_name.toLowerCase().includes(slug.toLowerCase()));
                setWeapons(filteredWeapons);
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
                                <img src={weapon.attributes.weapon_img} alt={weapon.attributes.weapon_name} />
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
