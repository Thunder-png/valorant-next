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



                <div className="col-md-9">
                    <div className="mb-4">
                        <h1>{attributes.map_name}</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={attributes.map_img} alt={attributes.map_name} className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <p className='textGray'>Çıkış Tarihi: <span className='textRight'>{attributes.map_date}</span></p>
                            <p className='textGray'>Harita Bölgesi: <span className='textRight'>{attributes.map_region}</span></p>
                            <p className='textGray'>Koordinatlar: <span className='textRight'>{attributes.map_coord}</span></p>
                            <p className='textGray'>Kod Adı: <span className='textRight'>{attributes.map_call_sign}</span></p>
                            <p className='textGray'>Spike Site: <span className='textRight'>{attributes.map_spike_site}</span></p>
                            <p className='textGray'>Rotasyon: <span className='textRight'>{attributes.map_rotation}</span></p>
                            <p className='textGray'>Harita Sesi: <span className='textRight'>{attributes.map_theme_sound && (
                                <audio controls>
                                    <source src={attributes.map_theme_sound} type="audio/mpeg" />
                                    Your browser does not support the audio tag.
                                </audio>
                            )}</span></p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2>About the Map</h2>
                        <p>{attributes.map_description}</p>
                        <img src={attributes.map_plan} alt={`${attributes.map_name} plan`} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapPage;
