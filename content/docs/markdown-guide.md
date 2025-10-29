---
title: Markdown Guide
order: 2
---

# Markdown Guide

This guide covers the Markdown syntax supported by this documentation viewer.

## Headers

Use `#` symbols to create headers:

```markdown
# H1 Header
## H2 Header
### H3 Header
```

## Text Formatting

- **Bold text**: `**bold**` or `__bold__`
- _Italic text_: `*italic*` or `_italic_`
- `Code`: `` `code` ``
- ~~Strikethrough~~: `~~strikethrough~~`

## Lists

### Unordered Lists

```markdown
- Item 1
- Item 2
  - Nested item
  - Another nested item
- Item 3
```

### Ordered Lists

```markdown
1. First item
2. Second item
3. Third item
```

## Links and Images

### Links

```markdown
[Link text](https://example.com)
```

Example: [Visit GitHub](https://github.com)

### Images

```markdown
![Alt text](image-url.jpg)
```

## Code Blocks

Use triple backticks for code blocks:

```javascript
function hello() {
  console.log('Hello, world!');
}
```

## Tables

Create tables using pipes and hyphens:

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

| Feature | Supported | Notes |
|---------|-----------|-------|
| Headers | ✅ | H1-H6 |
| Lists | ✅ | Ordered & unordered |
| Code | ✅ | Inline & blocks |
| Tables | ✅ | GitHub Flavored Markdown |

## Blockquotes

Use `>` for blockquotes:

```markdown
> This is a blockquote.
> It can span multiple lines.
```

Example:

> "Documentation is a love letter that you write to your future self." - Damian Conway

## Horizontal Rules

Create horizontal rules with three or more hyphens, asterisks, or underscores:

```markdown
---
```

---

## Task Lists

Create task lists with `- [ ]` and `- [x]`:

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

- [x] Set up project
- [x] Write documentation
- [ ] Deploy to production

## Conclusion

This covers the basic Markdown syntax. For more advanced features, check out the [Advanced Features](./advanced-features) guide.
