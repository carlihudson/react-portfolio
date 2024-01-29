import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {

    const [ projects, setProjects ] = useState([
      {
        name: 'tech-blog',
        description: 'A Content-Management-System (CMS) style blog, where users can create accounts, write and delete posts, and comment',
        techUsed: 'Sequelize, bcrypt, express.js handlebars.js, Bootstrap',
        link: 'https://model-view-controller-blog.herokuapp.com/',
        repo: 'https://github.com/carlihudson/mvc-tech-blog'
      },  
      {
        name: 'social-media-backend',
        description: 'A backend API for social networks with the ability to create users, connections, posts, and comments.',
        techUsed: 'MongoDB, mongoose.js node.js, express.js, moment.js. ',
        link: 'https://drive.google.com/file/d/1u6VxNsHwipInxIZvWKapnDZ-VTxyJk8Z/view',
        repo: 'https://github.com/carlihudson/nosql-social',
      },
      {
            name: 'trivia-train',
            description: 'An online trivia game featuring nine categories and animated gifs generated with each answer',
            techUsed: 'Giphy API, Random Facts API, Jquery, Tailwind CSS',
            link: 'https://carlihudson.github.io/trivia-train/',
            repo: 'https://github.com/carlihudson/trivia-train'
        },
        {
          name: 'coding-quiz',
          description: 'A timed quiz on basic web development. Each wrong answer docks 5 seconds from your time. Finish, and you can enter your initials and see the high scores.',
          techUsed: 'JavaScript',
          link: 'https://carlihudson.github.io/js-coding-quiz/',
          repo: 'https://github.com/carlihudson/js-coding-quiz',
      }
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