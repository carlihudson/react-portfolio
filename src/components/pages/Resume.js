import resumepdf from '../../assets/pdf/CH-resume-10.23.pdf'
import "react-pdf/dist/esm/Page/TextLayer.css";


export default function Resume() {

  return (
    <div className="media container d-flex justify-content-center main-content">
    <div className="media-body row resume-content">
      <div className="downloa d-flex justify-content-end mr-2 mb-2">
        <a href={resumepdf} download>Download My Resume</a>
      </div>
      <div className="carli-rez d-flex justify-content-center">
      <iframe className="ch-res" title="embed-resume"src="https://docs.google.com/document/d/e/2PACX-1vQNcoFoUPL1SxdSWHrVXCQmEPvQJYTtoF482K4WIwXLC3FQ3q9tEx0tgoOYusrASA/pub?embedded=true" width="1000px" height="1000px">
      </iframe>
      {/* <img className="ch-res img-fluid" src={resume} alt="Carli Hudson Resume" /> */}
      </div>
    </div>
    
  </div>
  );
}
