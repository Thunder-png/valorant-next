import { useEffect, useState } from 'react';
import Link from "next/link"; // Link bileşenini içe aktar
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

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
            <div className="row">
                <div className="col-md-3">
                    <SideBar />
                </div>
                <div className="col-md-9">
                    <h1 className="my-4">Kontratlar</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {contracts.map((contract) => (
                            <div key={contract.id} className="col">
                                <Link href={`/kontratlar/${contract.attributes.contract_name.replace(/ /g, '-').toLowerCase()}`} className="text-decoration-none text-dark">
                                    <div className="card h-100">
                                        <img src={contract.attributes.contract_img} alt={contract.attributes.contract_name} className="card-img-top" />
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
        </div>
    );
};

export default KontratlarPage;