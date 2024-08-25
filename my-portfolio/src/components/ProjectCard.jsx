const ProjectCard = ({ project }) => {
    return (
      <div className="card" style={{backgroundImage: `url(${ project.link })`}}>
        <a href={project.link}>{project.title}</a>
      </div>
    );
}

export default ProjectCard;