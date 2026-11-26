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
            <span className="section-index">05 / Contact</span>
            <h2 className="section-title">Get in touch</h2>
            <p className="contact-text">
              Feel free to reach out regarding internships, project collaborations, or questions
              about my work.
            </p>

            <div className="contact-ledger">
              <div className="ledger-row">
                <span className="ledger-label">Email</span>
                <a href="mailto:abrarjunaed22@gmail.com">abrarjunaed22@gmail.com</a>
              </div>
              <div className="ledger-row">
                <span className="ledger-label">Phone</span>
                <a href="tel:+8801768002207">+880 1768002207</a>
              </div>
              <div className="ledger-row">
                <span className="ledger-label">Location</span>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            <div className="contact-socials" aria-label="Social links">
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
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
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
                placeholder="How can I help?"
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
            </button>

            {status === 'success' && (
              <p className="status success" role="status" aria-live="polite">
                Message sent. Thank you for reaching out.
              </p>
            )}
            {status === 'error' && (
              <p className="status error" role="alert">
                Unable to send right now—please email abrarjunaed22@gmail.com directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
