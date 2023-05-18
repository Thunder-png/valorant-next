// Search.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import styles from '../components/Weapons.module.css';
import Link from 'next/link';

const Search = () => {
    const [results, setResults] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchResults = async () => {
            const response = await fetch(`https://api.valorantgame.com.tr/api/weapons?filters[weapon_name][$containsi]=${router.query.query}&populate=*`);
            const json = await response.json();
            setResults(json.data);
        };

        if (router.query.query) {
            fetchResults();
        }
    }, [router.query.query]);

    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.Label}>
                <h1 className={styles.Title}>Arama</h1>
            </div>
            <SideBar />
            <div className={styles.cardContainer}>
                {results.map((item, index) => {
                    const formattedTitle = item.attributes.weapon_name.toLowerCase().replace(/\s+/g, '');

                    return (
                        <div key={item.attributes.id} className={styles.card}>
                            <Link href={`/silahlar/${item.attributes.weapon_type.toLowerCase().replace(/\s+/g, '')}/${item.attributes.weapon_skin.toLowerCase().replace(/\s+/g, '')}`}>
                                <Image src={item.attributes.weapon_img} width={300} height={180} priority={true} alt={item.attributes.weapon_name} />
                                <div className={styles.CardHead}>
                                    <h3>{item.attributes.weapon_name}</h3>
                                </div>
                                <div className={styles.cardBottomLine}>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Search;
