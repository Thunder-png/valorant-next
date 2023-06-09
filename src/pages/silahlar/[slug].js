// pages/silahlar/[slug].js
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import styles from '../../components/Weapons.module.css';
import Breadcrumb from "../../components/Breadcrumb";

const SilahlarSlugPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [weapons, setWeapons] = useState([]);

    useEffect(() => {
        if (slug) {
            async function fetchData() {
                const response = await fetch(`/api/weapons?slug=${slug}`);
                const data = await response.json();
                setWeapons(data);
            }
            fetchData();
        }
    }, [slug]);

    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.Label}>
                <h1 className={styles.Title}>{slug ? slug.replace(/-/g, ' ') : 'Silahlar'}</h1>
                <Breadcrumb />
            </div>
            <SideBar />
            <div className={styles.cardContainer}>
                {weapons.map((weapon) => {
                    const formattedTitle = weapon.attributes.weapon_type.replace(/ /g, '-').toLowerCase();
                    const formattedSkinSlug = weapon.attributes.weapon_skin.replace(/ /g, '-').toLowerCase();

                    return (
                        <div key={weapon.id} className={styles.card}>
                            <a href={`/silahlar/${formattedTitle}/${formattedSkinSlug}`}>
                                <Image src={weapon.attributes.weapon_img} width={300} height={180} priority={true} alt={weapon.attributes.weapon_name} />
                                <div className={styles.CardHead}>
                                    <h3>{weapon.attributes.weapon_name}</h3>
                                </div>

                                <div className={styles.cardBottomLine}>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SilahlarSlugPage;
