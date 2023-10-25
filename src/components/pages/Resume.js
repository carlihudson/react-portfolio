import resumepdf from '../../assets/pdf/CH-resume-10.23.pdf'
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Document, Page } from 'react-pdf';


export default function Resume() {

  return (
    <div className="media container d-flex justify-content-center main-content">
    <div className="media-body row resume-content">
      <div className="downloa d-flex justify-content-end mr-2 mb-2">
        <a href={resumepdf} download>Download My Resume</a>
      </div>
      <div className="carli-rez d-flex justify-content-center">
      {/* <img className="ch-res img-fluid" src={resume} alt="Carli Hudson Resume" /> */}
      <Document className="ch-res img-fluid" file={resumepdf}>
      <Page pageNumber={1} />
    </Document>
      </div>
    </div>
    
  </div>
  );
}
