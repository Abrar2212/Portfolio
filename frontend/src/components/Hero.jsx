import './Hero.css';

const stats = [
  ['09', 'Projects built'],
  ['02', 'Live apps'],
  ['3.50', 'CGPA at UIU'],
  ['40+', 'Technologies used']
];

const stack = [
  ['Frontend', 'React, Next.js, Three.js'],
  ['Backend', 'Spring Boot, NestJS, Node.js'],
  ['Database', 'PostgreSQL, MySQL, MongoDB'],
  ['AI / ML', 'Gemini API, OpenCV, Python']
];

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-main">
            <p className="hero-kicker">CSE @ UIU · Dhaka</p>

            <h1 className="hero-title">
              Abrar Junaed
            </h1>

            <p className="hero-lead">Full-stack developer building web apps, 3D tools and AI projects.</p>

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
            </div>

            <dl className="hero-stats">
              {stats.map(([value, label]) => (
                <div key={label} className="hero-stat">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="hero-spec" aria-label="Current work and tech stack">
            <div className="spec-row">
              <span className="spec-label">
                <span className="live-dot" aria-hidden="true" />
                Currently
              </span>
              <span className="spec-value">
                Final-year project: an AI memory assistant for blind users
              </span>
            </div>
            {stack.map(([label, value]) => (
              <div key={label} className="spec-row">
                <span className="spec-label">{label}</span>
                <span className="spec-value">{value}</span>
              </div>
            ))}
          </aside>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to About">
        <span>Scroll</span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
