import { useEffect, useState } from 'react';
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";

const NewsPage = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            const response = await fetch('https://valorantgame.com.tr/api/newss?populate=*');
            const data = await response.json();
            setNewsList(data.data);
        }

        fetchNews();
    }, []);

    return (
        <div className="container">
            <TopBar />
            <div className="row">
                <div className="col-md-3">
                    <SideBar />
                </div>
                <div className="col-md-9">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {newsList.map((news) => (
                            <div key={news.id} className="col">
                                <a href={news.attributes.news_link} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                                    <div className="card h-100">
                                        <img src={news.attributes.news_img} alt={`Haber ${news.id}`} className="card-img-top" />
                                        <div className="card-body">
                                            <h3 className="card-title">{news.attributes.news_title}</h3>
                                            <p className="card-text">{news.attributes.news_description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
