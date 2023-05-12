import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";

const SavasBiletiSlugPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [battlepass, setBattlepass] = useState(null);

    useEffect(() => {
        async function fetchBattlepass() {
            const response = await fetch('https://api.valorantgame.com.tr/api/battlepasses?populate=weapon_cards,weapon_cards.silahlars,battlepass_card,battlepass_spray,battlepass_buddy');
            const data = await response.json();
            const foundBattlepass = data.data.find(bp => bp.attributes.battlepass_name.replace(/ /g, '-').toLowerCase() === slug.toLowerCase());
            setBattlepass(foundBattlepass);
        }
        if (slug) {
            fetchBattlepass();
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
                    {battlepass && (
                        <div>
                            <div className="d-flex align-items-center mb-4">
                                <img src={battlepass.attributes.battlepass_img} alt={battlepass.attributes.battlepass_name} className="img-fluid" />
                                <h2 className="ml-3">{battlepass.attributes.battlepass_name}</h2>
                            </div>
                            <div className="row">
                                {battlepass.attributes.weapon_cards.map((weaponCard) => (
                                    Array.isArray(weaponCard.silahlars.data) && weaponCard.silahlars.data.map((weapon) => (
                                        <div key={weapon.id} className="col-md-4 col-sm-6 mb-3">
                                            <div className="card">
                                                <img src={weapon.attributes.weapon_img} alt={weapon.attributes.weapon_name} className="card-img-top" />
                                                <div className="card-body">
                                                    <h3 className="card-title">{weapon.attributes.weapon_name}</h3>
                                                    <p className="card-text">{weapon.attributes.weapon_price}</p>
                                                    <p className='card-tier'>Asama:{weaponCard.tier}</p>
                                                    <div className='cardBottomLine '></div>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ))}

                                {battlepass.attributes.battlepass_card.map((card) => (
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
                                {battlepass.attributes.battlepass_spray.map((spray) => (
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
                                {battlepass.attributes.battlepass_buddy.map((buddy) => (
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

    // ... Geri kalan SavasBiletiSlugPage bileşeni kodu ...
};

export default SavasBiletiSlugPage;
