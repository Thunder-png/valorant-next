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
            <div className="row">

                <SideBar />

                <div className="col-md-9">
                    <div className="mb-4">
                        <h1>{attributes.map_name}</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={attributes.map_img} alt={attributes.map_name} className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <p>{attributes.map_date}</p>
                            <p>{attributes.map_region}</p>
                            <p>{attributes.map_coord}</p>
                            <p>{attributes.map_call_sign}</p>
                            <p>{attributes.map_spike_site}</p>
                            <p>{attributes.map_rotation}</p>
                            <p>{attributes.map_theme_sound}</p>
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
