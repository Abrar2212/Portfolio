import React, { useState, useEffect } from 'react';
import './Header.css';
import { useTheme } from '../context/ThemeContext';
import portraitSrc from '../assets/WhatsApp Image 2025-11-20 at 12.38.37 AM1.jpeg';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'tools', label: 'Stack' },
  { id: 'projects', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener('hashchange', closeMenu);
    return () => window.removeEventListener('hashchange', closeMenu);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    const headerEl = document.getElementById('site-header');
    const headerHeight = headerEl ? headerEl.offsetHeight : 68;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    } else {
      window.location.hash = id;
    }
  };

  return (
    <header className="header" id="site-header">
      <div className="container header-inner">
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Abrar Junaed — Home"
        >
          <span className="avatar-frame">
            <img src={portraitSrc} alt="Abrar Junaed" className="header-avatar" />
          </span>
          <span className="logo-name">Abrar Junaed</span>
        </a>

        <nav className={`nav ${mobileOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            role="switch"
            aria-checked={isDark}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className={`theme-switch ${isDark ? 'is-dark' : 'is-light'}`}
            onClick={toggleTheme}
          >
            <span className="theme-switch-track">
              <span className="switch-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 3v2M12 19v2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M3 12h2M19 12h2M5.64 18.36l1.41-1.41M16.95 7.05l1.41-1.41" />
                </svg>
              </span>
              <span className="switch-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </span>
              <span className="theme-switch-thumb" aria-hidden="true">
                {isDark ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 3v2M12 19v2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M3 12h2M19 12h2M5.64 18.36l1.41-1.41M16.95 7.05l1.41-1.41" />
                  </svg>
                )}
              </span>
            </span>
          </button>

          <button
            type="button"
            className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((s) => !s)}
          >
            <span className="burger" aria-hidden="true" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="mobile-overlay"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
