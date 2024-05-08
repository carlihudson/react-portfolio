import resumepdf from '../../assets/pdf/CH-resume-5.24.pdf'
import resume from '../../assets/img/CH-resume-2.24.png'


export default function Resume() {

  return (
    <div className="media container d-flex justify-content-center main-content">
    <div className="media-body row resume-content">
      <div className="download d-flex justify-content-center mb-2">
        <a href={resumepdf} download>Download My Full Resume</a>
      </div>
      <div className="carli-rez d-flex justify-content-center">
      <iframe className="ch-res" title="embed-resume"src="https://docs.google.com/document/d/e/2PACX-1vQNcoFoUPL1SxdSWHrVXCQmEPvQJYTtoF482K4WIwXLC3FQ3q9tEx0tgoOYusrASA/pub?embedded=true" width="800px" height="1000px">
      </iframe>
      <img className="ch-sm-res img-fluid" src={resume} alt="Carli Hudson Resume" />
      </div>
    </div>
    
  </div>
  );
}
