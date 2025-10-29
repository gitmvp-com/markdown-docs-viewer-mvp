---
title: Advanced Features
order: 3
---

# Advanced Features

This page covers some of the advanced features available in the documentation viewer.

## GitHub Flavored Markdown

This documentation viewer supports GitHub Flavored Markdown (GFM), which includes:

### Autolinks

URLs are automatically converted to links:

https://github.com

### Strikethrough

~~This text is struck through~~

### Tables

Full table support with alignment:

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left         | Center         | Right         |
| Text         | Text           | Text          |

### Task Lists

- [x] Complete task
- [ ] Pending task

## Frontmatter Metadata

Each document can include metadata in the frontmatter:

```yaml
---
title: Page Title
order: 1
---
```

### Available Fields

- **title**: The page title (displayed in sidebar and as H1)
- **order**: Numeric order for sidebar sorting (lower numbers appear first)

## Code Syntax Highlighting

Code blocks support syntax highlighting for many languages:

### JavaScript

```javascript
const greeting = 'Hello, World!';
console.log(greeting);
```

### Python

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

### TypeScript

```typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'John',
  age: 30
};
```

## Navigation

The sidebar automatically:

- Lists all documentation pages
- Sorts by the `order` field in frontmatter
- Highlights the current page
- Provides quick navigation between docs

## Best Practices

1. **Use descriptive titles**: Make sure your frontmatter title clearly describes the content
2. **Order logically**: Use the `order` field to create a logical flow through your documentation
3. **Keep files focused**: Each file should cover one main topic
4. **Use headers**: Break up content with clear headers for better readability
5. **Add examples**: Include code examples where relevant

## What's Missing from Original

This MVP intentionally simplifies some features from the original OutSystems docs-odc:

- ❌ Complex Python Markdown extensions
- ❌ Multi-language support
- ❌ Advanced search functionality
- ❌ Complex build pipelines
- ❌ Vale linting
- ❌ Custom markdown extensions

## Next Steps

Ready to deploy? Check out the [Deployment Guide](./deployment).
