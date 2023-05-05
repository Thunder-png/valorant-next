import React from "react";
import Link from "next/link"; // Link bileşenini içe aktar
import styles from "./TopBar.module.css";

const TopBar = () => {
    return (
        <div className={styles.topBar}>
            <div className={styles.logo}>
                <Link href="/">ValorantGame</Link>
            </div>
            <div className={styles.searchContainer}>
                <input
                    type="search"
                    className={styles.searchInput}
                    placeholder="Arama..."
                />
            </div>
        </div>
    );
};

export default TopBar;
