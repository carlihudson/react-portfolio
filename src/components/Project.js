import React from 'react';
// import { faGithub } from 'react-icons/fa';
import { removeHyphensAndCapitalize } from '../utils/helpers';

function Project({ project }) {
  const { name, repo, link, description } = project;
  const image = `./assets/img/project-img/${name}.jpg`

  return (
      <div className="media-body row contact-content">
      <div className="project">
      <img
        src={image}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      /> 
       <div className="project-text">
        <h3>
        <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
        <a href={repo}>Link</a>
        </h3>
        <p>{description}</p>
      </div>

      </div> 
    </div>
    
  );
}

export default Project;
