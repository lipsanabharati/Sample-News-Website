import React from "react";
import NewsBlock from "./Newsblock";

export default function Content({news=[]}) {
  
  return (
    <main className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 align="center" className="text-danger">Breaking News</h1>
          </div>
        </div>

        <div className="news-columns row">
          {
            news.map(function (newsItem,index) {
              return <NewsBlock key={index} newsitem={newsItem} />;
            })
          }
        </div>
      </div>
    </main>
  );
}
