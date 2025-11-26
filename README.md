# Portfolio Website

A modern portfolio website built with Astro and Tailwind CSS, showcasing professional experience, projects, and blog posts.

## Tech Stack

- **Astro** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Markdown** - Content management

## Features

- Portfolio homepage with hero section
- Experience timeline
- Projects showcase with detailed pages
- Blog with markdown support
- Fully responsive design
- SEO optimized
- GitHub Pages ready

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your site.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Content Structure

### Projects

Add new projects in `src/content/projects/`:

```markdown
---
title: "Project Title"
description: "Brief description"
technologies: ["React", "Node.js"]
github: "https://github.com/username/repo"
demo: "https://demo.url"
featured: true
order: 1
---

Project details in markdown...
```

### Experience

Add work experience in `src/content/experience/`:

```markdown
---
company: "Company Name"
position: "Job Title"
startDate: 2020-01-01
endDate: 2023-01-01
location: "City, Country"
current: false
---

Role description and achievements...
```

### Blog Posts

Add blog posts in `src/content/blog/` following the existing format.

## Deployment to GitHub Pages

### One-Time Setup

1. Create a new repository on GitHub named `prabintp.github.io`
   - **Important**: The repository must be named `<username>.github.io` to serve at the root domain

2. Initialize git and push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/prabintp/prabintp.github.io.git
git push -u origin main
```

3. Enable GitHub Pages in your repository:
   - Go to Settings > Pages
   - Under "Source", select "GitHub Actions"

4. The workflow will automatically deploy on every push to main

### Your Site URL

After deployment, your site will be available at:
`https://prabintp.github.io/`

## Customization

### Update Personal Information

1. Edit `src/consts.ts` to update site title and description
2. Update navigation and social links in `src/components/Header.astro`
3. Modify the homepage content in `src/pages/index.astro`

### Styling

- Global styles: `src/styles/global.css`
- Tailwind configuration can be customized in component styles
- Color scheme can be adjusted using Tailwind utility classes

### Site Configuration

The site is configured to deploy to the root domain. If you want to deploy to a subdirectory instead (e.g., `https://username.github.io/subdirectory/`), update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/YOUR_REPO_NAME', // Add this line for subdirectory deployment
});
```

And update all navigation links in components to include the base path.

## Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   ├── content/      # Markdown content
│   │   ├── blog/
│   │   ├── projects/
│   │   └── experience/
│   ├── layouts/      # Page layouts
│   ├── pages/        # Routes
│   └── styles/       # Global styles
├── .github/
│   └── workflows/    # GitHub Actions
└── package.json
```

## License

MIT

## Contact

- Email: prabintp@gmail.com
- GitHub: [prabintp](https://github.com/prabintp)
