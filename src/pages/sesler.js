import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import styles from '../components/Sesler.module.css';

const Sesler = () => {
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.valorantgame.com.tr/api/voices?populate=*');
            const data = await response.json();
            setVoices(data.data);
        }
        fetchData();
    }, []);

    return (
        <>
            <div className={`container ${styles.container}`}>
                <TopBar />
                <SideBar />
                <h1 className="my-4">Sesler</h1>
                <div className="rowVoices">
                    {voices.map((voice) => (
                        <div key={voice.id} className="col-md-4">
                            <div className={`card ${styles.card}`}>
                                <img src={voice.attributes.agent_pic} className="card-img-top" alt={voice.attributes.agent_name} />
                                <div className="card-body">
                                    <h5 className="card-title">{voice.attributes.agent_name}</h5>
                                    <div className={styles.textGray}>
                                        Voice <span className={styles.textRight}>
                                            {voice.attributes.voice_link && (
                                                <audio controls>
                                                    <source src={voice.attributes.voice_link} type="audio/mpeg" />
                                                    Your browser does not support the audio tag.
                                                </audio>
                                            )}
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Sesler;
