import React, { useEffect, useState } from 'react';
import "./blog.css";


const MoreBlog = () => {
    const [load, setload] = useState(false);
    const [data, setData] = useState([]);
    const getting = async () => {

        let url = 'https://newsapi.org/v2/everything?q=Waste Management&sortBy=publishedAt&apiKey=30b4620f98854a0c89f54e0362429ef9';
        setload(false);
        let data = await fetch(url);
        let parsedData = await data.json();
        setData(parsedData.articles);
        setload(true);

    }
    useEffect(() => {
        getting();
    }, []);

    return (
        <div className="news">
            <div class="card" >
                <div className='row'>
                    {load === true && (
                        data.map((news, index) => {
                            return (
                                <div className='col-md-3' key={Math.random() * 20}>
                                    <img className="card-img-top" src={news.urlToImage} alt="News Img" />
                                    <div className='meta_data'>
                                        <p>SOURCE : {news.source.name}</p>
                                        <p>AUTHOR : {news.author}</p>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title">{news.title}</p>
                                        {/* <p className="card-text">{news.description}</p> */}
                                        <a href={news.url} >Read More...</a>
                                    </div>
                                </div>


                            )
                        }
                        ))
                    }
                </div>
                <p>You are all caught up for now !!!</p>

            </div>

        </div>
    )
}

export default MoreBlog
