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
        <div data-aos="fade-in" 
    
    data-aos-duration="1500"  className="hero-container">
          <div  className="hero-head">I'm a Mern Stack Developer</div>
          <div  className="hero-body">
            A passionate Mern-Stack developer on a mission to craft
            extraordinary digital experiences that leave users spellbound.
          </div>
        </div>
        <div  className="Down-btn">
          <a className="arrow" href="#skills">
            <IoMdArrowDropdownCircle />
          </a>
        </div>
      </div>

      <div id="skills" className="skills-container">
        <div data-aos="fade-up" 
    
    data-aos-duration="700" className="skills-heading">Skills Stack</div>

        <div className="Skills-desc">
          <div data-aos="fade-right" 
    
    data-aos-duration="500" className="skill-head" onClick={dropui}>
            <div  className="skill-head-txt">Ui/Ux</div>
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
          <div data-aos="fade-right" 
    
    data-aos-duration="600" className="skill-head" onClick={dropf}>
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
          <div data-aos="fade-right" 
    
    data-aos-duration="700" className="skill-head" onClick={dropback}>
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
          <div data-aos="fade-right" 
    
    data-aos-duration="800" className="skill-head" onClick={dropdatabase}>
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
        <div data-aos="fade-up" 
    
    data-aos-duration="700" className="project-title">Projects</div>

        <div className="projects">
          <div data-aos="flip-left" 
    
    data-aos-duration="1000"className="project-box">
            <div className="project-img">
              <img
                className="project-icon"
                src="./Images/Projects/plogo.png"
                alt=""
              />
            </div>
            <div className="project-name">Puerim</div>
            <div className="project-desc">
              Your partner in digital success. Puerim's responsive website
              showcases a comprehensive suite of social media agency services,
              designed to elevate brands and maximize online presence. From
              dynamic web development to strategic social media management,
              Puerim offers tailored solutions to meet your digital marketing
              needs.
            </div>

            <div className="link-btn">
              <a
                href="https://github.com/harshj2109/puerim-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Visit</button>
              </a>
            </div>
          </div>

          <div data-aos="flip-right" 
    
    data-aos-duration="1000" className="project-box">
            <div className="project-img">
              <img
                className="project-icon"
                src="./Images/Projects/plogo.png"
                alt=""
              />
            </div>
            <div className="project-name">HealthGate</div>
            <div className="project-desc">
              Transforming healthcare accessibility through innovative
              technology. Utilizing ReactJS, HealthGate empowers users to
              effortlessly locate nearby hospitals, pharmacies, and pathology
              labs. With its intuitive interface and smooth navigation, finding
              the closest healthcare facility has never been easier.
            </div>

            <div className="link-btn">
              <a
                href="https://github.com/harshj2109/Health-gate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Visit</button>
              </a>
            </div>
          </div>

          <div data-aos="flip-left" 
    
    data-aos-duration="1000" className="project-box">
            <div className="project-img">
              <img
                className="project-icon"
                src="./Images/Projects/plogo.png"
                alt=""
              />
            </div>
            <div className="project-name">Weather Web</div>
            <div className="project-desc">
              Bringing weather forecasts to life with a dynamic, responsive
              application. Powered by HTML, CSS, and JavaScript, this app
              seamlessly integrates with weather APIs to deliver real-time
              forecasts and location-based data. With its user-friendly
              interface and intuitive design, staying updated on the latest
              weather conditions has never been easier.
            </div>

            <div className="link-btn">
              <a
                href="https://github.com/harshj2109/Weather-Web"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="project-btn">Visit</button>
              </a>
            </div>
          </div>
          <div data-aos="flip-right" 
    
    data-aos-duration="1000" className="project-box">
            <div className="project-img">
              <img
                className="project-icon"
                src="./Images/Projects/plogo.png"
                alt=""
              />
            </div>
            <div className="project-name">Daedalus</div>
            <div className="project-desc">
              Web Application built on MERN Stack(without the R), and Mapbox API
              to display information & directions from university campus to a
              set point marker on a map. Also includes sending customized
              coordinates to the server by dragging the marker on the rendered
              map.
            </div>

            <div className="link-btn">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="project-btn">Visit</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-container" id="contact">
        <div data-aos="fade-up" 
    
    data-aos-duration="700"className="contact-heading">Contact Me</div>

        <div className="contact-box">
          <div className="contact-info">
            
            <div className="contact-btns-box">
              <a
                href="https://www.linkedin.com/in/jainharsh0907/"
                target="_blank"
              >
                <button data-aos="fade-left" data-aos-duration="1000" className="contact-btn linkedinbtn">
                  {" "}
                  <FaLinkedin />
                  Contact me on linkedin
                </button>
              </a>

              <a href="mailto:jainharsh2109@gmail.com" target="_blank">
                <button data-aos="fade-left" data-aos-duration="1500" className="contact-btn gmailbtn">
                  <BiLogoGmail />
                  Mail me
                </button>
              </a>
              <a href="https://www.instagram.com/harshh._j/" target="_blank">
                <button data-aos="fade-left" data-aos-duration="1200" className="contact-btn instabtn">
                  <FaInstagram />
                  Contact me on Instagram
                </button>
              </a>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="contact-img">
            <img src="./Images/Contact/usericon.png" alt="" />
          </div>
        </div>
      </div>

      <div className="footer">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/171GubQ6FyC4UkbcPY-Jzl0UIshgzwDkO/view?usp=drive_link"
        >
          <button className="resume-btn">My Resume</button>
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
