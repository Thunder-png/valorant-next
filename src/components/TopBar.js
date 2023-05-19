// TopBar.js
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './TopBar.module.css';
import SideBarContext from '../components/SideBarContext';




const TopBar = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();
    const paths = router.asPath.split("/").slice(1);

    const search = (e) => {
        e.preventDefault();
        router.push(`/search?query=${query}`);
    };
    const { toggleSideBar } = useContext(SideBarContext);  // add this line


    return (
        <div className={styles.topBar}>
            <div className={styles.hamburger} onClick={toggleSideBar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.logo}>
                <Link href="/">ValorantGame</Link>
            </div>
            <div className={styles.breadcrumb}>
                <Link className='breadcrumbLink' href="/">Ana Sayfa</Link>
                {paths.map((path, index) => {
                    const routePath = `/${paths.slice(0, index + 1).join('/')}`;
                    const isLast = index === paths.length - 1;
                    return (
                        <span key={routePath}>
                            {" > "}
                            <Link className='breadcrumbLink' href={isLast ? router.asPath : routePath}>{decodeURIComponent(path)}</Link>
                        </span>
                    );
                })}
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
