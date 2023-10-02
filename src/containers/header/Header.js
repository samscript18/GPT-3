import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div id="home" className="gpt3-header">
      <div className="gpt3-header-content">
        <h1 className="gradient-text">
          let's build something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          ipsam. Quaerat magni nisi excepturi laboriosam similique mollitia
          pariatur officia accusamus quas. Impedit commodi nesciunt iure
          assumenda voluptates nemo quaerat reiciendis?
        </p>
        <div className="input-control">
          <input type="email" name="email" placeholder="Your Email Address" />
          <button type="button">Proceed</button>
        </div>
        <div className="header-people">
          <img src={people} alt="people" />
          <p>Lorem ipsum dolor sit amet consectetur elit except</p>
        </div>
      </div>
      <div className="gpt3-header-img">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};
export default Header;
