import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./blog.css";

const Sample_blog = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=Waste Management&from=2023-05-18&sortBy=publishedAt&apiKey=30b4620f98854a0c89f54e0362429ef9')
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <>
            {data !== undefined && (
                <div>
                    <div className="blog_container">
                        <h1>Blog</h1>
                        <div className="trending">
                            <div className="imgg">
                                {/* <source src={...}/> */}
                            </div>

                            <div className="data">
                                <div className="heading">HEADING</div>
                                {
                                    data.map((news, index) => {
                                        return (
                                            <div className="meta_data" key={index}>
                                                <p>{news.author}</p>
                                                <p>{news.publishedAt}</p>
                                            </div>
                                        )
                                    })
                                }
                                <div className="description">DESCRIPTION</div>
                            </div>
                        </div>
                        <div className="news">
                            <div className="row" id="1">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="row" id="1">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                    </div>
                </div>
            ) }
        </>

    )
}

export default Sample_blog
