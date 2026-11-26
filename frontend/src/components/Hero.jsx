import { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.anime !== 'undefined') {
      const shapes = document.querySelectorAll('.shape');

      shapes.forEach((shape) => {
        const animateShape = () => {
          window.anime({
            targets: shape,
            translateX: window.anime.random(-95, 95),
            translateY: window.anime.random(-95, 95),
            rotate: window.anime.random(-160, 160),
            duration: window.anime.random(5200, 8500),
            easing: 'easeInOutQuad',
            delay: window.anime.random(200, 700),
            complete: () => {
              setTimeout(animateShape, window.anime.random(250, 700));
            }
          });
        };
        animateShape();
      });
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-status-pill">
              <span className="status-dot" aria-hidden="true" />
              <span>Open to Collaboration &amp; Full-Stack Roles</span>
            </div>

            <a href="mailto:abrarjunaed22@gmail.com" className="hero-greeting">
              abrarjunaed22@gmail.com
            </a>

            <h1 className="hero-title">
              <span className="title-line">Hey There,</span>
              <span className="title-line">
                I&apos;m <span className="highlight-name">Abrar Junaed</span>
              </span>
            </h1>

            <p className="hero-description">
              <strong>Full-Stack Software Engineer</strong> &amp; CSE Undergraduate at{' '}
              <strong>UIU</strong> — architecting type-safe web platforms, scalable backend APIs,
              interactive <strong>3D web experiences</strong>, and multimodal <strong>AI &amp; vision systems</strong>.
            </p>

            <div className="hero-tags">
              <span>TypeScript</span>
              <span>Next.js 16</span>
              <span>Spring Boot 3</span>
              <span>NestJS</span>
              <span>Three.js / R3F</span>
              <span>Gemini AI</span>
              <span>PostgreSQL</span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore Projects
              </a>
              <a
                href="https://github.com/Abrar2212"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary hero-gh-btn"
              >
                <i className="fa-brands fa-github" aria-hidden="true" /> GitHub Profile
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat-block">
                <div className="stat-number">2+</div>
                <div className="stat-label">
                  Years<br />Building
                </div>
              </div>
              <div className="hero-stat-divider" aria-hidden="true" />
              <div className="hero-stat-block">
                <div className="stat-number">9+</div>
                <div className="stat-label">
                  Engineered<br />Systems
                </div>
              </div>
              <div className="stat-note">
                <div className="note-line">FULL-STACK &amp; BACKEND</div>
                <div className="note-line">3D WEB · APPLIED AI</div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
              <div className="shape shape-5"></div>

              <div className="hero-terminal" aria-label="Developer profile code snippet">
                <div className="terminal-bar">
                  <div className="terminal-dots">
                    <span className="dot-red" />
                    <span className="dot-amber" />
                    <span className="dot-green" />
                  </div>
                  <span className="terminal-title">abrar@uiu:~/profile.ts</span>
                </div>
                <pre className="terminal-code">
                  <code>
{`const engineer = {
  role: "Full-Stack & AI",
  web:  ["Next.js 16", "React 19"],
  api:  ["Spring Boot 3", "NestJS"],
  gfx:  "Three.js / STL Studio",
  ai:   ["Gemini VLM", "OpenCV"],
  db:   ["PostgreSQL", "Prisma"],
  ship: true
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
