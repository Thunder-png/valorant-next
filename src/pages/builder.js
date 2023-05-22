// pages/support.js
import { useEffect, useState } from 'react';
import Link from "next/link"; // Link bileşenini içe aktar
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import FontAwesomeIcon from "../components/FontAwesomeIcon";
import styles from "../components/SideBar.module.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const BuilderPage = () => {
    return (
        <div className="container-builder">
            <div className="row-builder">
                <div>
                    <nav>
                        <ul className={styles.navList}>
                            {/* Ana menü */}
                            <li>
                                <h5 className={styles.menuTitle}>Ana Menü</h5>
                                <ul className={styles.submenu}>
                                    <li>
                                        <Link href="/"><FontAwesomeIcon icon={faHouse} /> Ana Sayfa</Link>
                                    </li>
                                </ul>
                                <hr className={styles.sidebarDivider} />
                            </li>
                        </ul>
                    </nav>

                </div>
                <iframe className='mw-100'
                    src="https://valo-build.netlify.app/builder.html"
                    allowFullScreen
                    frameBorder='no'
                    width="1580px"
                    height="800px"
                    title="Builder"
                    scrolling='no'
                />


            </div>
        </div>


    );
};
export default BuilderPage;
