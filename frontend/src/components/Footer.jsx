import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand-col">
          <div className="footer-brand-row">
            <span className="footer-monogram">&lt;AJ /&gt;</span>
            <span className="brand-small">Abrar Junaed</span>
          </div>
          <p className="brand-sub">
            CSE Undergraduate @ United International University (UIU) — Full-Stack Web, 3D &amp; Applied AI.
          </p>
        </div>

        <nav className="footer-nav-col" aria-label="Footer navigation">
          <div className="nav-group">
            <span className="nav-group-title">Sections</span>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#tools">Tech Stack</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-group">
            <span className="nav-group-title">Connect</span>
            <a href="https://github.com/Abrar2212" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/abrar.junaed.2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/abrar_junaed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a href="mailto:abrarjunaed22@gmail.com">Email</a>
          </div>
        </nav>

        <div className="footer-right-col">
          <div className="copyright">© {year} Abrar Junaed. All rights reserved.</div>
          <div className="footer-stack-note">
            <i className="fa-solid fa-code" aria-hidden="true" /> Built with React 19 &amp; Vite
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
