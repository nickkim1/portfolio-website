import ProjectCard from '../components/ProjectCard';
import projects from '../assets/projects.json'
import {useState, useEffect } from 'react';

const Projects = () => {

    // Projects array to map over & get individual prj
    const [prj, setPrj] = useState([]); 

    // Empty depedency array, only runs once after intiial rednder to prevent infinite loop
    useEffect(() => {setPrj(projects["projects"]);}, []);

    return (
        <div className="projects-wrapper" id="projects-wrapper">
            <h3>Projects</h3>
            <p>Here are some of my projects!</p>
            <div className="project-listings">
                {projects["projects"].map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}; 

export default Projects;