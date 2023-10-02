import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3-navbar">
      <div className="navbar-links">
        <div className="navbar-logo">
          <img src={logo} alt="GPT3" />
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#wgpt3">What is GPT</a>
          <a href="#features">Open AI</a>
          <a href="#possibilities">Case Study</a>
          <a href="#blog">Library</a>
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar-links scale-up-center">
            <div className="nav-menu-links">
              <a href="#home">Home</a>
              <a href="#wgpt3">What is GPT</a>
              <a href="#possibilities">Open AI</a>
              <a href="#features">Case Study</a>
              <a href="#blog">Library</a>
            </div>
            <div className="navbar-sign nav-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
