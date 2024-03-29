import React from 'react';
import GitHub from '../assets/img/github-mark-white.png';
import Linkedin from '../assets/img/In-White-26@2x.png';
import Instagram from '../assets/img/Instagram_Glyph_White.png';

const styles = {
    footer: {
        background: '#3B252C',
    }
}

function Footer() {
    return (
        <div style={styles.footer} className="page-footer-section footer py-3">
                <div className="container">
                    <div className="row align-items-center">
                            <h5 className="d-flex col-lg-6 col-md-12 text-light justify-content-center">carlihudson@gmail.com</h5>
                        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                            <div className="mt-3">
                                <a className='' href="https://github.com/carlihudson" target="_blank"><img className="p-3" src={GitHub} alt="github logo" /></a>
                                <a href="https://www.linkedin.com/in/carli-hudson/" target="_blank"><img className="p-3" src={Linkedin} alt="linkein logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        
    )
}

export default Footer;
    
