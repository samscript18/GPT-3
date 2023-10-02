import "./footer.css";
import logo from "../../assets/logo.svg";
import { FaHeartbeat } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="gpt3-footer">
      <div className="gpt3-footer-heading">
        <h1 className="gradient-text">
          Do you want to step in to the future before others
        </h1>
        <button type="button">Request Early Access</button>
      </div>
      <div className="gpt3-footer-content">
        <div className="footer-links">
          <img src={logo} alt="GPT-3" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="footer-links">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3-footer-text">
        <p>
          &copy; 2023 GPT-3, Made with
          <FaHeartbeat className="fa-icon" size={18} />
          by Adesugba Samuel
        </p>
      </div>
    </div>
  );
};
export default Footer;
