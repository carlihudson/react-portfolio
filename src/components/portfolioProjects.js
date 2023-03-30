import React, { useState } from 'react';
import Project from '../components/pages/Projects';

function Portfolio() {

    const [projects] = useState([
        {
            name: 'coding-quiz',
            description: 'JavaScript Coding Quiz',
            link: 'https://carlihudson.github.io/js-coding-quiz/',
            repo: 'https://github.com/carlihudson/js-coding-quiz'
        },
        {
            name: 'trivia-train',
            description: '3rd Party API Online Trivia Game',
            link: 'https://carlihudson.github.io/trivia-train/',
            repo: 'https://github.com/carlihudson/trivia-train'
        },
        {
            name: 'note-taker',
            description: 'Express Note Taking Application',
            link: 'https://carli-hudson-note-taker.herokuapp.com/',
            repo: 'https://github.com/carlihudson/note-taker'
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
          <div className="flex-row">
            {projects.map((project, idx) => (
              <Project
                project={project}
                key={"project" + idx}
              />
            ))}
          </div>
        </div>
      );
    };
    
export default Portfolio;


