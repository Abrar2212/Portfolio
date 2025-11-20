import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer lite-footer">
      <div className="footer-top-card" aria-hidden="true">
        <div className="top-card-inner">
          <h3>I build reliable backend systems and APIs</h3>
          <p>Specializing in Node.js, Express and scalable services — I deliver clean, maintainable servers and integrations.</p>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-inner">
          <div className="footer-brand-col">
            <div className="brand-small">Abrar Junaed</div>
            <div className="brand-sub">Software Engineer — Backend & API Development</div>
          </div>

          <div className="footer-nav-col">
            <div className="nav-grid">
              <div className="nav-group">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#tools">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
              </div>
              <div className="nav-group">
                <a href="#docs">Documentation</a>
                <a href="#faq">FAQ</a>
                <a href="#support">Support</a>
              </div>
              <div className="nav-group">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </div>
          </div>

          <div className="footer-right-col">
            
            <div className="made-with">Made with ❤️ by <a href="https://github.com/Abrar2212" target="_blank" rel="noopener noreferrer">Abrar Junaed</a></div>
            <div className="copyright">© {year} Abrar Junaed</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
