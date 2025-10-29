---
title: Contributing
order: 5
---

# Contributing Guide

Thank you for your interest in contributing to this documentation viewer! This guide will help you get started.

## How to Contribute

There are many ways to contribute:

1. **Report bugs**: Found a bug? Open an issue on GitHub
2. **Suggest features**: Have an idea? We'd love to hear it!
3. **Fix issues**: Check out open issues and submit a PR
4. **Improve documentation**: Help make these docs better
5. **Share feedback**: Let us know what you think

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- A GitHub account

### Setup Development Environment

1. Fork the repository on GitHub

2. Clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/markdown-docs-viewer-mvp.git
cd markdown-docs-viewer-mvp
```

3. Install dependencies:

```bash
npm install
```

4. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

5. Start the development server:

```bash
npm run dev
```

## Making Changes

### Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Run `npm run lint` before committing
- Use meaningful variable and function names
- Add comments for complex logic

### Writing Documentation

1. Create a new `.md` file in `content/docs/`
2. Add frontmatter with title and order
3. Write clear, concise content
4. Use code examples where helpful
5. Test that it renders correctly

### Commit Messages

Use clear, descriptive commit messages:

```
✅ Good:
- "Add search functionality to sidebar"
- "Fix: Resolve markdown rendering issue with tables"
- "Docs: Update installation instructions"

❌ Bad:
- "Update"
- "Fix bug"
- "Changes"
```

## Submitting a Pull Request

1. Make sure all tests pass: `npm run lint`
2. Push your changes to your fork
3. Open a pull request on GitHub
4. Describe your changes clearly
5. Link any related issues
6. Wait for review

### PR Checklist

- [ ] Code follows the style guide
- [ ] All tests pass
- [ ] Documentation is updated (if needed)
- [ ] Commit messages are clear
- [ ] PR description explains the changes

## Reporting Bugs

When reporting bugs, please include:

- **Description**: Clear description of the bug
- **Steps to reproduce**: How to recreate the issue
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: OS, browser, Node version, etc.
- **Screenshots**: If applicable

### Bug Report Template

```markdown
## Description
A clear description of the bug.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What should happen.

## Actual Behavior
What actually happens.

## Environment
- OS: [e.g., macOS 13.0]
- Browser: [e.g., Chrome 120]
- Node: [e.g., 18.17.0]
```

## Suggesting Features

We welcome feature suggestions! Please:

- Check if the feature already exists
- Search existing issues to avoid duplicates
- Clearly describe the feature and its benefits
- Provide use cases or examples

## Code Review Process

1. A maintainer will review your PR
2. They may request changes
3. Make requested changes and push updates
4. Once approved, your PR will be merged
5. Your contribution will be included in the next release!

## Development Tips

### Hot Reload

The development server supports hot reload. Changes to code will automatically refresh.

### Testing Locally

Before submitting:

```bash
# Lint your code
npm run lint

# Build to check for errors
npm run build

# Test the production build
npm run start
```

### Project Structure

```
├── app/              # Next.js app directory
├── components/       # React components
├── content/          # Markdown documentation
├── lib/             # Utility functions
└── public/          # Static assets
```

## Questions?

Not sure about something? Feel free to:

- Open an issue with your question
- Check existing issues for answers
- Review the documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Thank You!

Every contribution helps make this project better. Thank you for taking the time to contribute! 🎉
