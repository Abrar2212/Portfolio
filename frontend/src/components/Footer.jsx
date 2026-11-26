import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer lite-footer">
      <div className="footer-top-card" aria-hidden="true">
        <div className="top-card-inner">
          <h3>Building scalable web platforms, 3D studios &amp; intelligent AI systems</h3>
          <p>
            TypeScript · Next.js 16 · React 19 · Spring Boot 3 · NestJS · Three.js · PostgreSQL · Google Gemini VLMs
          </p>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-inner">
          <div className="footer-brand-col">
            <div className="brand-small">Abrar Junaed</div>
            <div className="brand-sub">
              Full-Stack Software Engineer — Web, 3D, Scalable APIs &amp; Applied AI
            </div>
          </div>

          <div className="footer-nav-col">
            <div className="nav-grid">
              <div className="nav-group">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#tools">Skills</a>
                <a href="#projects">Projects</a>
              </div>
              <div className="nav-group">
                <a href="#education">Education</a>
                <a href="#skills">Experience</a>
                <a href="#contact">Contact</a>
                <a href="mailto:abrarjunaed22@gmail.com">Email Me</a>
              </div>
              <div className="nav-group">
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
              </div>
            </div>
          </div>

          <div className="footer-right-col">
            <div className="status-bubble">
              <span className="dot" aria-hidden="true" />
              <span>Available for Roles</span>
            </div>
            <div className="made-with">
              Engineered by{' '}
              <a href="https://github.com/Abrar2212" target="_blank" rel="noopener noreferrer">
                Abrar Junaed
              </a>
            </div>
            <div className="copyright">© {year} Abrar Junaed</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
