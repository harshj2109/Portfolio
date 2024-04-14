import React, { useState } from "react";
import "../Css/Hero.css";
import Navbar from "./Navbar";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail, BiSolidUpArrowCircle } from "react-icons/bi";
import "../Css/Project.css";
import "../Css/Skills.css";
import "../Css/Contact.css";
const Hero = () => {
  const [ui, setui] = useState(false);
  function dropui() {
    setui(!ui);
  }
  const [front, setfront] = useState(false);
  function dropf() {
    setfront(!front);
  }

  const [backend, setbackend] = useState(false);
  function dropback() {
    setbackend(!backend);
  }

  const [database, setdatabase] = useState(false);
  function dropdatabase() {
    setdatabase(!database);
  }
  return (
    <div className="Top-conatiner">
      <div className="hero-main-conatiner">
        <Navbar />
        <div className="hero-container">
          <div className="hero-head">I'm a Mern Stack Developer</div>
          <div className="hero-body">
            A passionate frontend developer on a mission to craft extraordinary
            digital experiences that leave users spellbound
          </div>
        </div>
        <div className="Down-btn">
          <a className="arrow" href="#skills">
            <IoMdArrowDropdownCircle />
          </a>
        </div>
      </div>

      <div id="skills" className="skills-container">
        <div className="skills-heading">Skills Stack</div>

        <div className="Skills-desc">
          <div className="skill-head" onClick={dropui}>
            <div className="skill-head-txt">Ui/Ux</div>
            {ui ? (
              <IoIosArrowDropup className="dropdown" />
            ) : (
              <IoIosArrowDropdown className="dropdown" />
            )}
          </div>
          {ui ? (
            <div className="skill-name">
              <div className="skill-box">
                <img
                  className="skill-img"
                  src="./Images/skills/figma2.png"
                  alt=""
                />
                <div className="name">Figma</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="Skills-desc">
          <div className="skill-head" onClick={dropf}>
            <div className="skill-head-txt">Frontend Development</div>
            {front ? (
              <IoIosArrowDropup className="dropdown" />
            ) : (
              <IoIosArrowDropdown className="dropdown" />
            )}
          </div>
          {front ? (
            <div className="skill-name">
              <div className="skill-box">
                <img
                  className="skill-img"
                  src="./Images/skills/html.jpeg"
                  alt=""
                />
                <div className="name">Html5</div>
              </div>
              <div className="skill-box">
                <img
                  className="skill-img"
                  src="./Images/skills/css.png"
                  alt=""
                />
                <div className="name">Css</div>
              </div>
              <div className="skill-box">
                <img
                  className="skill-img"
                  src="./Images/skills/js.png"
                  alt=""
                />
                <div className="name">javascript</div>
              </div>
              <div className="skill-box">
                <img
                  className="skill-img"
                  src="./Images/skills/react.png"
                  alt=""
                />
                <div className="name">ReactJs</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="Skills-desc">
          <div className="skill-head" onClick={dropback}>
            <div className="skill-head-txt">Backend Development</div>
            {backend ? (
              <IoIosArrowDropup className="dropdown" />
            ) : (
              <IoIosArrowDropdown className="dropdown" />
            )}
          </div>
          {backend ? (
            <div className="skill-name">
              <div className="skill-box">
                <img
                  className="skill-img"
                  src="./Images/skills/node.png"
                  alt=""
                />
                <div className="name">NodeJs</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="Skills-desc">
          <div className="skill-head" onClick={dropdatabase}>
            <div className="skill-head-txt">Database</div>
            {database ? (
              <IoIosArrowDropup className="dropdown" />
            ) : (
              <IoIosArrowDropdown className="dropdown" />
            )}
          </div>
          {database ? (
            <div className="skill-name">
              <div className="skill-box">
                <img
                  className="skill-img"
                  src="./Images/skills/sql.jpeg"
                  alt=""
                />
                <div className="name">Mysql</div>
              </div>
              <div className="skill-box">
                <img
                  className="skill-img"
                  src="./Images/skills/mongodb.jpeg"
                  alt=""
                />
                <div className="name">MongoDb</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="project-container" id="project">
        <div className="project-title">Projects</div>

        <div className="projects">
          <div className="project-box">
            <div className="project-img">
              <img
                className="project-icon"
                src="./Images/Projects/plogo.png"
                alt=""
              />
            </div>
            <div className="project-name">Project 1</div>
            <div className="project-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus, consequuntur.
            </div>

            <div className="link-btn">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="project-btn">Visit</button>
              </a>
            </div>
          </div>

          <div className="project-box">
            <div className="project-img">
              <img
                className="project-icon"
                src="./Images/Projects/plogo.png"
                alt=""
              />
            </div>
            <div className="project-name">Project 1</div>
            <div className="project-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus, consequuntur.
            </div>

            <div className="link-btn">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="project-btn">Visit</button>
              </a>
            </div>
          </div>

          <div className="project-box">
            <div className="project-img">
              <img
                className="project-icon"
                src="./Images/Projects/plogo.png"
                alt=""
              />
            </div>
            <div className="project-name">Project 1</div>
            <div className="project-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus, consequuntur.
            </div>

            <div className="link-btn">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="project-btn">Visit</button>
              </a>
            </div>
          </div>
          <div className="project-box">
            <div className="project-img">
              <img
                className="project-icon"
                src="./Images/Projects/plogo.png"
                alt=""
              />
            </div>
            <div className="project-name">Project 1</div>
            <div className="project-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus, consequuntur.
            </div>

            <div className="link-btn">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="project-btn">Visit</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-heading">Contact Me</div>

        <div className="contact-box">
          <div className="contact-info">
            {/* <div className="contact-head">Get in touch with me</div> */}
            <div className="contact-btns-box">
              <a
                href="https://www.linkedin.com/in/jainharsh0907/"
                target="_blank"
              >
                <button className="contact-btn">
                  {" "}
                  <FaLinkedin />
                  Contact me on linkedin
                </button>
              </a>

              <a href="mailto:jainharsh2109@gmail.com" target="_blank">
                <button className="contact-btn">
                  <BiLogoGmail />
                  Mail me
                </button>
              </a>
              <a href="https://www.instagram.com/harshh._j/" target="_blank">
                <button className="contact-btn">
                  <FaInstagram />
                  Contact me on Instagram
                </button>
              </a>
            </div>
          </div>
          <div className="contact-img">
            <img src="./Images/Contact/usericon.png" alt="" />
          </div>
        </div>
      </div>

      <div className="footer">
        <a href="">
          <button className="resume-btn">my resume</button>
        </a>
        <a href="#">
          <button className="upbtn">
            <BiSolidUpArrowCircle />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
