import React, { useState, useEffect } from 'react';
import './Header.css';
import { useTheme } from '../context/ThemeContext';
import avatarSrc from '../assets/WhatsApp Image 2025-11-20 at 12.38.37 AM.jpeg';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'tools', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const closeMenu = () => setMobileOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener('hashchange', closeMenu);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('hashchange', closeMenu);
      window.removeEventListener('scroll', onScroll);
    };
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
    const headerHeight = headerEl ? headerEl.offsetHeight : 74;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    } else {
      window.location.hash = id;
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="site-header">
      <div className="container header-inner">
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Abrar Junaed — Back to top"
        >
          <span className="avatar-ring">
            <img src={avatarSrc} alt="Abrar Junaed" className="header-avatar" />
          </span>
          <span className="brand-text">
            <span className="logo-name">Abrar Junaed</span>
            <span className="logo-tag">&lt;AJ /&gt;</span>
          </span>
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
          {/* Custom Vector Sun/Moon Theme Switch */}
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
              {/* Sun Vector Icon */}
              <span className="switch-icon sun-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4.5" />
                  <path d="M12 2.5v2.2M12 19.3v2.2M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2.5 12h2.2M19.3 12h2.2M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
                </svg>
              </span>

              {/* Moon & Star Vector Icon */}
              <span className="switch-icon moon-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646Z" />
                  <path d="M18 4v3M16.5 5.5h3" strokeWidth="1.75" />
                </svg>
              </span>

              {/* Sliding Active Thumb with Crisp Mode Emblem */}
              <span className="theme-switch-thumb" aria-hidden="true">
                {isDark ? (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646Z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="4.5" fill="currentColor" />
                    <path d="M12 2.5v2.2M12 19.3v2.2M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2.5 12h2.2M19.3 12h2.2M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
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
