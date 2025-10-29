# Markdown Documentation Viewer MVP

A simplified MVP version of [OutSystems/docs-odc](https://github.com/OutSystems/docs-odc) - A clean, modern documentation viewer built with Next.js.

## Features

- 📝 Markdown rendering with GitHub Flavored Markdown support
- 📚 Table of Contents navigation
- 🎨 Clean, readable UI
- ⚡ Fast and responsive
- 🔍 Simple documentation structure

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gitmvp-com/markdown-docs-viewer-mvp.git
cd markdown-docs-viewer-mvp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── docs/[slug]/       # Dynamic doc pages
│   └── layout.tsx         # Root layout
├── content/               # Markdown documentation files
│   └── docs/             # Sample documentation
├── components/            # React components
│   ├── Sidebar.tsx       # Navigation sidebar
│   └── MarkdownContent.tsx # Markdown renderer
├── lib/                   # Utility functions
│   └── markdown.ts       # Markdown processing
└── public/               # Static assets
```

## Adding Documentation

1. Create a new `.md` file in the `content/docs/` directory
2. Add frontmatter with title and order:

```markdown
---
title: Your Doc Title
order: 1
---

# Your Content Here

Your markdown content...
```

3. The file will automatically appear in the sidebar navigation

## Tech Stack

- **Next.js 14.2.5** - React framework
- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **react-markdown** - Markdown rendering
- **remark-gfm** - GitHub Flavored Markdown support
- **gray-matter** - Frontmatter parsing

## Differences from Original

This MVP focuses on the core documentation viewing feature:

- ✅ Markdown rendering
- ✅ Simple navigation
- ✅ Clean UI
- ❌ Complex build pipeline (Python Markdown)
- ❌ Advanced markdown extensions
- ❌ Multiple language support
- ❌ Advanced search

## License

MIT

## Acknowledgments

Based on [OutSystems/docs-odc](https://github.com/OutSystems/docs-odc)
