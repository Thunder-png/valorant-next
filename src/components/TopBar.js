import React from "react";
import styles from "./TopBar.module.css";

const TopBar = () => {
    return (
        <div className={styles.topBar}>
            <div className={styles.logo}>
                <a href="index.html">ValorantGame</a>
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
