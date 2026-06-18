# Sky Restaurant & Pool Bar - Web Platform

Modern, highly scalable static site generator built with Astro, styled with Tailwind CSS, and optimized for GitHub Pages deployment. This project replaces the legacy HTML/JS implementation with a performant, SEO-optimized architecture.

## 🚀 Tech Stack
* Framework: Astro (Static Site Generation)
* Styling: Tailwind CSS
* Environment: Node.js v24
* Deployment: GitHub Pages (Automated via GitHub Actions)
* CMS: Sanity.io (Headless Data for Menu)
* Localization: Built-in Astro i18n (MK / EN)

## 📂 Project Structure
* `public/` - Static assets (Favicons, Logos, robots.txt)
* `src/assets/` - Heavy images for Astro optimization (WebP/AVIF)
* `src/components/` - Reusable UI components
* `src/i18n/` - Localization JSON files (mk.json, en.json)
* `src/layouts/` - Page layouts (BaseLayout with SEO heads)
* `src/pages/` - File-based routing (pages and API endpoints)
  * `index.astro` - Root (Macedonian Landing)
  * `menu.astro` - Root Menu (Macedonian - Preserves existing QR codes)
  * `en/` - English routes

## 🛠️ Development Commands
* `npm install` - Installs dependencies
* `npm run dev` - Starts local dev server at localhost:4321
* `npm run build` - Builds production site to ./dist/
* `npm run preview` - Previews build locally

## 🌍 Localization (i18n) & QR Codes
The default locale (mk) does not have a URL prefix. This ensures that existing physical QR codes pointing to `skyrestaurant.mk/menu` remain functional. The English locale uses the `/en/` prefix.