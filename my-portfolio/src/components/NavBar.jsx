import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a className="name">NK</a>
        <a className="about-me">About Me</a>
        <a className="resume" >Resume</a>
        <a className="projects">Projects</a>
        <a className="github" href=""><i className="fab fa-github"></i></a>
        <a className="linkedin" href=""><i className="fab fa-linkedin"></i></a>
      </div>
    </nav>
  );
};

export default NavBar;
