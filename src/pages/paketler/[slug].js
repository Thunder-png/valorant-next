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
            const response = await fetch('https://api.valorantgame.com.tr/api/bundles?populate=*');
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
            <SideBar />
            {bundle && (
                <h1 className="mb-4 h1-background">{bundle.attributes.bundle_name}</h1>
            )}
            <div className="row mt-4">
                <div className="col-md-9">
                    {bundle && (
                        <div>
                            <div className="d-flex align-items-center mb-4">
                                {bundle && (
                                    <div>
                                        <div class="mb-4">
                                            <div class="text-center mb-2 card-ram p-3">
                                                <img loading="lazy" src={bundle.attributes.bundle_img} class="card-img-battlepass" alt={bundle.attributes.bundle_name} title={bundle.attributes.bundle_name} />
                                            </div>
                                            <div class="card mb-4 p-3">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="p-2">
                                                            <h4 class="h5 text-center c1">Bilgi</h4>
                                                            <p class="small text-justify"></p>
                                                            <hr class="sidebar-divider" />

                                                            <div class="d-flex">
                                                                <div class="p-1">Bölüm</div>
                                                                <div class="p-1 text-gray-400">{bundle.attributes.episode_num}</div>
                                                                <div class="ml-auto p-2">
                                                                    <span class="text-right"><small class="text-gray-400">{bundle.attributes.episode_name}</small></span>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex">
                                                                <div class="p-1">Kısım</div>
                                                                <div class="p-1 text-gray-400">{bundle.attributes.act_num}</div>
                                                                <div class="ml-auto p-2">
                                                                    <span class="text-right"><small class="text-gray-400">{bundle.attributes.act_date}</small></span>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex">
                                                                <div class="p-1">Battlepass:</div>

                                                                <div class="ml-auto p-2">
                                                                    <span class="text-right"><small class="text-gray-400">{bundle.attributes.battlepass_opt}</small></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            {bundle.attributes.silahlars.data.map((weapon) => (
                                                <div key={weapon.id} className="col-md-4 col-sm-6 mb-3">
                                                    <div className="card">
                                                        <img src={weapon.attributes.weapon_img} alt={weapon.attributes.weapon_name} className="card-img-top" />
                                                        <div className="card-body">
                                                            <h3 className="card-title">{weapon.attributes.weapon_name}</h3>
                                                            <p className='card-tier'>Fiyat:{weapon.attributes.weapon_price} VP</p>
                                                            <div className='cardBottomLine '></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {bundle.attributes.bundle_card.map((card) => (
                                                <div key={card.id} className="col-md-4 col-sm-6 mb-3">
                                                    <div className="card">
                                                        <img src={card.card_img} alt={card.card_name} className="card-img-top" />
                                                        <div className="card-body">
                                                            <h3 className="card-title">{card.card_name}</h3>
                                                            <div className='cardBottomLine '></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {bundle.attributes.bundle_spray.map((spray) => (
                                                <div key={spray.id} className="col-md-4 col-sm-6 mb-3">
                                                    <div className="card">
                                                        <img src={spray.spray_img} alt={spray.spray_name} className="card-img-top" />
                                                        <div className="card-body">
                                                            <h3 className="card-title">{spray.spray_name}</h3>
                                                            <div className='cardBottomLine '></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {bundle.attributes.bundle_buddy.map((buddy) => (
                                                <div key={buddy.id} className="col-md-4 col-sm-6 mb-3">
                                                    <div className="card">
                                                        <img src={buddy.buddy_img} alt={buddy.buddy_name} className="card-img-top" />
                                                        <div className="card-body">
                                                            <h3 className="card-title">{buddy.buddy_name}</h3>
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
                    )}
                </div>
            </div>

        </div>


    );
};

export default PaketlerSlugPage;

