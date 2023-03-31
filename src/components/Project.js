import React from 'react';
// import { faGithub } from 'react-icons/fa';
import { removeHyphensAndCapitalize } from '../utils/helpers';

function Project(props) {
  const projectName = props.name;
  const image = `../assets/img/project-img/${projectName}.jpg`

  return (
    <div className="media container main-content">
      <div className="media-body row contact-content">
        <div className="row">
          <h1 className='page-title'>Projects</h1>
      </div>
      <div className="project">
        <p></p>
      {/* <img
        src={image}
        alt={removeHyphensAndCapitalize(projectName)}
        className="project-bg"
      /> */}
      {/* <div className="project-text">
        <h3>
          <a href={props.link}>{removeHyphensAndCapitalize(projectName)}</a>{' '}
          <a href={props.repo}>
          </a>
        </h3>
        <p>{props.description}</p>
      </div> */}

      </div> 
    </div>
    
  </div>
  );
}

export default Project;
