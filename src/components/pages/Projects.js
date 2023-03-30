import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Projects({ project }) {

  const { name, repo, link, description } = project;

  return (
    <div className="media container main-content">
      <div className="media-body row contact-content">
        <div className="row">
          <h1 className='page-title'>Projects</h1>
      </div>
      {/* <div className="project" key={name}>
      <img
        src={require(`../../assets/img/project-img/${name}.jpg`).default}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
          </a>
        </h3>
        <p>{description}</p>
      </div>

      </div> */}
    </div>
    
  </div>
  );
}

export default Projects;
