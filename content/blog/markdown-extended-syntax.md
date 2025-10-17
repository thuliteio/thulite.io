+++
title = 'Markdown Extended Syntax'
summary = 'A quick reference to the Markdown extended syntax.'
description = 'A quick reference to the Markdown extended syntax.'
date = '2025-09-04T14:41:10+02:00'
lastmod = '2025-09-05T01:37:07+02:00'
draft = true
weight = 50
categories = ["Internal"] # E.g. ["Product", "Legal"]
tags = ["Markdown", "Reference"] # E.g. ["Markdown", "Cheat sheet"]
authors = ["Henk Verlinde"] # E.g. ["Henk Verlinde"]

[seo]
  title = "" # custom title (optional)
  description = "" # custom description (recommended)
  canonical = "" # custom canonical URL (optional)
  robots = "" # custom robot tags (optional)
+++

A quick reference to the Markdown extended syntax.

> Refer to the [Extended Syntax](https://markdownguide.offshoot.io/extended-syntax/) reference guide from The Markdown Guide for more information.

## Tables

```md
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
```

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

## Fenced Code Blocks

````md
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

## Footnotes

```md
Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
```

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

## Heading IDs

```md
### My Great Heading{#custom-id}
```

### My Great Heading{#custom-id}

```html
<h3 id="custom-id">My Great Heading</h3>
```

## Definition Lists

```md
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.
```

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

## Strikethrough

```md
~~The world is flat.~~ We now know that the world is round.
```

~~The world is flat.~~ We now know that the world is round.

## Task Lists

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## Emoji

> Copy the emoji shortcode from [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) by clicking on the emoji.

```md
That is so funny! :joy:
```

That is so funny! :joy:

## Unsupported elements

> Hugo does not [support](https://www.markdownguide.org/tools/hugo/#hugo-markdown-support) the highlight, subscript, and superscript elements. Use the HTML element itself instead.

### Highlight

```md
I need to highlight these <mark>very important words</mark>.
```

I need to highlight these <mark>very important words</mark>.

### Subscript

```md
H<sub>2</sub>O
```

H<sub>2</sub>O

### Superscript

```md
y=x<sup>2</sup>+2
```

y=x<sup>2</sup>+2
