import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";

const PaketlerSlugPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [bundle, setBundle] = useState(null);

    useEffect(() => {
        async function fetchBundle() {
            const response = await fetch('https://valorantgame.com.tr/api/bundles?populate=*');
            const data = await response.json();
            const foundBundle = data.data.find(
                (b) =>
                    b.attributes.bundle_name.toLowerCase().replace(/\s+/g, "") ===
                    slug.toLowerCase()
            );
            setBundle(foundBundle);
        }
        if (slug) {
            fetchBundle();
        }
    }, [slug]);

    return (
        <div className="container">
            <TopBar />
            <div className="row">
                <div className="col-3">
                    <SideBar />
                </div>
                <div className="col-9">

                    {bundle && (
                        <div>
                            <h1 className="my-4">{bundle.attributes.bundle_name}</h1>
                            <div className="infoContainer">
                                <div className="imgContainer">
                                    <img src={bundle.attributes.bundle_img} alt={bundle.attributes.bundle_name} className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <h5 className="Info-Head">Bilgi</h5>
                                        <p>Episode Name: {bundle.attributes.episode_name}</p>
                                        <p>Act Num: {bundle.attributes.act_num}</p>
                                        <p>Act Date: {bundle.attributes.act_date}</p>
                                        <p>Battlepass Option: {bundle.attributes.battlepass_opt}</p>
                                    </div>

                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                {bundle.attributes.silahlars.data.map((weapon) => (
                                    <div key={weapon.id} className="col-md-4 text-center mb-4">
                                        <div className='mh-230 d-flex align-items-center'>
                                            <div className='mx-auto'>
                                                <img src={weapon.attributes.weapon_img} alt={weapon.attributes.weapon_name} className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className='card-body p-1'>
                                            <h3 className="h7 card-title mc-1 m-1 p-1 mt-3 mb-2">{weapon.attributes.weapon_name}</h3>
                                            <p>{weapon.attributes.weapon_price}VP</p>
                                        </div>
                                        <div className="cardBottomLine"></div>

                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                {bundle.attributes.bundle_card.map((card) => (
                                    <div key={card.id} className="col-md-4 text-center mb-4">
                                        <img src={card.card_img} alt={card.card_name} className="img-fluid" />
                                        <h3>{card.card_name}</h3>
                                        <div className="cardBottomLine"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                {bundle.attributes.bundle_spray.map((spray) => (
                                    <div key={spray.id} className="col-md-4 text-center mb-4">
                                        <img src={spray.spray_img} alt={spray.spray_name} className="img-fluid" />
                                        <h3>{spray.spray_name}</h3>
                                        <div className="cardBottomLine"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                {bundle.attributes.bundle_buddy.map((buddy) => (
                                    <div key={buddy.id} className="col-md-4 text-center mb-4">
                                        <img src={buddy.buddy_img} alt={buddy.buddy_name} className="img-fluid" />
                                        <h3>{buddy.buddy_name}</h3>
                                        <div className="cardBottomLine"></div>
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
export default PaketlerSlugPage;

