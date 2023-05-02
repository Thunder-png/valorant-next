import React from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";
import { faHouse, faNewspaper, faUserFriends, faCrosshairs, faLayerGroup, faMedal, faDollarSign, faHourglassClock, faFolderMusic, faLocationCrosshairs, faMap, faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./SideBar.module.css";

const SideBar = () => {
    return (
        <aside className={styles.sideNavbar}>
            <nav>
                <ul className={styles.navList}>
                    {/* Ana menü */}
                    <li>
                        <h5 className={styles.menuTitle}>Ana Menü</h5>
                        <ul className={styles.submenu}>
                            <li>
                                <a href="/"><FontAwesomeIcon icon={faHouse} /> Ana Sayfa</a>
                            </li>
                            <li>
                                <a href="/haberler"><FontAwesomeIcon icon={faNewspaper} /> Haberler</a>
                            </li>
                        </ul>
                        <hr className={styles.sidebarDivider} />
                    </li>
                    {/* Oyun menüsü */}
                    <li>
                        <h5 className={styles.menuTitle}>Oyun</h5>
                        <ul className={styles.submenu}>
                            <li><a href="/ajanlar"><FontAwesomeIcon icon={faUserFriends} /> Ajanlar</a></li>
                            <li><a href="/silahlar"><FontAwesomeIcon icon={faCrosshairs} /> Silahlar</a></li>
                            <li><a href="/paketler"><FontAwesomeIcon icon={faLayerGroup} /> Koleksiyon</a></li>
                            <li><a href="/savasbileti"><FontAwesomeIcon icon={faMedal} /> Savaş Bileti</a></li>
                            <li><a href="/kontratlar"><FontAwesomeIcon icon={faDollarSign} /> Kontratlar</a></li>
                            {/*<li><a href="/gecepazari"><FontAwesomeIcon icon={faHourglassClock} /> Gece Pazarı</a></li>-->*/}
                            <li><a href="/oyucusesleri"><FontAwesomeIcon icon={faFolderMusic} /> Oyuncu Sesleri</a></li>
                            <li><a href="/crosshair"><FontAwesomeIcon icon={faLocationCrosshairs} /> Crosshair</a></li>
                            <li><a href="/haritalar"><FontAwesomeIcon icon={faMap} /> Haritalar</a></li>
                        </ul>
                        <hr className={styles.sidebarDivider} />
                    </li>
                    {/* Bilgi menüsü */}
                    <li>
                        <h5 className={styles.menuTitle}>Bilgi</h5>
                        <ul className={styles.submenu}>
                            <li><a href="/support"><FontAwesomeIcon icon={faEnvelope} /> Destek</a></li>
                            <li><a href="/privacy"><FontAwesomeIcon icon={faFileAlt} /> Gizlilik</a></li>
                        </ul>
                        <hr className={styles.sidebarDivider} />
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;
