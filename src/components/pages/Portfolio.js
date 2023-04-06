import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {

    const [ projects, setProjects ] = useState([
        {
            name: 'coding-quiz',
            description: 'JavaScript Coding Quiz',
            link: 'https://carlihudson.github.io/js-coding-quiz/',
            repo: 'https://github.com/carlihudson/js-coding-quiz',
        },
        {
            name: 'trivia-train',
            description: '3rd Party API Online Trivia Game',
            link: 'https://carlihudson.github.io/trivia-train/',
            repo: 'https://github.com/carlihudson/trivia-train'
        },
        {
            name: 'java-junkies',
            description: 'A Virtual Cafe',
            link: 'https://java-junkies-virtual-cafe.herokuapp.com/',
            repo: 'https://github.com/Klgibsonjr/java-junkies-virtual-cafe'
        },
        {
            name: 'pantry-pal',
            description: 'SQL Food Inventory Tracker',
            link: 'https://the-pantry-pal.herokuapp.com/',
            repo: 'https://github.com/sieraford/pantry-pal'
        },
        {
            name: 'tech-blog',
            description: 'MVC Framework Blog',
            link: 'https://model-view-controller-blog.herokuapp.com/',
            repo: 'https://github.com/carlihudson/mvc-tech-blog'
        },
        {
            name: 'text-editor',
            description: 'PWA Online or Offline Text Editor',
            link: 'https://pwa-txt-edit.herokuapp.com/',
            repo: 'https://github.com/carlihudson/pwa-text-editor'
        },
    ]);

    return (
      <div>
        <div className="media container main-content">
        <div className="media-body row">
        <div className="row portfolio-content">
          <h1 className='page-title'>Projects</h1>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {projects.map((project, idx) => (
            <Project
            project={project}
            key={"project" + idx}
            />
          ))}
        </div> 
      </div>
      </div>
    </div>
      
    );
    
};
    
export default Portfolio;