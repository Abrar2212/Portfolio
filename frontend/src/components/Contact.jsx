import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">Let&apos;s build something impactful together</h2>
            <p className="contact-text">
              Open for full-stack roles, research collaborations, or product engineering — start by{' '}
              <span className="highlight-text">saying hi</span>.
            </p>

            <div className="contact-details">
              <p className="contact-label">Direct Contact</p>
              <p className="contact-value">
                <i className="fa-solid fa-user contact-icon" aria-hidden="true" /> Abrar Junaed
              </p>
              <p className="contact-value">
                <i className="fa-solid fa-location-dot contact-icon" aria-hidden="true" /> Dhaka, Bangladesh
              </p>
              <p className="contact-value">
                <i className="fa-solid fa-phone contact-icon" aria-hidden="true" />{' '}
                <a href="tel:+8801768002207">+880 1768002207</a>
              </p>
              <p className="contact-value">
                <i className="fa-solid fa-envelope contact-icon" aria-hidden="true" />{' '}
                <a href="mailto:abrarjunaed22@gmail.com">abrarjunaed22@gmail.com</a>
              </p>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/Abrar2212"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/abrar.junaed.2025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/abrar_junaed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name*</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email*</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message*</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="status success">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="status error">Failed to send message. Please email me directly at abrarjunaed22@gmail.com.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
