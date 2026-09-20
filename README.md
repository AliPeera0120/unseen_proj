# The Unseen Project

Collecting donated eyeglasses across the Philadelphia area to restore vision and empower lives.

Built with React, Vite, Tailwind CSS, shadcn/ui, and Leaflet. Fully static — no backend required. Donation box locations live in `src/data/donationLocations.json`.

## Local development

```
npm install
npm run dev
```

## Editing content

- **Donation locations** (map + impact count): edit `src/data/donationLocations.json`. Each entry needs name, address, city, state, zip, latitude, longitude, type (`school` | `business` | `community_center` | `collection_site`), status (`active` | `full` | `needs_pickup`), and featured (true/false). Add `boxCount` only when one address has more than one physical box; otherwise it defaults to 1.
- **Featured events**: edit `src/data/events.js`. Event images live in `public/images/community/`.
- **Team profiles**: edit `src/data/teamMembers.js`. Headshots live in `public/images/team/`; the first profile is also featured on the home page.
- **Confirmed impact totals**: edit `src/data/siteData.js`. The public collection-box figure is calculated from the location data and rounded down automatically.
- **Pages**: edit the files in `src/pages/`.

## Contact form

The Contact page opens the visitor's email app (mailto) addressed to theunseenprojectofficial@gmail.com.

## Media

Organization photography lives in `public/images/community/`. The Events hero video is `public/video/community-news-feature.mp4`, with its poster image beside the other community photos.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys `dist/` to GitHub Pages. In the repo's Settings → Pages, set Source to "GitHub Actions" and enter your custom domain. A `404.html` copy of `index.html` is created at build time so client-side routes work on direct navigation.
