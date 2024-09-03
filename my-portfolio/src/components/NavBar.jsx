import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react'; 
import Pdf from '../documents/resume.pdf';

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  // Toggle to opposite 
  const toggleMenuBars = () => {
    setIsOpen(!isOpen);
  }

  //Set window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="nav-wrapper">
        <nav>
          <div className="name">
            <a className="name-link">NK</a>
          </div>

          {/* <div>
            <img src="src/images/panda.png" className="name-img"></img>
          </div> */}

          <div className="nav-toggle" onClick={toggleMenuBars}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <div className="nav-body">
            <a className="about-me" href="#hero-wrapper">
              About
            </a>
            {/* <a onClick={this.onResumeClick}>Resume</a> */}
            <a className="resume" href={Pdf} target="_blank">
              Resume
            </a>
            <a className="projects" href="#projects-wrapper">
              Projects
            </a>
            <a
              className="github"
              href="https://github.com/nickkim1"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/nicolas-kim-119abc/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </nav>
      </div>

      {/* Conditional rendering of a navigation menu upon 'too small' - media query triggered when <768px */}
      <ul className={`nav-menu-${isOpen ? "open" : "hidden"}`}>
        <li>
          <a className="about-me" href="#hero-wrapper">
            About
          </a>
        </li>
        <li>
          <a className="resume" href="../../utils/resume.pdf" target="_blank">
            Resume
          </a>
        </li>
        <li>
          <a className="projects" href="#projects-wrapper">
            Projects
          </a>
        </li>
        <li>
          <a
            className="github"
            href="https://github.com/nickkim1"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/nicolas-kim-119abc/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
