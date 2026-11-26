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
            <span className="section-eyebrow">// 05 · Contact</span>
            <h2 className="section-title">Let&apos;s Connect &amp; Build Together</h2>
            <p className="contact-text">
              Have a project idea, internship opportunity, or collaboration in mind? Reach out via
              the form or contact me directly.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <i className="fa-solid fa-envelope" />
                </span>
                <div>
                  <span className="contact-item-label">Email</span>
                  <a href="mailto:abrarjunaed22@gmail.com">abrarjunaed22@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <i className="fa-solid fa-phone" />
                </span>
                <div>
                  <span className="contact-item-label">Phone</span>
                  <a href="tel:+8801768002207">+880 1768002207</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <i className="fa-solid fa-location-dot" />
                </span>
                <div>
                  <span className="contact-item-label">Location</span>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            <div className="contact-socials" aria-label="Social media profiles">
              <a
                href="https://github.com/Abrar2212"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/abrar.junaed.2025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook profile"
              >
                <i className="fa-brands fa-facebook-f" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/abrar_junaed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
              >
                <i className="fa-brands fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary contact-submit"
              disabled={status === 'sending'}
            >
              <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              <i className="fa-solid fa-paper-plane" aria-hidden="true" />
            </button>

            {status === 'success' && (
              <p className="status success" role="status" aria-live="polite">
                Message sent successfully! I will get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="status error" role="alert">
                Could not submit form right now—please email abrarjunaed22@gmail.com directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
