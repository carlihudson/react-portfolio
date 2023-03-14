import React from 'react';
import GitHub from '../assets/img/github-mark-white.png';
import Linkedin from '../assets/img/LI-In-Bug.png';
import Instagram from '../assets/img/Instagram_Glyph_Gradient.png';

function Footer() {
    return (
        <div className="page-footer-section bg-dark">
                <div className="container">
                    <div className="row py-3">
                            <h5 className="mb-1 text-light text-center">carlihudson@gmail.com</h5>
                        <div className="col d-flex justify-content-center">
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
    
