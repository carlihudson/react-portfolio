import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function PortfolioContainer() {
  // Get the project name from the URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const initialPage = urlParams.get('project') || 'About';

  const [currentPage, setCurrentPage] = useState(initialPage);

  // Save the current page to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Update the URL when the page changes
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('project', page);
    window.history.pushState({}, '', newUrl);
  };

  return (
    <div>
      <div className="portfolio-container">
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
