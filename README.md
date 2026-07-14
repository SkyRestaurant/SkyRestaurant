# Sky Restaurant & Pool Bar - Web Platform

Modern, highly scalable static site generator built with Astro, styled with Tailwind CSS, and optimized for GitHub Pages deployment. This project replaces the legacy HTML/JS implementation with a performant, SEO-optimized architecture.

## 🚀 Tech Stack
* **Framework:** Astro (Static Site Generation)
* **Styling:** Tailwind CSS
* **Environment:** Node.js v24
* **Deployment:** GitHub Pages (Automated via GitHub Actions)
* **Data Structure:** Static JSON/JS data modules (planned transition to Sanity.io Headless CMS)
* **Localization:** Built-in Astro i18n (MK / EN)

## 📁 Project Structure

* `public/` - Static assets (Favicons, Logos, Open Graph images, robots.txt)
* `src/assets/` - Heavy images for Astro optimization (WebP/AVIF format)
* `src/components/` - Reusable UI components (Navbar, Hero, Footer, Gallery, etc.)
* `src/data/` - Static data structures for menus (`menu.js`, `pool-menu.json`)
* `src/i18n/` - Localization JSON dictionaries (`mk.json`, `en.json`)
* `src/layouts/` - Page layouts (`BaseLayout.astro` handling global SEO and metadata)
* `src/pages/` - File-based routing (pages and API endpoints)
  * `index.astro` - Root (Macedonian Landing)
  * `menu.astro` - Root Menu (Macedonian - Preserves existing QR codes)
  * `pool.astro` - Dedicated Kiosk Mode for Pool Bar QR codes (No navbar/footer, highly optimized)
  * `en/` - English routes equivalent
* `src/scripts/` - Client-side TypeScript logic decoupled from UI (`pool.ts`, `gallery.ts`, etc.)
* `src/styles/` - Global CSS stylesheets (`global.css`)

## 🌍 Localization (i18n) & Legacy QR Codes
The default locale (Macedonian) does not have a URL prefix. This is a critical architectural decision that ensures all existing physical physical QR codes pointing to `skyrestaurant.mk/menu` remain fully functional without requiring redirects. 
The English locale explicitly uses the `/en/` prefix.

## 📱 Kiosk Mode (Pool Bar Menu)
The `pool.astro` page operates as a standalone "Kiosk Mode" application. It bypasses the standard `BaseLayout` to provide an app-like, distraction-free experience designed specifically for mobile users scanning QR codes at the pool bar. It features CSS-driven ambient backgrounds and decoupled TypeScript logic for tab switching without network requests.

## 🛠️ Development Commands

* `npm install` - Installs dependencies
* `npm run dev` - Starts local dev server at `localhost:4321`
* `npm run build` - Builds production site to `./dist/`
* `npm run preview` - Previews production build locally