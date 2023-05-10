import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";

const MapPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (!slug) return;

        async function fetchMap() {
            const response = await fetch(`https://api.valorantgame.com.tr/api/maps?populate=*`);
            const data = await response.json();
            const foundMap = data.data.find(m => m.attributes.map_name.toLowerCase().replace(/\s+/g, '') === slug.toLowerCase());
            setMap(foundMap);
        }
        fetchMap();
    }, [slug]);

    if (!map) {
        return <div>Loading...</div>;
    }

    const { attributes } = map;

    return (
        <div className="container">
            <TopBar />
            <SideBar />
            <div className="row">
                <div className="col-xl-4">
                    <div className="mb-4">
                        <div className="card mb-4 p-3">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="d-flex align-items-center">
                                        <img src={attributes.map_img} className="card-img-top p-3 mb-3 mt-3 mx-auto w-10" alt={attributes.map_name} title={attributes.map_name} />
                                    </div>
                                    <div className="p-2">
                                        <h4 className="h5 text-center c1 h6">Bilgi</h4>
                                        <hr className="sidebar-divider" />
                                        <div className="d-flex">
                                            <div className="p-1">Eklenme Tarihi</div>
                                            <div className="ml-auto p-2">
                                                <span className="text-right"><small className="text-gray-400">{attributes.map_date}</small></span>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="p-1">Bölge / Ülke</div>
                                            <div className="ml-auto p-2">
                                                <span className="text-right"><small className="text-gray-400">{attributes.map_region}</small></span>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="p-1">Koordinatlar:</div>
                                            <div className="ml-auto p-2">
                                                <span className="text-right"><small className="text-gray-400">{attributes.map_coord}</small></span>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="p-1">Kod adı:</div>
                                            <div className="ml-auto p-2">
                                                <span className="text-right"><small className="text-gray-400">{attributes.map_call_sign}</small></span>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="p-1">Spike Sites:</div>
                                            <div className="ml-auto p-2">
                                                <span className="text-right"><small className="text-gray-400">{attributes.map_spike_site}</small></span>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="p-1">Rotasyon Durumu:</div>
                                            <div className="ml-auto p-2">
                                                <span className="text-right"><small className="text-gray-400">{attributes.map_rotation}</small></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="card-header p-3">
                                <h4 className="m-0 text-white h6">Harita Teması</h4>
                            </div>
                            <div className="card-body text-center p-4">
                                {attributes.map_theme_sound && (
                                    <audio controls>
                                        <source src={attributes.map_theme_sound} type="audio/mpeg" />
                                        Your browser does not support the audio tag.
                                    </audio>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5">
                    <div className="card-header p-3">
                        <h4 className="m-0 text-white h6">Harita Hakkında</h4>
                    </div>

                    <div className="card mb-3 p-3">
                        <div className="row">
                            <div className="col-12 col-xxl-10 col-sm-9">
                                <div className="p-2">
                                    <h3 className="h5 text-center c1">{attributes.map_name}</h3>
                                    <p className="small text-justify">
                                        {attributes.map_description}
                                    </p>
                                    <hr className="sidebar-divider" />
                                </div>
                            </div>
                        </div>
                        <img className="mw-100" src={attributes.map_plan} alt={`${attributes.map_name} plan`} title={`${attributes.map_name} plan`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapPage;
