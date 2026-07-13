# The Unseen Project

Collecting donated eyeglasses across the Philadelphia area to restore vision and empower lives.

Built with React, Vite, Tailwind CSS, shadcn/ui, and Leaflet. Fully static — no backend required. Donation box locations live in `src/data/donationLocations.json`.

## Local development

```
npm install
npm run dev
```

## Editing content

- **Donation locations** (map + home preview): edit `src/data/donationLocations.json`. Each entry needs name, address, city, state, zip, latitude, longitude, type (`school` | `business` | `community_center`), status (`active` | `full` | `needs_pickup`), and featured (true/false).
- **Pages**: edit the files in `src/pages/`.

## Contact form

The Contact page opens the visitor's email app (mailto) addressed to theunseenprojectofficial@gmail.com.

## Images

The logo and hero image are still hosted on Base44 URLs. To make the site fully self-contained, run once from the repo root:

```
bash scripts/localize-images.sh
```

This downloads them into `public/images/` and rewrites the code to use local paths. Commit the result.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys `dist/` to GitHub Pages. In the repo's Settings → Pages, set Source to "GitHub Actions" and enter your custom domain. A `404.html` copy of `index.html` is created at build time so client-side routes work on direct navigation.
