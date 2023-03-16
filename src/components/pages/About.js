import React from 'react';
import Carli from '../../assets/img/carli.JPG'


export default function About() {
  return (
    <div className="media container">
  <div className="media-body row">
    <div className="col d-flex justify-content-center">
      <h2 className="mt-0 mb-1">About Me</h2>
    </div>
    <div className="row">
      <div className="col-6 align-items-center">
        <h3 className="mt-0 mb-3 mt-5">Welcome!</h3>
        <p>I’m Carli, and I am a recent graduate of UCLA Extension’s Full-Stack Software Development Program. 
          I spent the first decade of my career working jobs in the arts, such as an assistant in the entertainment industry, 
          and several weekend odd jobs. However, one constant at every job I’ve held is my love for data structures and computer 
          applications. Last year, I decided to take the plunge and take this admiration and turn it into a career change. </p>

      <p>I currently work at Netflix as a Contract Studio Data Administrator. In this role I work with several internal 
        applications to check the validity of talent data coming into Netflix’s studio database, as well as work with 
        the engineers in an agile workflow as they continue to build and improve the application ecosystem. </p>

        <p>
        In my future endeavors I hope to work as a Full-Stack Engineer, working with both datasets as well as user interface functionality.
        </p>
        
      </div>
      <div className="col-6 d-flex justify-content-center">
        <img className="w-75 mt-5 " src={Carli} alt="" />
      </div>
      
    </div>
    
   
  </div>
  
</div>
  );
}
