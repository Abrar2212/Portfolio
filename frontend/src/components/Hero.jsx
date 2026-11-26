import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-main">
            <p className="hero-kicker">
              Dhaka, Bangladesh · Computer Science &amp; Engineering at UIU
            </p>

            <h1 className="hero-title">
              Abrar Junaed
            </h1>

            <p className="hero-lead">
              Undergraduate software developer building full-stack web applications, interactive 3D
              browser tools, structured backend APIs, and computer vision projects.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>Selected Work</span>
                <i className="fa-solid fa-arrow-down" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/Abrar2212"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a href="mailto:abrarjunaed22@gmail.com" className="btn btn-secondary">
                <span>abrarjunaed22@gmail.com</span>
              </a>
            </div>
          </div>

          <aside className="hero-spec" aria-label="Current overview">
            <div className="spec-row">
              <span className="spec-label">Degree</span>
              <span className="spec-value">B.Sc. in CSE, United International University</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Web &amp; 3D</span>
              <span className="spec-value">TypeScript, Next.js 16, React 19, Three.js</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Backend</span>
              <span className="spec-value">Spring Boot 3, NestJS, Node.js, PostgreSQL</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Research</span>
              <span className="spec-value">Assistive Vision-Language AI (FYDP)</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
