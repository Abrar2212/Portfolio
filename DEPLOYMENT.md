# Deployment Guide

This portfolio website is a static site and can be deployed to various hosting platforms. Here are the most popular options:

## Option 1: GitHub Pages (Recommended - Free)

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the branch you want to deploy (e.g., `main`)
4. Click "Save"
5. Your site will be live at: `https://abrar2212.github.io/Portfolio/`

## Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account and select this repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
5. Click "Deploy site"

## Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Framework Preset: Other
5. Click "Deploy"

## Option 4: Traditional Web Hosting

Upload the following files to your web hosting provider:
- `index.html`
- `styles.css`
- `script.js`

Make sure `index.html` is in the root directory.

## Testing Locally

To test the site locally before deployment:

```bash
# Using Python (Python 3)
python3 -m http.server 8080

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8080
```

Then open your browser to `http://localhost:8080`

## Custom Domain

After deployment, you can add a custom domain:
- **GitHub Pages**: Add a CNAME file with your domain
- **Netlify/Vercel**: Go to domain settings and follow the instructions

## Next Steps

1. Update personal information in `index.html`
2. Replace placeholder project content
3. Update contact information
4. Add actual project screenshots
5. Deploy to your preferred platform
6. Share your portfolio URL!

Good luck! 🚀
