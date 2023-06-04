import React, { useState, useEffect } from 'react'
import './blog.css'


const Trending_section = () => {

    const [load, setload] = useState(false);
    const [data, setData] = useState([]);
    const getting = async () => {

        let url = 'https://newsapi.org/v2/everything?q=waste management&to=2023-05-24&sortBy=popularity&pageSize=1&apiKey=30b4620f98854a0c89f54e0362429ef9';
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
        <>
            {load === true &&
                data.map((news, index) => {
                    return (

                        <div className="trending">
                            <div className="imgg" alt="News_Img">
                                <img src={news.urlToImage} alt='PHOTOO' />
                            </div>

                            <div className="data">
                                <div className="heading">{news.title}</div>
                                <div className='meta_data'>
                                    <p>SOURCE : {news.source.name}</p>
                                    <p>AUTHOR : {news.author}</p>
                                </div>
                                <div className="description">
                                    {news.description}
                                    <br />
                                    <a className='readMore' href={news.url}> Read More...</a>
                                </div>
                            </div>

                        </div>


                        //<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        //   <div class="carousel-inner">
                        //     <div class="carousel-item active">
                        //       <img class="d-block w-100" src="..." alt="First slide">
                        //     </div>
                        //     <div class="carousel-item">
                        //       <img class="d-block w-100" src="..." alt="Second slide">
                        //     </div>
                        //     <div class="carousel-item">
                        //       <img class="d-block w-100" src="..." alt="Third slide">
                        //     </div>
                        //   </div>
                        //   <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        //     <span class="sr-only">Previous</span>
                        //   </a>
                        //   <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        //     <span class="sr-only">Next</span>
                        //   </a>
                        // </div>


                    )
                }
                )}
        </>
    )
}

export default Trending_section
