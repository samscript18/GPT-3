import "./whatgpt3.css";
import { Feature } from "../../components";

const Whatgpt = () => {
  return (
    <div className="gpt3-wgpt3" id="wgpt3">
      <div className="whatgpt3">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="possibility">
        <h1 className="gradient-text">
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="whatgpt3-features">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};
export default Whatgpt;
