import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="gpt3-feature">
      <div className="gpt3-feature-heading">
        <div className="line"></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt3-feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};
export default Feature;
