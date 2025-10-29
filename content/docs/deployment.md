---
title: Deployment
order: 4
---

# Deployment Guide

This guide covers how to deploy your documentation viewer to production.

## Deployment Options

There are several ways to deploy this Next.js application:

### 1. Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com), the creators of Next.js.

#### Steps:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

#### Benefits:

- Automatic deployments on git push
- Preview deployments for pull requests
- Global CDN
- Zero configuration
- Free for personal projects

### 2. Netlify

[Netlify](https://netlify.com) is another excellent option for hosting Next.js apps.

#### Configuration:

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 3. Self-Hosted with Node.js

For self-hosting on your own server:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

The app will run on port 3000 by default.

#### Using PM2 for Process Management

```bash
# Install PM2
npm install -g pm2

# Start the app
pm2 start npm --name "docs-viewer" -- start

# Save the process list
pm2 save

# Set up startup script
pm2 startup
```

### 4. Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:

```bash
docker build -t docs-viewer .
docker run -p 3000:3000 docs-viewer
```

## Static Export

For completely static hosting (GitHub Pages, S3, etc.):

1. Update `next.config.js`:

```javascript
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

2. Build:

```bash
npm run build
```

3. The static files will be in the `out` directory

## Environment Variables

This MVP doesn't require any environment variables, but if you add features that need them:

1. Create a `.env.local` file (never commit this!)
2. Add your variables:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

3. Access in your code:

```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

## Performance Optimization

### Build Optimization

- Next.js automatically optimizes your build
- Images are optimized automatically (when using `next/image`)
- CSS and JavaScript are minified
- Pages are statically generated when possible

### Caching

Next.js sets appropriate cache headers automatically for:

- Static assets (immutable, cached forever)
- Page data (revalidated as needed)
- API routes (configurable)

## Monitoring

For production, consider adding:

- **Analytics**: Google Analytics, Plausible, or Fathom
- **Error tracking**: Sentry or Bugsnag
- **Performance monitoring**: Vercel Analytics or web-vitals

## Security

- Keep dependencies updated: `npm audit` and `npm update`
- Use HTTPS in production
- Set appropriate CORS headers if needed
- Implement rate limiting for API routes if added

## Troubleshooting

### Build Fails

- Check Node.js version (should be 18+)
- Clear `.next` folder and rebuild
- Check for TypeScript errors: `npm run lint`

### Slow Performance

- Enable Next.js analytics to identify bottlenecks
- Check bundle size: `npm run build` shows bundle analysis
- Consider code splitting for large components

## Next Steps

Your documentation is now live! Consider:

- Setting up a custom domain
- Adding analytics
- Implementing search functionality
- Creating a CI/CD pipeline
