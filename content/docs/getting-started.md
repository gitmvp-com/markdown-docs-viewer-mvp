---
title: Getting Started
order: 1
---

# Getting Started

Welcome to the Documentation Viewer! This guide will help you get started with creating and viewing documentation.

## Overview

This is a simple markdown-based documentation system that allows you to:

- Write documentation in Markdown format
- Organize docs with frontmatter metadata
- View beautifully rendered documentation

## Installation

To get started with this project:

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`

```bash
git clone https://github.com/gitmvp-com/markdown-docs-viewer-mvp.git
cd markdown-docs-viewer-mvp
npm install
npm run dev
```

## Creating Documentation

All documentation files are stored in the `content/docs/` directory as Markdown (`.md`) files.

### File Structure

Each documentation file should have:

1. **Frontmatter** - Metadata at the top of the file
2. **Content** - Your markdown content

### Example

```markdown
---
title: My Documentation Page
order: 1
---

# My Documentation Page

Your content here...
```

## Next Steps

- Learn about [Markdown syntax](./markdown-guide)
- Explore [advanced features](./advanced-features)
- Check out [deployment options](./deployment)
