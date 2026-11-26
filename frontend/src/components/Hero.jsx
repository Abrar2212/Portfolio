import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-status-pill">
              <span className="status-dot" aria-hidden="true" />
              <span>CSE Undergraduate @ UIU · Open to Internships &amp; Collaborations</span>
            </div>

            <h1 className="hero-title">
              Hi, I&apos;m <span className="highlight-name">Abrar Junaed</span>
              <span className="hero-title-sub">
                Building Full-Stack Web, 3D &amp; Applied AI Systems.
              </span>
            </h1>

            <p className="hero-description">
              Computer Science &amp; Engineering student at{' '}
              <strong>United International University (UIU)</strong> passionate about clean software
              architecture—from type-safe <strong>React &amp; Next.js</strong> interfaces and{' '}
              <strong>Three.js</strong> 3D customizers to <strong>Spring Boot &amp; NestJS</strong>{' '}
              APIs, computer vision, and robotics.
            </p>

            <div className="hero-tags" aria-label="Primary technologies">
              <span>TypeScript</span>
              <span>Next.js 16</span>
              <span>React 19</span>
              <span>Spring Boot 3</span>
              <span>NestJS</span>
              <span>Three.js</span>
              <span>PostgreSQL</span>
              <span>Gemini API</span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/Abrar2212"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
                <span>GitHub @Abrar2212</span>
              </a>
              <a href="mailto:abrarjunaed22@gmail.com" className="btn btn-secondary">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                <span>Email Me</span>
              </a>
            </div>

            <div className="hero-metrics" aria-label="Portfolio summary">
              <div className="metric-item">
                <span className="metric-value">9</span>
                <span className="metric-label">Software &amp; AI Projects</span>
              </div>
              <div className="metric-divider" aria-hidden="true" />
              <div className="metric-item">
                <span className="metric-value">5</span>
                <span className="metric-label">Core Tech Domains</span>
              </div>
              <div className="metric-divider" aria-hidden="true" />
              <div className="metric-item">
                <span className="metric-value">UIU</span>
                <span className="metric-label">B.Sc. in CSE (Dhaka)</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-terminal" aria-label="Developer profile overview in TypeScript">
              <div className="terminal-bar">
                <div className="terminal-dots" aria-hidden="true">
                  <span className="dot-red" />
                  <span className="dot-amber" />
                  <span className="dot-green" />
                </div>
                <span className="terminal-title">abrar@uiu:~/profile.ts</span>
                <span className="terminal-lang">TS</span>
              </div>
              <pre className="terminal-code">
                <code>
{`const developer = {
  name: "Abrar Junaed",
  education: "B.Sc. in CSE @ UIU",
  location: "Dhaka, Bangladesh",

  frontend: ["React 19", "Next.js 16", "Three.js"],
  backend:  ["Spring Boot 3", "NestJS", "Express"],
  data:     ["PostgreSQL", "MySQL", "Prisma"],
  ai_cv:    ["Gemini VLM", "OpenCV", "Python"],

  currentFocus: "Assistive Vision AI (FYDP)"
};`}
                </code>
              </pre>
              <div className="terminal-footer">
                <span>
                  <i className="fa-solid fa-code-branch" aria-hidden="true" /> main
                </span>
                <span>UTF-8 · TypeScript 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
