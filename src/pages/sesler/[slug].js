import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import TopBar from '../../components/TopBar';
import SideBar from '../../components/SideBar';

const SesSlugPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [voice, setVoice] = useState({});

    useEffect(() => {
        if (slug) {
            async function fetchData() {
                const response = await fetch(`https://api.valorantgame.com.tr/api/voices?filters[agent_name][$containsi]=${slug}&populate=*`);
                const data = await response.json();
                if (data && Array.isArray(data.data) && data.data.length > 0) {
                    setVoice(data.data[0]);
                } else {
                    setVoice({});
                }
            }
            fetchData();
        }
    }, [slug]);

    return (
        <div className="container">
            <TopBar />
            <SideBar />
            <div className="d-sm-flex align-items-center justify-content-between mb-3 h1-background">
                <h1 className="my-4">Ses hatları // {voice.attributes && voice.attributes.agent_name}</h1>
            </div>
            <div className="row">
                <div className="col-xl-6">
                    <div className="card-header p-3">
                        <h4 className="m-0 text-white h6">Seslendirme</h4>
                    </div>
                    {voice.attributes && voice.attributes.voices && voice.attributes.voices.map((v, i) => (
                        <div key={i} className="card mb-3 p-3">
                            <div className="row">
                                <div className="col-12 col-xxl-2 col-sm-3 text-center d-lg-flex align-items-center justify-content-between">
                                    <img loading="lazy" src={voice.attributes.agent_pic} alt={voice.attributes.agent_name} title={voice.attributes.agent_name} className="card-img-top" />
                                </div>
                                <div className="col-12 col-xxl-10 col-sm-9">
                                    <div className="p-2">
                                        <p className="small text-justify"></p>
                                        <audio controls>
                                            <source src={v.voice_link} type="audio/mp3" />
                                        </audio>
                                        <div className="card-header p-3">
                                            <h4 className="m-0 text-white h6">{v.voice_name}</h4>
                                        </div>
                                        <hr className="sidebar-divider" />
                                        <div className="row">
                                            <div className="small align-items-center justify-content-between col-12 col-lg-4">
                                                <span className="c1"><i className="fa-solid fa-square-check"></i> {v.voice_name}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SesSlugPage;
