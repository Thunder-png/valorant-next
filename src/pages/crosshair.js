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

    return (
        <div className={styles.container}>
            <TopBar />
            <SideBar />
            <div className={styles.crosshairGrid}>
                {crosshairs.map((crosshair) => (
                    <div key={crosshair.id} className={styles.crosshairCard}>
                        <img src={crosshair.attributes.crosshair_img} alt={`Crosshair ${crosshair.id}`} />
                        <p>{crosshair.attributes.crosshair_code}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CrosshairPage;
