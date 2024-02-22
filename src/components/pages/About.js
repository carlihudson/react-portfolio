import React from 'react';
import Carli from '../../assets/img/carli.JPG'


export default function About() {
  return (
    <div className="media container main-content">
      <div className="media-body row about-content">
      <div className="row about">
        <div className="col-lg-6 col-md-12 align-items-center">
          <h2 className="mt-0 mb-3 mt-5">Welcome!</h2>
          <p>I'm Carli, a 2023 graduate of UCLA Extension’s Full-Stack Software 
            Development Program. My journey began in the arts, where I spent a 
            decade navigating roles in the entertainment industry and embracing 
            various weekend odd jobs. Through it all, my enduring passion for data 
            structure and organization, as well as workflow processes led me to embark 
            on a transformative career change in 2022. </p>

          <p>Currently, I am contracted at Netflix as a Talent Data Specialist, 
            where I resolve data issues in the talent database using APIs such as 
            GraphQL, REST, and gRPC. Additionally, I leverage SQL queries to 
            investigate talent datasets for anomalies within Netflix’s data portal. 
            It’s been a great introduction to my new career path, as I get to 
            collaborate closely with product design and engineers in a feature 
            development workflow. I iteratively test and develop new features, and 
            provide input to shape the engineers’ implementation of the talent data 
            deduplication algorithm. </p>

          <p>
          Looking ahead, my aspirations unfold towards becoming a Full-Stack Engineer, 
          where I aim to seamlessly blend data prowess and user interface functionality 
          to craft impactful solutions.</p>
        
        </div>
      <div className="car-container col-lg-6 col-md-12 d-flex justify-content-center">
        <img className="carli img-fluid max-width: 80% p-2" src={Carli} alt="Carli Hudson" />
      </div>
    
    </div>
    
   
  </div>
  
</div>
  );
}
