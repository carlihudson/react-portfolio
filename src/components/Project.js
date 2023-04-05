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
       <div className="project-text d-flex mt-2 row">
        <div className="col-8">
          <h3>
            <a className="link" target="_blank" href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          </h3>
          <p className="desc">{description}</p>
        </div>
        <div className="col-4">
          <a target="_blank" href={repo}>
            <img className="repo" src={GitHub} alt="github logo" />
          </a>
        </div>
      </div>
    </div> 
  );
}

export default Project;
