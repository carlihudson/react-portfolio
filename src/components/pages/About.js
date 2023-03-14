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
      <div className="col-6">
        <p className="mt-0 mb-1">My name is Carli Hudson, and I am a student at UCLA Extentsion's Software Development Bootcamp. I've held a lot
        of random jobs throughout my 15 years in the workforce such as:</p>
        <ul>
        <li>Fast Food Worker</li>
        <li>Hardware Store Worker</li>
        <li>Taste Tester</li>
        <li>Face Painter</li>
        <li>TV/Movie Set Production Assistant</li>
        <li>Food Delivery Driver</li>
        <li>Country Club Beverage Cart Girl</li>
        <li>Talent Agency Assistant</li>
      </ul>
      <p>After a chaotic 15 years working whatever I could find to survive, I decided it was time to make a change for
        the good.</p>
        
      </div>
      <div className="col-6 d-flex justify-content-center">
        <img className="w-75 " src={Carli} alt="" />
      </div>
      
    </div>
    
   
  </div>
  
</div>
  );
}
