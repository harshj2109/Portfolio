import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import "../Css/Navbar.css";
const Navbar = () => {
  const [nav, setnav] = useState(true);
  const [clas, setclas] = useState("nav2");

  function click() {
    setclas((oldvalue) => {
      return oldvalue === "nav2" ? "nav2 slide" : "nav2";
    });
    setnav((oldvalue) => {
      return !oldvalue;
    });
  }

  return (
    <div className="main-navbar">
      <div className="nav1">
        <div className="nav1-text">Portfolio.</div>
      </div>
      <div className="ham-nav">
        {nav ? (
          <HiOutlineBars3 className="hamburger" onClick={click} />
        ) : (
          <HiOutlineBars3BottomLeft className="hamburger" onClick={click} />
        )}
      </div>
      <div className={clas}>
        <a href="#project" className="nav2-text" onClick={click}>
          Projects
        </a>
        <a className="nav2-text" href="#contact" onClick={click}>
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/171GubQ6FyC4UkbcPY-Jzl0UIshgzwDkO/view?usp=drive_link"
          target="_blank"
          className="nav2-text"
          onClick={click}
        >
          Resume
        </a>
        <a
          className="nav2-text"
          href="https://www.linkedin.com/in/jainharsh0907/"
          target="_blank"
          onClick={click}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/harshj2109"
          target="_blank"
          className="nav2-text"
          onClick={click}
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
