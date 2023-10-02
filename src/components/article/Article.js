import "./article.css";

const Article = ({ img, date, text }) => {
  return (
    <div className="gpt3-article">
      <div className="gpt3-article-image">
        <img src={img} alt={text} />
      </div>
      <div className="gpt3-article-content">
        <p>{date}</p>
        <h3>{text}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};
export default Article;
