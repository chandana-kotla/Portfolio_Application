import React from 'react';
import './Project.css';

const Projects = ({projectsData}) => {
  return (
    <div className="projects-container">
      <h2>PROJECTS</h2>
      <div className="projects-grid">
        {projectsData.map((data, index) => (
          <div key={index} className="project-category">
            <img src={data.icon} alt={data.name} className='center'/>
            <h3>{data.name}</h3>
            <p>{data.project}</p>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
