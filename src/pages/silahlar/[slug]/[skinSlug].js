// pages/silahlar/[slug]/[skinSlug].js
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import TopBar from "../../../components/TopBar";
import SideBar from "../../../components/SideBar";
import styles from '../../../components/Weapons.module.css';

const SilahlarSkinSlugPage = () => {
    const router = useRouter();
    const { slug, skinSlug } = router.query;
    const [weapons, setWeapons] = useState([]);

    useEffect(() => {
        if (slug && skinSlug) {
            async function fetchData() {
                const response = await fetch(`https://api.valorantgame.com.tr/api/weapons?filters[weapon_skin][$eqi]=${skinSlug}&populate=*`);
                const data = await response.json();
                if (data && Array.isArray(data.data)) {
                    setWeapons(data.data);
                } else {
                    setWeapons([]);
                }
            }
            fetchData();
        }
    }, [slug, skinSlug]);

    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.Label}>
                <h1 className={styles.Title}>{slug ? slug.replace(/-/g, ' ') : 'Silahlar'}</h1>
            </div>
            <SideBar />
            <div className={styles.cardContainer}>
                {weapons.map((weapon) => {
                    const formattedTitle = weapon.attributes.weapon_name.toLowerCase().replace(/\s+/g, '');

                    return (
                        <div key={weapon.id} className={styles.card}>
                            <a href={`/silahlar/${formattedTitle}`}>
                                <Image src={weapon.attributes.weapon_img} width={300} height={180} priority={true} alt={weapon.attributes.weapon_name} />
                                <div className={styles.CardHead}>
                                    <h3>{weapon.attributes.weapon_name}</h3>
                                </div>

                                <div className={styles.cardBottomLine}>
                                </div>
                            </a>
                            {weapon.attributes.weapon_video.length > 0 && (
                                <div className={styles.videoContainer}>
                                    <iframe
                                        src={weapon.attributes.weapon_video[0].video_link}
                                        width="%100"
                                        height="%100"
                                        allowFullScreen
                                        title={weapon.attributes.weapon_name}
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SilahlarSkinSlugPage;
