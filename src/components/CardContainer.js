// components/CardContainer.js
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CardContainer = () => {
    const [mainElements, setMainElements] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                'https://api.valorantgame.com.tr/api/ana-sayfa?populate=*'
            );
            const data = await response.json();
            setMainElements(data.data.attributes.main_element);
        }
        fetchData();
    }, []);

    return (
        <div className="card-deck">
            {mainElements.map((element) => {
                const formattedTitle = element.main_title
                    .toLowerCase()
                    .replace(/\s+/g, '');
                return (
                    <div key={element.id} className="card">
                        <Link href={`/${formattedTitle}`} passHref>
                            <Image
                                src={element.main_url}
                                alt={element.main_title}
                                width={200}
                                height={300}
                                priority={true}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{element.main_title}</h5>
                            </div>
                            <div className='cardBottomLine'>

                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default CardContainer;
