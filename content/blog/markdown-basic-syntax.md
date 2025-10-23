+++
title = 'Markdown Basic Syntax'
summary = 'A quick reference to the Markdown basic syntax.'
description = 'A quick reference to the Markdown basic syntax.'
date = '2025-09-03T19:51:16+02:00'
lastmod = '2025-09-05T12:37:17+02:00'
draft = true
weight = 50
categories = ["Internal"] # E.g. ["Product", "Legal"]
tags = ["Markdown", "Reference"] # E.g. ["Markdown", "Cheat sheet"]
authors = ["Henk Verlinde"] # E.g. ["Henk Verlinde"]

[params.seo]
  title = "" # custom title (optional)
  description = "" # custom description (recommended)
  canonical = "" # custom canonical URL (optional)
  robots = "" # custom robot tags (optional)
+++

A quick reference to the Markdown basic syntax.

> Refer to the [Basic Syntax](https://markdownguide.offshoot.io/basic-syntax/) reference guide from The Markdown Guide for more information.

## Headings

```md
# H1

## H2

### H3
```

# H1

## H2

### H3

## Paragraphs

```md
I really like using Markdown.

I think I'll use it to format all of my documents from now on.
```

I really like using Markdown.

I think I'll use it to format all of my documents from now on.

## Line Breaks

```md
First line with a backslash after.\
And the next line.
```

First line with a backslash after.\
And the next line.

## Emphasis

You can add emphasis by making text bold or italic.

### Bold

```md
I just love **bold text**.
```

I just love **bold text**.

### Italic

```md
Italicized text is the _cat's meow_.
```

Italicized text is the _cat's meow_.

### Bold and Italic

```md
This text is **_really important_**.
```

This text is **_really important_**.

## Blockquotes

```md
> Dorothy followed her through many of the beautiful rooms in her castle.
```

> Dorothy followed her through many of the beautiful rooms in her castle.

## Lists

You can organize items into ordered and unordered lists.

### Ordered List

```md
1. First item
2. Second item
3. Third item
```

1. First item
2. Second item
3. Third item

### Unordered List

```md
- First item
- Second item
- Third item
```

- First item
- Second item
- Third item

## Code

```md
At the command prompt, type `nano`.
```

At the command prompt, type `nano`.

### Escaping Backticks

```
``Use `code` in your Markdown file.``
```

``Use `code` in your Markdown file.``

### Code Blocks

```html
<html>
  <head> </head>
</html>
```

````html
```html
<html>
  <head> </head>
</html>
```
````

## Horizontal Rules

```md
---
```

---

## Links

```md
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
```

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

## Images

```md
![Tipi Tent Beneath the Northern Lights](images/dylan-shaw-XNOGg2MsGpk-unsplash.jpg)
```

![Tipi Tent Beneath the Northern Lights](images/dylan-shaw-XNOGg2MsGpk-unsplash.jpg)

### Linking Images

```md
[![Tipi Tent Beneath the Northern Lights](images/dylan-shaw-XNOGg2MsGpk-unsplash.jpg)](/)
```

[![Tipi Tent Beneath the Northern Lights](images/dylan-shaw-XNOGg2MsGpk-unsplash.jpg)](/)

## Escaping Characters

```md
\* Without the backslash, this would be a bullet in an unordered list.
```

\* Without the backslash, this would be a bullet in an unordered list.

## HTML

```md
This **word** is bold. This <em>word</em> is italic.
```

This **word** is bold. This <em>word</em> is italic.
