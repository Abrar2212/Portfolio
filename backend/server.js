import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide name, email, and message' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide a valid email address' 
    });
  }

  // Log the contact form data (in production, you'd send an email or save to database)
  console.log('Contact form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('---');

  // Send success response
  res.json({ 
    success: true, 
    message: 'Thank you for your message! I will get back to you soon.' 
  });
});

// Serve frontend build (if present) from ../frontend/dist so frontend and backend
// can run on the same port in production. This should come before the 404 handler.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDist = path.join(__dirname, '..', 'frontend', 'dist');

try {
  app.use(express.static(frontendDist));

  // All other non-API routes should serve the SPA's index.html
  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
} catch (e) {
  // If dist doesn't exist, just continue (dev mode normally)
}

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!' 
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`🌐 Network: http://<YOUR_IP>:${PORT}`);
});
