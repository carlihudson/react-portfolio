import React from 'react';
import GitHub from '../assets/img/github-mark-white.png';
import { removeHyphensAndCapitalize } from '../utils/helpers';

function Project({ project }) {
  const { name, repo, link, description } = project;
  const image = require(`../../public/assets/project-img/${name}.jpg`)

  return (
      <div className="project col-lg-4 col-md-6 col-sm-12">
        <a target="_blank" href={link}>
          <img
            src={image}
            alt={removeHyphensAndCapitalize(name)}
            className="project-bg d-flex"
          /> 
        </a>
       <div className="project-text d-flex mt-2">
        <div className='row d-flex'>
          <h3>
            <a className="link col-12" target="_blank" href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          </h3>
          </div>
          <p className="desc">{description}</p>
          <a target="_blank" href={repo}>
            <img className="p-1 repo" src={GitHub} alt="github logo" />
          </a>
      </div>
    </div> 
  );
}

export default Project;
