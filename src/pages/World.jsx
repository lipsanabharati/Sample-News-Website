import "bootstrap/dist/css/bootstrap.css";
import Content from "../components/Content";
import React from "react";

function World() {
  const API_KEY = "f0a2ad8dfe0b47738478083b473e887a";

  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(false);//before data comes it is false initially

  const [searchQuery, setSearchQuery] = React.useState("");

  const NewsArticles = [];

  React.useEffect(() => {
    setLoading(true);
    fetch(
      "https://newsapi.org/v2/top-headlines?category=general&language=en&country=us&apiKey=" +
        API_KEY//request pathayo
    )
      .then((res) => res.json())//raw data lai json format ma lekhyo
      .then((data) => setNews(data.articles))//res.json stays in data variable and we need only article attribute so data.articles
      .then(setLoading(false));//after it loads no need to loanpd more
  }, []);
  return (
    <>
      
      <Content news={news} />
    </>
  );
}

export default World;
