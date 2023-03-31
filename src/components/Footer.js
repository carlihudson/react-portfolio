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
                            <h5 className="col-6 text-light">carlihudson@gmail.com</h5>
                        <div className="col-6 d-flex justify-content-center">
                            <div className="mt-3">
                                <a className='' href="https://github.com/carlihudson" target="_blank"><img className="p-3" src={GitHub} alt="github logo" /></a>
                                <a href="https://www.linkedin.com/in/carli-hudson/" target="_blank"><img className="p-3" src={Linkedin} alt="linkein logo" /></a>
                                <a href="https://www.instagram.com/carli_hudson/" target="_blank"><img className="p-3" src={Instagram} alt="instagram logo" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        
    )
}

export default Footer;
    
