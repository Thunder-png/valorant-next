import { useEffect, useState } from 'react';
import Link from "next/link"; // Link bileşenini içe aktar
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import Breadcrumb from "../components/Breadcrumb";

const KontratlarPage = () => {
    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        async function fetchContracts() {
            const response = await fetch('https://api.valorantgame.com.tr/api/contracts?populate=*');
            const data = await response.json();
            setContracts(data.data);
        }
        fetchContracts();
    }, []);

    return (
        <div className="container">
            <TopBar />
            <div class="Label my-4">
                <h1 className="h1-background">Kontratlar</h1>
                <Breadcrumb />
            </div>
            <div className="row">
                <SideBar />
                <div className="row row-cols-2 row-cols-sm-3 row-cols-sm-5 g-4">
                    {contracts.map((contract) => (
                        <div key={contract.id} className="col">
                            <Link href={`/kontratlar/${contract.attributes.contract_name.replace(/ /g, '-').toLowerCase()}`} className="text-decoration-none text-dark">
                                <div className="card h-100">
                                    <img src={contract.attributes.contract_img} alt={contract.attributes.contract_name} className="card-img-battlepass" />
                                    <div className="card-body">
                                        <h3 className="card-title">{contract.attributes.contract_name}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KontratlarPage;
