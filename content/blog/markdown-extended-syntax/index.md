---
title: "Markdown Extended Syntax"
description: "This Markdown cheat sheet provides a quick overview of all extended Markdown syntax elements."
summary: "This Markdown cheat sheet provides a quick overview of all extended Markdown syntax elements."
date: 2022-12-21T18:56:30+01:00
lastmod: 2022-12-21T18:56:30+01:00
draft: true
weight: 60
gradient: "blue-green" # blue-green(default), blue-purple, orange-yellow, pink-blue, or purple-orange (this setting is only relevant when "images: []")
categories: ["Guides"]
tags: ["Markdown", "Cheat sheet"]
authors: ["Henk Verlinde"]
featured: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

This Markdown cheat sheet provides a quick overview of all extended Markdown syntax elements. If you need more information about any of these elements, refer to the reference guide for [extended syntax](https://www.markdownguide.org/extended-syntax).

## Table

```md
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

{.table}
```

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

{.table}

## Fenced Code Block

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

## Footnote

```md
Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
```

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote.

## Heading ID

```md
### My Great Heading{#custom-id}
```

### My Great Heading{#custom-id}

```html
<h3 id="custom-id">My Great Heading</h3>
```

## Definition List

```md
term
: definition
```

term
: definition

## Strikethrough

```md
~~The world is flat.~~
```

~~The world is flat.~~

## Task List

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
{.list-task}
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
{.list-task}

## Emoji

<div class="highlight"><pre tabindex="0" class="chroma"><code class="language-md" data-lang="md"><span class="line"><span class="cl">That is so funny! &#58;joy:
</span></span></code></pre></div>

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

## Highlight

```md
I need to highlight these <mark>very important words</mark>.
```

I need to highlight these <mark>very important words</mark>.

(See also [Hugo Markdown Support](https://www.markdownguide.org/tools/hugo/#hugo-markdown-support))

## Subscript

```md
H<sub>2</sub>O
```

H<sub>2</sub>O

(See also [Hugo Markdown Support](https://www.markdownguide.org/tools/hugo/#hugo-markdown-support))

## Superscript

```md
X<sup>2</sup>
```

X<sup>2</sup>

(See also [Hugo Markdown Support](https://www.markdownguide.org/tools/hugo/#hugo-markdown-support))
