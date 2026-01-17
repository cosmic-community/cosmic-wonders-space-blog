# Cosmic Wonders Space Blog

![Cosmic Wonders Space Blog](https://imgix.cosmicjs.com/c66f0a50-f3ed-11f0-b5e1-c5ebeb7926b8-photo-1614728263952-84ea256f9679-1768686300770.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A beautiful Astro-powered blog exploring the wonders of space, powered by Cosmic CMS. Features posts from expert authors across categories like planets, stars & galaxies, and space exploration.

## Features

- 🚀 **Astro 5.x** - Latest Astro framework for optimal performance
- 🌌 **Cosmic CMS** - Headless content management with real-time updates
- 🎨 **Tailwind CSS** - Utility-first styling with custom cosmic theme
- 📱 **Fully Responsive** - Mobile-first design that looks great everywhere
- ⚡ **Static Generation** - Pre-rendered pages for lightning-fast loads
- 🔍 **SEO Ready** - Optimized meta tags and semantic HTML
- 📝 **Markdown Support** - Rich content rendering for blog posts
- 👨‍🚀 **Author Pages** - Individual profiles for content creators
- 🏷️ **Category Filtering** - Organized content by topic

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=696c0287439a2d58af1d962a&clone_repository=696c0445439a2d58af1d9656)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a blog about the wonders of space with posts, authors, and categories"

### Code Generation Prompt

> "Based on the content model I created for 'Create a content model for a blog about the wonders of space with posts, authors, and categories', now build a complete web application using Astro that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Astro](https://astro.build) - The web framework for content-driven websites
- [Cosmic](https://www.cosmicjs.com) - Headless CMS for content management
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+
- A Cosmic account with your space blog content

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up environment variables (see below)
4. Start the development server:
   ```bash
   bun run dev
   ```

### Environment Variables

Create a `.env` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

### Fetching Posts

```typescript
import { cosmic } from '../lib/cosmic';

const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching a Single Post

```typescript
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'post-slug' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching Authors

```typescript
const { objects: authors } = await cosmic.objects
  .find({ type: 'authors' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

## Cosmic CMS Integration

This application uses the following content types from your Cosmic bucket:

### Posts
- **Title** (text) - Post title
- **Content** (markdown) - Full post content
- **Excerpt** (textarea) - Short description
- **Featured Image** (file) - Header image
- **Author** (object) - Related author
- **Categories** (objects) - Related categories

### Authors
- **Name** (text) - Author's full name
- **Bio** (textarea) - Author biography
- **Avatar** (file) - Profile picture

### Categories
- **Name** (text) - Category name
- **Description** (textarea) - Category description

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in the Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Create a new site in Netlify
3. Add environment variables in Site Settings > Environment
4. Deploy with build command: `bun run build`

## Project Structure

```
├── public/
│   └── dashboard-console-capture.js
├── src/
│   ├── components/
│   │   ├── CategoryBadge.astro
│   │   ├── CosmicBadge.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Navigation.astro
│   │   └── PostCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── cosmic.ts
│   ├── pages/
│   │   ├── authors/
│   │   │   └── [slug].astro
│   │   ├── categories/
│   │   │   └── [slug].astro
│   │   ├── posts/
│   │   │   └── [slug].astro
│   │   ├── authors.astro
│   │   ├── categories.astro
│   │   └── index.astro
│   └── types.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## License

MIT
<!-- README_END -->