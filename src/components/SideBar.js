import React, { useState, useContext } from 'react';
import FontAwesomeIcon from "./FontAwesomeIcon";
import { faHouse, faNewspaper, faUserFriends, faCrosshairs, faLayerGroup, faMedal, faDollarSign, faGun, faMusic, faLocationCrosshairs, faMap, faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./SideBar.module.css";
import SideBarContext from '../components/SideBarContext';

import Link from "next/link"; // Link bileşenini içe aktar

const SideBar = () => {
    const toggleMenu = () => setIsOpen(!isOpen);
    const { isOpen } = useContext(SideBarContext);  // add this line

    return (
        <aside className={`${styles.sideNavbar} ${isOpen ? styles.open : ''}`}>
            <nav>
                <ul className={styles.navList}>
                    {/* Ana menü */}
                    <li>
                        <h5 className={styles.menuTitle}>Ana Menü</h5>
                        <ul className={styles.submenu}>
                            <li>
                                <Link href="/"><FontAwesomeIcon icon={faHouse} /> Ana Sayfa</Link>
                            </li>
                            <li>
                                <Link href="/haberler"><FontAwesomeIcon icon={faNewspaper} /> Haberler</Link>
                            </li>
                        </ul>
                        <hr className={styles.sidebarDivider} />
                    </li>
                    {/* Oyun menüsü */}
                    <li>
                        <h5 className={styles.menuTitle}>Oyun</h5>
                        <ul className={styles.submenu}>
                            <li><Link href="/builder"><FontAwesomeIcon icon={faGun} /> Simülatör</Link></li>
                            <li><Link href="/ajanlar"><FontAwesomeIcon icon={faUserFriends} /> Ajanlar</Link></li>
                            <li><Link href="/silahlar"><FontAwesomeIcon icon={faCrosshairs} /> Silahlar</Link></li>
                            <li><Link href="/paketler"><FontAwesomeIcon icon={faLayerGroup} /> Koleksiyon</Link></li>
                            <li><Link href="/savasbileti"><FontAwesomeIcon icon={faMedal} /> Savas Bileti</Link></li>
                            <li><Link href="/kontratlar"><FontAwesomeIcon icon={faDollarSign} /> Kontratlar</Link></li>
                            <li><Link href="/sesler"><FontAwesomeIcon icon={faMusic} /> Oyuncu Sesleri</Link></li>
                            <li><Link href="/crosshair"><FontAwesomeIcon icon={faLocationCrosshairs} /> Crosshair</Link></li>
                            <li><Link href="/haritalar"><FontAwesomeIcon icon={faMap} /> Haritalar</Link></li>
                        </ul>
                        <hr className={styles.sidebarDivider} />
                    </li>
                    {/* Bilgi menüsü */}
                    <li>
                        <h5 className={styles.menuTitle}>Bilgi</h5>
                        <ul className={styles.submenu}>
                            <li><Link href="/support"><FontAwesomeIcon icon={faEnvelope} /> Destek</Link></li>
                            <li><Link href="/privacy"><FontAwesomeIcon icon={faFileAlt} /> Gizlilik</Link></li>
                        </ul>
                        <hr className={styles.sidebarDivider} />
                    </li>
                </ul>
            </nav>
        </aside>
    );

};

export default SideBar;
