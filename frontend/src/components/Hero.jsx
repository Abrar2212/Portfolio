import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">binjan85@gmail.com</p>
            <h1 className="hero-title">
              <span className="title-line">Hey There,</span>
              <span className="title-line">I'm <span className="highlight-name">Binjan</span></span>
            </h1>
            <p className="hero-description">
              I design beautifully simple things, And I love what I do.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10</div>
                <div className="stat-label">Years<br />Experience</div>
              </div>
            </div>
            <div className="hero-badge">
              <div className="badge-circle">
                <svg viewBox="0 0 100 100" className="badge-icon">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M50 20 L60 45 L85 45 L65 60 L75 85 L50 70 L25 85 L35 60 L15 45 L40 45 Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="badge-text">
                <div className="badge-title">IDF CERTIFIED</div>
                <div className="badge-subtitle">PROFESSIONAL</div>
                <div className="badge-subtitle">UI/UX DESIGNER</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <div className="brush-stroke"></div>
              <div className="profile-placeholder">
                <span className="placeholder-icon">👤</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
