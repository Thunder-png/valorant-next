import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import styles from '../components/Sesler.module.css';

const Sesler = () => {
    const [voices, setVoices] = useState([]);
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.valorantgame.com.tr/api/voices?populate=*');
            const data = await response.json();
            setVoices(data.data);
        }
        fetchData();
    }, []);

    return (
        <div className={`container ${styles.container}`}>
            <TopBar />
            <SideBar />
            <h1 className="my-4 h1-background">Sesler</h1>
            <div className="rowVoices">
                {voices.map((voice) => {
                    const slug = voice.attributes.agent_name.toLowerCase().replace(/\s+/g, '-');
                    const q = '/sesler/'
                    return (
                        <div key={voice.id} className="col-md-4">
                            <Link href={`${q}${slug}`}>
                                <div className={`card ${styles.card}`}>
                                    <img src={voice.attributes.agent_pic} className="card-img-top" alt={voice.attributes.agent_name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{voice.attributes.agent_name}</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sesler;
