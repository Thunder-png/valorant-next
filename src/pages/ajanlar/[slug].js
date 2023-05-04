// pages/agents/[slug].js
import { useRouter } from 'next/router';
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import styles from '../../components/Agents.module.css';



const AgentPage = ({ agent }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const agentAttributes = agent.attributes;
    const agentRole = agentAttributes.ajan_rolue.data.attributes;
    const agentAbilities = agentAttributes.ajan_yetenekleris.data;

    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.Label}>
                <h1 className={styles.Title}>{agentAttributes.agent_name}</h1>
            </div>
            <SideBar />
            <div className={styles.MainContainer}>
                <div className={styles.ColumnOne}>
                    <div className={styles.InfoContainer}>
                        <div className={styles.AgentThumbnail}>
                            <img src={agentAttributes.agent_thumb} alt={`${agentAttributes.agent_name} thumbnail`} />
                        </div>
                        <div className={styles.InfoText}>
                            <p>{agentAttributes.agent_description}</p>
                            <div className={styles.textGray}>
                                Code Name <span className={styles.textRight}>{agentAttributes.agent_codename}</span>
                            </div>
                            <div className={styles.textGray}>
                                Country <span className={styles.textRight}>{agentAttributes.agent_country}</span>
                            </div>
                            <div className={styles.textGray}>
                                Voice <span className={styles.textRight}>
                                    {agentAttributes.agent_voice && (
                                        <audio controls>
                                            <source src={agentAttributes.agent_voice} type="audio/mpeg" />
                                            Your browser does not support the audio tag.
                                        </audio>
                                    )}
                                </span>

                            </div>
                            <div className={styles.textGray}>
                                Release Date <span className={styles.textRight}>{agentAttributes.agent_date}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.AgentInfo}>
                        <div className={styles.AgentPic}>
                            <img src={agentAttributes.agent_img} alt={`${agentAttributes.agent_name}`} />
                        </div>
                        <div className={styles.RoleInfo}>
                            <h2>{agentRole.agent_role}</h2>
                            <img src={agentRole.agent_role_icon} alt={`${agentRole.agent_role} icon`} />
                            <p className={styles.RoleText}>{agentRole.agent_role_description}</p>
                        </div>
                    </div>

                </div>
                <div className={styles.ColumnTwo}>
                    <div className={styles.AbilitiesContainer}>
                        <h2>Ajan yetenek tüyoları</h2>
                        {agentAbilities.map((ability) => {
                            const abilityAttributes = ability.attributes;
                            return (
                                <div className={styles.abilityRow} key={ability.id}>
                                    <h3>{abilityAttributes.abilty_name}</h3>
                                    <img src={abilityAttributes.abilty_icon} alt={`${abilityAttributes.abilty_name} icon`} />
                                    <p>{abilityAttributes.abilty_description}</p>
                                    <p>Key: {abilityAttributes.abilty_key}</p>
                                    {abilityAttributes.abilty_video && (
                                        <video controls>
                                            <source src={abilityAttributes.abilty_video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const res = await fetch('https://api.valorantgame.com.tr/api/agents?populate=*');
    const data = await res.json();
    const agents = data.data;

    const paths = agents.map((agent) => ({
        params: { slug: agent.attributes.agent_name.toLowerCase().replace(/\s+/g, '') },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const res = await fetch('https://api.valorantgame.com.tr/api/agents?populate=*');
    const data = await res.json();
    const agents = data.data;

    // agent_name ile slug eşleşen ajanı filtreleme
    const agent = agents.find(
        (agent) =>
            agent.attributes.agent_name.toLowerCase().replace(/\s+/g, '') ===
            params.slug
    );

    return { props: { agent }, revalidate: 86400 };
}

export default AgentPage;
