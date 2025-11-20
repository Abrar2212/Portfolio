import React, { useState, useEffect } from 'react';
import './Header.css';
import { useTheme } from '../context/ThemeContext';
import avatarSrc from '../assets/WhatsApp Image 2025-11-20 at 12.38.37 AM.jpeg';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // close mobile menu on route/hash change or theme change
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener('hashchange', closeMenu);
    return () => window.removeEventListener('hashchange', closeMenu);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    const headerEl = document.getElementById('site-header');
    const headerHeight = headerEl ? headerEl.offsetHeight : 0;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    } else {
      window.location.hash = id;
    }
  };

  useEffect(() => {
    // lock body scroll when mobile menu is open
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = '' };
  }, [mobileOpen]);

  return (
    <header className="header" id="site-header">
      <div className="header-inner">
        <div className="logo-edge">
          <div className="logo">
            <div className="logo-left">
              <div className="avatar-wrap logo-avatar" title="Abrar Junaed">
                <img src={avatarSrc} alt="Abrar Junaed" className="header-avatar" />
              </div>
              <div className="logo-name">Abrar Junaed</div>
            </div>
          </div>
        </div>

        <div className="header-content container">
          <nav className={`nav ${mobileOpen ? 'open' : ''}`}>
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#tools" onClick={(e) => handleNavClick(e, 'tools')}>Skills</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
            <a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Experience</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </nav>
        </div>

        <div className="toggle-edge">
          <button
            className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((s) => !s)}
          >
            <span className="burger" />
          </button>

          <div className="header-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}
    </header>
  );
};

export default Header;
