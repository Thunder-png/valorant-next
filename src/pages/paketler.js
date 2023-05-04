// pages/paketler.js
import { useEffect, useState } from 'react';
import Link from "next/link"; // Link bileşenini içe aktar
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import styles from '../components/Weapons.module.css';

const PaketlerPage = () => {
    const [bundles, setBundles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.valorantgame.com.tr/api/bundles?populate=*');
            const data = await response.json();
            setBundles(data.data);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.Label}>
                <h1 className={styles.Title}>Paketler</h1>
            </div>
            <SideBar />
            <div className={styles.cardContainer}>
                {bundles.map((bundle) => {
                    const formattedTitle = bundle.attributes.bundle_name.toLowerCase().replace(/\s+/g, '');

                    return (
                        <div key={bundle.id} className={styles.card}>
                            <Link href={`/paketler/${formattedTitle}`}>
                                <img src={bundle.attributes.bundle_img} alt={bundle.attributes.bundle_name} />
                                <h2>{bundle.attributes.bundle_name}</h2>
                                <div className={styles.cardBottomLine}></div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PaketlerPage;
