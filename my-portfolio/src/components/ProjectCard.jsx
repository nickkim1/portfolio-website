import { useState, useEffect } from "react";

const ProjectCard = ({ project }) => {

  const [projectWebLink, setProjectWebLink] = useState("404");

  // Redirect to 404 if I don't have a website
  useEffect(() => {
    const projectLink =
      project.website_link === "404" ? "404-page" : project.website_link; 
    setProjectWebLink(projectLink);
  }, []); 

  return (
    <div className="card">
      <img className="card-img" src={project.background_img}></img>
      <div className="card-header">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div className="card-footer">
        <div className="card-stack">
          <span>{project.stack}</span>
        </div>
        <div className="card-links">
          <a href={project.github_link}>
            <i className="fab fa-github"></i>
          </a>
          <a href={projectWebLink} target="_blank">
            <i className="fa fa-external-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
