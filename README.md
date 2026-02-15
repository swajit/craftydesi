# CraftyDesi Woodworking Website

A modern, fast, and low-maintenance static website built with [Astro](https://astro.build).

## 🪵 How to Add New Projects

This site is designed to be updated without any coding knowledge. To add a new project:

1.  **Create a folder** under `/projects/` with your project name (e.g., `/projects/cherry-desk/`).
2.  **Add a README.md** file inside that folder.
    *   The first `#` heading will be the project title.
    *   The rest of the text will be the description.
3.  **Add images** (Coming soon: the site will automatically detect and display images added to the folder).
4.  **Push to GitHub.** The site will automatically rebuild and your new project will appear on the Projects page.

## 🚀 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions whenever you push to the `main` branch.

## 🛠️ Local Development

If you want to run the site locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📩 Contact Form
The contact page now points to a **Google Form** for project requests. You can update the link in `src/pages/contact.astro` to your own Google Form URL.
