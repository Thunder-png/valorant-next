// pages/agents/[slug].js
import { useRouter } from 'next/router';
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";


const AgentPage = ({ agent }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const agentAttributes = agent.attributes;
    const agentRole = agentAttributes.ajan_rolue.data.attributes;
    const agentAbilities = agentAttributes.ajan_yetenekleris.data;

    return (
        <div className="container">
            <TopBar />
            <h1 className="my-4 h1-background">{agentAttributes.agent_name}</h1>
            <div className="row">
                <SideBar />

                <div className="col-xl-4">
                    <div className="mb-4">
                        <div className="card mb-4 p-3">
                            <div className="row">
                                <div className="col-lg-4 text-center d-lg-flex align-items-center justify-content-between">
                                    <img loading="lazy" src={agentAttributes.agent_thumb} alt={agentAttributes.agent_name} className="card-img-top rounded-circle" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="p-2">
                                        <h3 className="h5 text-center c1">Bi̇lgi̇</h3>
                                        <p className="small text-justify">{agentAttributes.agent_description}</p>
                                        <hr className="sidebar-divider" />
                                        <div className="small d-flex align-items-center justify-content-between text-gray-400">
                                            Bölge/ülke
                                            <img loading="lazy" src={agentAttributes.agent_flag} width="20px" className="mr-2 align-top text-right" alt={agentAttributes.agent_country} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* More Cards Here */}
                    </div>
                </div>
                <div className="col-xl-5">
                    <div className="card-header p-3">
                        <h4 className="m-0 text-white h6">Ajan yetenek tüyoları</h4>
                    </div>
                    {agentAbilities.map((ability) => {
                        const abilityAttributes = ability.attributes;
                        return (
                            <div className="card mb-3 p-3" key={ability.id}>
                                <div className="row">
                                    <div className="col-12 col-xxl-2 col-sm-3 text-center d-lg-flex align-items-center justify-content-between">
                                        <img loading="lazy" src={abilityAttributes.abilty_icon} alt={abilityAttributes.abilty_name} className="card-img-ic" />
                                    </div>
                                    <div className="col-12 col-xxl-10 col-sm-9">
                                        <div className="p-2">
                                            <h3 className="h5 text-center c1">{abilityAttributes.abilty_name}</h3>
                                            <p className="small text-justify">{abilityAttributes.abilty_description}</p>
                                            <hr className="sidebar-divider" />
                                            <div className="row">
                                                <div className="small align-items-center justify-content-between col-12 col-lg-4">
                                                    <span className="c1">Key: {abilityAttributes.abilty_key}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {abilityAttributes.abilty_video && (
                                    <video controls loop className="mw-100" title={abilityAttributes.abilty_name}>
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
