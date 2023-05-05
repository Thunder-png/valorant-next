// pages/crosshair.js
import { useEffect, useState } from 'react';
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import styles from '../components/Crosshair.module.css';

const CrosshairPage = () => {
    const [crosshairs, setCrosshairs] = useState([]);

    useEffect(() => {
        async function fetchCrosshairs() {
            const response = await fetch('https://api.valorantgame.com.tr/api/crosshairs?populate=*');
            const data = await response.json();
            setCrosshairs(data.data);
        }

        fetchCrosshairs();
    }, []);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(
            () => {
                alert('Crosshair kodu panoya kopyalandı!');
            },
            (err) => {
                alert('Crosshair kodu kopyalanamadı:', err);
            }
        );
    };

    return (
        <div className={styles.container}>
            <TopBar />
            <SideBar />
            <div className={styles.crosshairGrid}>
                {crosshairs.map((crosshair) => (
                    <div key={crosshair.id} className={styles.crosshairCard}>
                        <img src={crosshair.attributes.crosshair_img} alt={`Crosshair ${crosshair.id}`} />
                        <button className={styles.clipboard} onClick={() => copyToClipboard(crosshair.attributes.crosshair_code)}>
                            Panoya Kopyala
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CrosshairPage;
