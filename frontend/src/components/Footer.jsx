import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-name">Abrar Junaed</span>
          <span className="footer-copy">© {year} · Dhaka, Bangladesh</span>
        </div>

        <div className="footer-links">
          <a href="https://github.com/Abrar2212" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.facebook.com/abrar.junaed.2025" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.instagram.com/abrar_junaed/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="mailto:abrarjunaed22@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
