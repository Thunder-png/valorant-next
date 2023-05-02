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
            const response = await fetch('https://valorantgame.com.tr/api/battlepasses?populate=*');
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
            <div className="row">
                <div className="col-12">
                    <h1 className="my-4">{slug ? slug.replace(/-/g, ' ') : 'Savaş Bileti'}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <SideBar />
                </div>
                <div className="col-lg-9">
                    {battlepass && (
                        <div>
                            <div className="row mb-4">
                                {Array(battlepass.attributes.rad_point).fill(0).map((_, index) => (
                                    <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                        <div className="card text-center">
                                            <img src="https://valorantfiles.com/images/currencies/e59aa87c-4cbf-517a-5983-6e81511be9b7/displayicon.png" alt="Rad Point" className="card-img-top" />
                                            <div className="card-body">
                                                <h3 className="card-title">10 Rad Point</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row mb-4">
                                {battlepass.attributes.battlepass_card.map((card) => (
                                    <div key={card.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                        <div className="card text-center">
                                            <img src={card.card_img} alt={card.card_name} className="card-img-top" />
                                            <div className="card-body">
                                                <h3 className="card-title">{card.card_name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row mb-4">
                                {battlepass.attributes.battlepass_spray.map((spray) => (
                                    <div key={spray.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                        <div className="card text-center">
                                            <img src={spray.spray_img} alt={spray.spray_name} className="card-img-top" />
                                            <div className="card-body">
                                                <h3 className="card-title">{spray.spray_name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row mb-4">
                                {battlepass.attributes.battlepass_buddy.map((buddy) => (
                                    <div key={buddy.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                        <div className="card text-center">
                                            <img src={buddy.buddy_img} alt={buddy.buddy_name} className="card-img-top" />
                                            <div className="card-body">
                                                <h3 className="card-title">{buddy.buddy_name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row mb-4">
                                {battlepass.attributes.silahlars.data.map((weapon) => (
                                    <div key={weapon.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                        <div className="card text-center">
                                            <img src={weapon.attributes.weapon_img} alt={weapon.attributes.weapon_name} className="card-img-top" />
                                            <div className="card-body">
                                                <h3 className="card-title">{weapon.attributes.weapon_name}</h3>
                                                <p>{weapon.attributes.weapon_price} VP</p>
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

export default SavasBiletiSlugPage;
