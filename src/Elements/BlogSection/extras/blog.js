import React, { useEffect, useState } from "react";
import "./blog.css";
import axios from "axios";

function Blog() {
  // name of function component must be capital
  // e.preventDefault();
  // const [name, setName] = useState("");
  // var abc = [];
  // let data2 = [{
  //   "source": {
  //     "id": null,
  //     "name": "Barron's"
  //   },
  //   "author": "Steve Garmhausen",
  //   "title": "Morgan Stanley’s James Taylor: In a Hurry to Succeed",
  //   "description": "A 35-year-old Morgan Stanley team leader in New York City shares the keys to his success.",
  //   "url": "https://www.barrons.com/advisor/articles/morgan-stanley-james-taylor-advisor-new-york-succeed-7391cc2c",
  //   "urlToImage": "https://images.barrons.com/im-785350/social",
  //   "publishedAt": "2023-05-19T17:21:53Z",
  //   "content": "James Taylor is doing pretty well for a 35-year-old: He is the founder and lead advisor of an 11-person \r\nMorgan Stanley\r\nteam that manages nearly $1.2 billion and expects to grow that number by near… [+10651 chars]"
  // },
  // ];
  const [news, setNews] = useState({
    "source": {
      "id": null,
      "name": "Barron's"
    },
    "author": "Steve Garmhausen",
    "title": "Morgan Stanley’s James Taylor: In a Hurry to Succeed",
    "description": "A 35-year-old Morgan Stanley team leader in New York City shares the keys to his success.",
    "url": "https://www.barrons.com/advisor/articles/morgan-stanley-james-taylor-advisor-new-york-succeed-7391cc2c",
    "urlToImage": "https://images.barrons.com/im-785350/social",
    "publishedAt": "2023-05-19T17:21:53Z",
    "content": "James Taylor is doing pretty well for a 35-year-old: He is the founder and lead advisor of an 11-person \r\nMorgan Stanley\r\nteam that manages nearly $1.2 billion and expects to grow that number by near… [+10651 chars]"
  });

  useEffect(() => {
    // const abortController = new AbortController();

    async function getUser() {
      axios.get("https://newsapi.org/v2/everything?q=Waste Management&from=2023-05-18&sortBy=publishedAt&apiKey=30b4620f98854a0c89f54e0362429ef9", null, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
        .then((res) => {
          console.log(res.data)
          setNews(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    getUser();


    // setNews(data2);
    // window.alert(console.log(typeof news));


    // return () => {
    //   abortController.abort()
    // }

  }, [])

  // function blog_section(e) {
  //   axios.get("https://newsapi.org/v2/everything?q=Waste Management&from=2023-05-18&sortBy=publishedAt&apiKey=30b4620f98854a0c89f54e0362429ef9"
  //     )
  //     .then((res) => {
  //       // setN(res.data.articles.author);
  //       console.log(res.data);
  //       setNews(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  return (
    <>
      {news !== undefined ? (
        <div className="blog_container">
          <h1>Blog</h1>
          <div className="trending">
            <div className="imgg">
              {/* <source src={...}/> */}
            </div>
            {/* // <div  key={MyData.soucrce.id}>{MyData.source.name}</div>; */}

            <div className="data">
              <div className="heading">HEADING</div>
              <div className="meta_data">
                {/* <p onChange={setName}></p> */}
                {
                  news.map((MyData) => {
                    return <p key={Math.random() * 20} >{MyData.author}</p>;
                    // return console.log(MyData);
                  })
                }
                <p>{news.author}</p>
                <p>{news.publishedAt}</p>
              </div>
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
          {/* <button onClick={blog_section}>GET NEWS</button> */}
          {/* whenever render before render call blog section */}


          {/* <button
          onClick={(e) => {
            e.preventDefault();
            blog_section(e);
          }}
        >
          GET NEWS
        </button> */}
        </div>

      ) : null}

    </>

  );
}

export default Blog;
