# Portfolio Website

A modern, responsive portfolio website built with React and Node.js/Express featuring automatic theme synchronization with your system preferences.

## Features

- 🎨 **Automatic Theme Sync**: Automatically detects and syncs with your system's dark/light theme preference
- 🌓 **Manual Theme Toggle**: Switch between dark and light themes with a single click
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- 🎯 **Modern Design**: Clean, professional design with gray, white, and black color scheme
- 📧 **Contact Form**: Integrated contact form with backend API
- 🔄 **Smooth Animations**: Subtle animations and transitions for better UX

## Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client for API calls
- **CSS Variables** - For dynamic theming

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

### Running the Application

You need to run both the frontend and backend servers.

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
```
The frontend will start at `http://localhost:3000`

**Terminal 2 - Backend:**
```bash
cd backend
npm start
```
The backend will start at `http://localhost:5000`

## Theme System

The portfolio features an intelligent theme system that:

1. **Auto-detects** your system theme preference on first load
2. **Syncs automatically** when you change your system theme
3. **Remembers** your manual theme choice via localStorage
4. **Provides** a toggle button to manually switch themes anytime

### Color Scheme

**Light Theme:**
- Background: White (#ffffff)
- Secondary: Light Gray (#f5f5f5)
- Text: Dark Gray to Black (#1a1a1a)
- Accent: Blue (#2563eb)

**Dark Theme:**
- Background: Near Black (#0a0a0a)
- Secondary: Dark Gray (#1a1a1a)
- Text: White to Light Gray (#ffffff)
- Accent: Lighter Blue (#3b82f6)

## Customization

Edit the following files to customize with your information:

1. **Hero Section**: `frontend/src/components/Hero.jsx`
2. **Projects**: `frontend/src/components/Projects.jsx`
3. **Skills**: `frontend/src/components/Skills.jsx`
4. **Footer**: `frontend/src/components/Footer.jsx`

## API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/contact` - Contact form submission

## Building for Production

### Frontend
```bash
cd frontend
npm run build
```

---

Built with ❤️ using React and Node.js
