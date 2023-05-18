// TopBar.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './TopBar.module.css';

const TopBar = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const search = (e) => {
        e.preventDefault();
        router.push(`/search?query=${query}`);
    };

    return (
        <div className={styles.topBar}>
            <div className={styles.logo}>
                <Link href="/">ValorantGame</Link>
            </div>
            <div className={styles.searchContainer}>
                <form onSubmit={search}>
                    <input
                        type="search"
                        className={styles.searchInput}
                        placeholder="Arama..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
};

export default TopBar;
