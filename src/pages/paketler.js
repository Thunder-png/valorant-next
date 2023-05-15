import Link from "next/link"; // Link bileşenini içe aktar
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const PaketlerPage = ({ bundles }) => {
    return (
        <div className="container">
            <TopBar />
            <div className="row">
                <SideBar />
                <div className="col-xl-9">
                    <h1 className="my-4 h1-background">Paketler</h1>
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                        {bundles.map((bundle) => {
                            const formattedTitle = bundle.attributes.bundle_name.toLowerCase().replace(/\s+/g, '');
                            return (
                                <div key={bundle.id} className="col text-center">
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
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch('https://api.valorantgame.com.tr/api/bundles?populate=*');
    const data = await response.json();
    const bundles = data.data;

    return {
        props: {
            bundles,
        },
    };
}

export default PaketlerPage;
