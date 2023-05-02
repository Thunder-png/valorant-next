// components/CardContainer.js
import { useEffect, useState } from 'react';
import styles from './CardContainer.module.css';

const CardContainer = () => {
    const [mainElements, setMainElements] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://valorantgame.com.tr/api/ana-sayfa?populate=*');
            const data = await response.json();
            setMainElements(data.data.attributes.main_element);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.cardContainer}>
            {mainElements.map((element) => {
                const formattedTitle = element.main_title.toLowerCase().replace(/\s+/g, '');
                return (
                    <div key={element.id} className={styles.card}>
                        <a href={`/${formattedTitle}`}>
                            <h3>{element.main_title}</h3>
                            <img src={element.main_url} alt={element.main_title} />
                        </a>
                        <div className={styles.cardBottomLine}></div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardContainer;
