import React from 'react';
import GitHub from '../assets/img/github-mark-white.png';
import { removeHyphensAndCapitalize } from '../utils/helpers';

function Project({ project }) {
  const { name, repo, link, description, techUsed } = project;
  const image = require(`../../public/assets/project-img/${name}.jpg`)

  return (
      <div className="project col-12 ">
       <div className="project-text d-flex mt-2 row">
        <div className="col-9">
          <h2>
            <a className="link" target="_blank" href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          </h2>
         
          <p className="desc">{description}</p>
          <p className="tech fw-bold">TECH USED: {techUsed}</p>
        </div>
        <div className="col-3 text-center">
          <a target="_blank" href={repo}>
            <img className="repo" src={GitHub} alt="github logo" />
          </a>
        </div>
      </div>
    </div> 
  );
}

export default Project;
