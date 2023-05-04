// pages/ajanlar.js
import { useEffect, useState } from 'react';
import Link from "next/link"; // Link bileşenini içe aktar
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import styles from '../components/Agents.module.css';

const AgentsPage = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.valorantgame.com.tr/api/agents?populate=*');
            const data = await response.json();
            setAgents(data.data);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.Label}>
                <h1 className={styles.Title}>Ajanlar</h1>
            </div>
            <SideBar />
            <div className={styles.cardContainer}>
                {agents.map((agent) => {
                    const formattedTitle = agent.attributes.agent_name.toLowerCase().replace(/\s+/g, '');
                    const fullDescription = agent.attributes.agent_description;
                    const maxLength = 150;
                    const shortDescription = fullDescription.substring(0, maxLength);
                    const displayDescription = fullDescription.length > maxLength ? shortDescription + '...' : fullDescription;

                    return (
                        <div key={agent.id} className={styles.card}>
                            <Link href={`/ajanlar/${formattedTitle}`}>
                                <h2>{agent.attributes.agent_name}</h2>
                                <img src={agent.attributes.agent_thumb} alt={agent.attributes.agent_name} />
                            </Link>
                            <img className={styles.cardIcon} src={agent.attributes.ajan_rolue.data.attributes.agent_role_icon} alt="Agent Role Icon" />
                            <p>{displayDescription}</p>
                        </div>
                    );
                })}
            </div>
        </div>

    );
};

export default AgentsPage;
