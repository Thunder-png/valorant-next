import { useEffect, useState } from 'react';
import Link from 'next/link';
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const HaritalarPage = () => {
    const [maps, setMaps] = useState([]);

    useEffect(() => {
        async function fetchMaps() {
            const response = await fetch('https://valorantgame.com.tr/api/maps?populate=*');
            const data = await response.json();
            setMaps(data.data);
        }
        fetchMaps();
    }, []);

    return (
        <div className="container">
            <TopBar />
            <div className="row">
                <div className="col-md-3">
                    <SideBar />
                </div>
                <div className="col-md-9">
                    <h1 className="my-4">Haritalar</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {maps.map((map) => (
                            <div key={map.id} className="col">
                                <Link className="text-decoration-none text-dark" href={`/haritalar/${encodeURIComponent(map.attributes.map_name.toLowerCase().replace(/\s+/g, ''))}`} key={map.id}>
                                    <div className="card h-100">
                                        <img src={map.attributes.map_img} alt={map.attributes.map_name} className="card-img-top" />
                                        <div className="card-body">
                                            <h3 className="card-title">{map.attributes.map_name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HaritalarPage;
