import React, { useState } from 'react';
import data from './projects.json';
import { Project } from '../../../types';

import './Projects.scss';

const Projects = () => {
  const [projects] = useState<Project[]>(data);

  return (
    <section id='projects'>
      <h2 className='section-header'>SELECT PROJECTS</h2>
      <div className='grid'>
        {projects.map((proj) => (
          <div className='project'>
            {/* project text top */}
            <div className='proj-top-text'>
              <h1 className='proj-name'>{proj.name}</h1>
              <h3 className='proj-completion'>
                {proj.dateCompleted ? `Completed ${proj.dateCompleted}` : 'Under Construction'}
              </h3>
            </div>
            <div className='img-container'>
              {/* project overlay */}
              <div className='hidden-overlay'>
                <div className='hidden-text'>
                  <p>Value: ${Number((proj.value).toFixed(1)).toLocaleString()}</p>
                  <p>Sector: {proj.type}</p>
                  <p>Client: {proj.client}</p>
                  <p>{proj.description}</p>
                  </div>
              </div>
              {/* project image */}
              <img src={proj.image} alt={`project: ${proj.name}`} />
            </div>
            {/* project text bottom  */}
            <h3 className='address'>{proj.address} </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
