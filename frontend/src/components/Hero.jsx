import { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    if (typeof anime !== 'undefined') {
      const shapes = document.querySelectorAll('.shape');
      
      shapes.forEach((shape) => {
        const animateShape = () => {
          anime({
            targets: shape,
            translateX: anime.random(-120, 120),
            translateY: anime.random(-120, 120),
            rotate: anime.random(-180, 180),
            // slower duration for calmer motion
            duration: anime.random(5000, 8500),
            easing: 'easeInOutQuad',
            // small random delay between repeats for breathing room
            delay: anime.random(200, 800),
            complete: () => {
              // add a short pause before restarting the animation
              setTimeout(animateShape, anime.random(250, 700));
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
            <p className="hero-greeting">abrarjunaed22@gmail.com</p>
            <h1 className="hero-title">
              <span className="title-line">Hey There,</span>
              <span className="title-line">I'm <span className="highlight-name">Abrar</span></span>
            </h1>
            <p className="hero-description">
              I design beautifully simple things, And I love what I do.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">Years<br />Experience</div>
              </div>
              <div className="stat-note">
                <div className="note-line">PROFESSIONAL</div>
                <div className="note-line">BACKEND-DEVELOPER</div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
