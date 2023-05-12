import Link from "next/link"; // Link bileşenini içe aktar
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const SavasBileti = ({ battlepasses }) => {
    return (
        <div className="container">
            <TopBar />
            <div className="row">
                <SideBar />
                <div className="col-xl-9">
                    <h1 className="my-4">Savaş Bileti</h1>
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                        {battlepasses.map((battlepass) => (
                            <div key={battlepass.id} className="col text-center">
                                <Link href={`/savasbileti/${battlepass.attributes.battlepass_name.replace(/ /g, '-').toLowerCase()}`} className="text-decoration-none text-dark">
                                    <div className="card h-100">
                                        <img src={battlepass.attributes.battlepass_img} alt={battlepass.attributes.battlepass_name} className="card-img-battlepass" />
                                        <div className="card-body">
                                            <h3 className="card-title">{battlepass.attributes.battlepass_name}</h3>
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

export async function getStaticProps() {
    const response = await fetch('https://api.valorantgame.com.tr/api/battlepasses?populate=*');
    const data = await response.json();
    const battlepasses = data.data;

    return {
        props: {
            battlepasses,
        },
    };
}

export default SavasBileti;
