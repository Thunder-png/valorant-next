// pages/silahlar/[slug].js
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import styles from '../../components/Weapons.module.css';

const replaceTurkishChars = (str) => {
    if (!str) return str;

    const turkishChars = {
        'ç': 'c',
        'ğ': 'g',
        'ı': 'i',
        'ö': 'o',
        'ş': 's',
        'ü': 'u',
        'Ç': 'C',
        'Ğ': 'G',
        'İ': 'I',
        'Ö': 'O',
        'Ş': 'S',
        'Ü': 'U',
    };
    return str.replace(/[çğıöşüÇĞİÖŞÜ]/g, (char) => turkishChars[char]);
};

const SilahlarSlugPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [weapons, setWeapons] = useState([]);

    useEffect(() => {
        if (slug) {
            async function fetchData() {
                const formattedSlug = replaceTurkishChars(slug).toLowerCase();
                const response = await fetch(`https://api.valorantgame.com.tr/api/weapons?populate=*&filters[weapon_type][$eqi]=${slug}`);
                const data = await response.json();
                setWeapons(data.data);
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
