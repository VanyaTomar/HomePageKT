import React from 'react';
import "./blog.css";
import Trending from "./trending_section";
import MoreBlogs from "./moreBlog"

const Sample_blog = () => {

    return (
        <>
            <div className="blog_container">
                <h1>Blog</h1>
                <br />
                <p>TOP HEADLINES </p>
                {/* <hr/> */}
                <Trending />
                <br />
                <p>MORE BLOGS </p>
                {/* <hr/> */}
                <MoreBlogs />
            </div>

            {/* <div>
                <hr />
                <h1>API FETCHING</h1>
                {load === true &&
                    data.map((news, index) => {
                        return (
                            <div class="card" >
                                <img className="card-img-top" src={news.urlToImage} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{news.title}</h5>
                                    <p className="card-text">{news.description}</p>
                                    <a href={news.url} className="btn btn-primary">Read</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div> */}
        </>


    )
}

export default Sample_blog
