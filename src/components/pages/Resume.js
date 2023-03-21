import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

export default function Resume() {

  return (
    <div className="media container">
    <div className="media-body row">
      <div className="col d-flex justify-content-center">
        <h2 className="mt-0 mb-1">Resume</h2>
      </div>
      <div className="d-flex justify-content-end mr-2">
        <a href='../../assets/pdf/ch_res_3-23.pdf' download>Download My Resume</a>
      </div>
    </div>
    
  </div>
  );
}
