// pages/silahlar.js
import { useEffect, useState } from 'react';
import Link from "next/link"; // Link bileşenini içe aktar
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import styles from '../components/Weapons.module.css';

const SilahlarPage = () => {
    const [weapons, setWeapons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.valorantgame.com.tr/api/weapons?populate=*');
            const data = await response.json();
            const filteredWeapons = data.data.filter(weapon => weapon.attributes.weapon_skin === 'Plain');
            setWeapons(filteredWeapons);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.Label}>
                <h1 className={styles.Title}>Silahlar</h1>
            </div>
            <SideBar />
            <div className={styles.cardContainer}>
                {weapons.map((weapon) => {
                    const formattedTitle = weapon.attributes.weapon_name.toLowerCase().replace(/\s+/g, '');

                    return (
                        <div key={weapon.id} className={styles.card}>
                            <Link href={`/silahlar/${formattedTitle}`}>
                                <img src={weapon.attributes.weapon_img} alt={weapon.attributes.weapon_name} />
                                <h3>{weapon.attributes.weapon_name}</h3>
                                <div className={styles.cardBottomLine}>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SilahlarPage;
