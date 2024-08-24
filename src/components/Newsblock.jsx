export default function NewsBlock(props) {
    console.log("props = " + props);
    console.log(props.newsitem);
    const { title, description, urlToImage, source, author, url } =
      props.newsitem;
    return (
      <div className="col-xl-4 col-lg-6 col-md-6">
        <article className="news-block" data-toggle="modal" href="#news-popup">
          <figure className="news-image">
            <div className="skewed-div"></div>
            <img src={urlToImage} alt={title} />
          </figure>
  
          <br />
  
          <div className="news-headlines">{title}</div>
          <div className="news-author">
            by <span className="text-primary">{author}</span>
          </div>
  
          <div className="news-text">
            <div className="news-headlines">{title}</div>
            <div className="news-author">by {author}</div>
            <div className="news-details">
              <div className="news-content">{description}</div>
              <div className="read-more">
                <a href={url} target="_blank">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
  