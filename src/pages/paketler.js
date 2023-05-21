import { useEffect, useState } from 'react';
import Link from 'next/link';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import Breadcrumb from "../components/Breadcrumb";

const PaketlerPage = () => {
    const [bundles, setBundles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.valorantgame.com.tr/api/bundles?populate=*');
            const data = await response.json();
            setBundles(data.data);
        }
        fetchData();
    }, []);

    return (
        <div className="container">
            <TopBar />
            <div class="Label h1-background my-4">
                <h1 className="h1-background h5.card-title">Koleksiyonlar </h1>
                <Breadcrumb />
            </div>
            <div className="row">
                <SideBar />
                <div className="row row-cols-2 row-cols-sm-3 row-cols-sm-5 g-4">
                    {bundles.map((bundle) => {
                        const formattedTitle = bundle.attributes.bundle_name.toLowerCase().replace(/\s+/g, '');
                        return (
                            <div key={bundle.id} className="col">
                                <Link href={`/paketler/${formattedTitle}`} className="text-decoration-none text-dark">
                                    <div className="card h-100">
                                        <img src={bundle.attributes.bundle_img} alt={bundle.attributes.bundle_name} className="card-img-battlepass" />
                                        <div className="card-body">
                                            <h3 className="card-title">{bundle.attributes.bundle_name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    );
};

export default PaketlerPage;
