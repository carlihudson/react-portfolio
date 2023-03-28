import React, { useState } from 'react';
import resume from '../../assets/img/ch-resume-3.23.jpeg'

export default function Resume() {

  return (
    <div className="media container main-content">
    <div className="media-body row resume-content">
      <div className="d-flex justify-content-end mr-2 mb-2">
        <a href='../../assets/pdf/ch_res_3-23.pdf' download>Download My Resume</a>
      </div>
      <div className="carli-rez">
      <img className="ch-res img-fluid" src={resume} alt="" />
      </div>
    </div>
    
  </div>
  );
}
