// Vercel Serverless function to handle contact form submissions
module.exports = (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please provide name, email, and message' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address' });
  }

  // In production we'd send an email or persist to a DB. For now, log it.
  console.log('Contact form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('---');

  return res.status(200).json({ success: true, message: 'Thank you for your message! I will get back to you soon.' });
};
