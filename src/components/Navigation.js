import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="container nav-bar fixed-top">
  <div className="row">
    <div className="col">
    <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className="nav-link"
        >
      <h1 className="mt-4 carli-h-header">Carli Hudson</h1>
      </a>
    </div>
    <div className="col-lg-6 col-md-12 menu">
    <ul className="nav col justify-content-center">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
          <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
  </div>
</div>
    
  );
}

export default Navigation;
