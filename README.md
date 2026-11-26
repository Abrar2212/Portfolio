# Abrar Junaed — Developer Portfolio

Live Site: **https://portfolio-coral-kappa.vercel.app**

A responsive, theme-aware developer portfolio showcasing full-stack web engineering, interactive 3D web platforms, enterprise backend systems, and applied AI/vision research.

## Highlights

- **System-Synced Dark & Light Mode**: Automatic OS color-scheme detection with persistent manual toggle.
- **Interactive Hero & Developer Terminal**: Status indicator, floating ambient geometry (`anime.js`), and syntax-styled engineering profile card.
- **5-Domain Categorized Tech Arsenal**: Filterable skill domains covering Languages, Frontend/3D/Motion, Backend/APIs, Databases/Cloud/DevOps, and Applied AI/Vision/Robotics.
- **9 Featured Engineering Systems**: Filterable project showcase with live demos and source links (**PrintX3D**, **LearnMatrix**, **Skill Binimoy**, **Starry-Wrap**, **Non-Visual Confidence Recall**, **Autonomous Service Robot**, **Scholarship Scout**, **Qasar**, and **Home Hunt**).
- **Serverless & Express Contact API**: Integrated `/api/contact` endpoint for direct messaging.

## Tech Stack

- **Frontend**: React 19, Vite, CSS Custom Properties, Font Awesome 6, Anime.js
- **Backend / Serverless API**: Node.js, Express, Vercel Serverless Functions (`/api/contact`, `/api/health`)

## Local Development

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend (optional local Express server)
cd backend
npm install
npm start
```

## Production Build

```bash
cd frontend
npm run lint
npm run build
```
