import React from 'react';
import GitHub from '../assets/img/github-mark-white.png';
import { removeHyphensAndCapitalize } from '../utils/helpers';

function Project({ project }) {
  const { name, repo, link, description } = project;
  const image = require(`../../public/assets/project-img/${name}.jpg`)

  return (
      <div className="project col-lg-4 col-md-6 col-sm-12">
      <img
        src={image}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg d-flex"
      /> 
       <div className="project-text mt-2">
          <h3>
            <a className="link" href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          </h3>
            <p>{description}</p>
            <a href={repo}>
        <img className="p-1 repo" src={GitHub} alt="github logo" />
        </a>
      </div>
    </div> 
  );
}

export default Project;
