import { Feature } from "../../components";
import { featuresData } from "./FeaturesData";
import "./features.css";

const Features = () => {
  return (
    <div className="gpt3-features" id="features">
      <div className="gpt3-features-title">
        <h1 className="gradient-text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>
        <h4>Request Early Access To Get Started</h4>
      </div>
      <div className="gpt3-features-content">
        {featuresData.map((item, index) => {
          const { title, text } = item;
          return <Feature title={title} text={text} key={index} />;
        })}
      </div>
    </div>
  );
};
export default Features;
