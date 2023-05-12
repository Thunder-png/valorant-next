import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";


const KontratlarSlugPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [contract, setContract] = useState(null);

    useEffect(() => {
        async function fetchContract() {
            const response = await fetch('https://api.valorantgame.com.tr/api/contracts?populate=weapon_cards,weapon_cards.silahlars,contract_card,contract_spray,contract_buddy');
            const data = await response.json();
            const foundContract = data.data.find(c => c.attributes.contract_name.replace(/ /g, '-').toLowerCase() === slug.toLowerCase());
            setContract(foundContract);
        }
        if (slug) {
            fetchContract();
        }
    }, [slug]);

    return (
        <div className="container">
            <TopBar />
            <h1 className="mb-4">{slug ? slug.replace(/-/g, ' ') : 'Kontratlar'}</h1>

            <div className="row mt-4">
                <div className="col-md-3">
                    <SideBar />
                </div>
                <div className="col-md-9">
                    {contract && (
                        <div>
                            <div className="d-flex align-items-center mb-4">
                                <img src={contract.attributes.contract_img} alt={contract.attributes.contract_name} className="img-fluid" />
                                <h2 className="ml-3">{contract.attributes.contract_name}</h2>
                            </div>
                            <div className="row">
                                {contract.attributes.weapon_cards.map((weaponCard) => (
                                    Array.isArray(weaponCard.silahlars.data) && weaponCard.silahlars.data.map((weapon) => (
                                        <div key={weapon.id} className="col-md-4 col-sm-6 mb-3">
                                            <div className="card">
                                                <img src={weapon.attributes.weapon_img} alt={weapon.attributes.weapon_name} className="card-img-top" />
                                                <div className="card-body">
                                                    <h3 className="card-title">{weapon.attributes.weapon_name}</h3>
                                                    <p className='card-tier'>Asama:{weaponCard.tier}</p>
                                                    <div className='cardBottomLine '></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ))}

                                {contract.attributes.contract_card.map((card) => (
                                    <div key={card.id} className="col-md-4 col-sm-6 mb-3">
                                        <div className="card">
                                            <img src={card.card_img} alt={card.card_name} className="card-img-top" />
                                            <div className="card-body">
                                                <h3 className="card-title">{card.card_name}</h3>
                                                <p className='card-tier'>Asama:{card.tier}</p>
                                                <div className='cardBottomLine '></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {contract.attributes.contract_spray.map((spray) => (
                                    <div key={spray.id} className="col-md-4 col-sm-6 mb-3">
                                        <div className="card">
                                            <img src={spray.spray_img} alt={spray.spray_name} className="card-img-top" />
                                            <div className="card-body">
                                                <h3 className="card-title">{spray.spray_name}</h3>
                                                <p className='card-tier'>Asama:{spray.tier}</p>
                                                <div className='cardBottomLine '></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {contract.attributes.contract_buddy.map((buddy) => (
                                    <div key={buddy.id} className="col-md-4 col-sm-6 mb-3">
                                        <div className="card">
                                            <img src={buddy.buddy_img} alt={buddy.buddy_name} className="card-img-top" />
                                            <div className="card-body">
                                                <h3 className="card-title">{buddy.buddy_name}</h3>
                                                <p className='buddy-tier'>Asama:{buddy.tier}</p>
                                                <div className='cardBottomLine '></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default KontratlarSlugPage;
