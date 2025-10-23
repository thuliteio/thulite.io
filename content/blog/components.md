+++
title = 'Components'
summary = 'Browse examples for quick usage of buttons, cards, and other UI components in your project.'
description = 'Browse examples for quick usage of buttons, cards, and other UI components in your project.'
date = '2025-09-05T13:38:26+02:00'
lastmod = '2025-09-05T13:38:26+02:00'
draft = true
weight = 50
categories = ["Internal"] # E.g. ["Product", "Legal"]
tags = ["Components", "Reference"] # E.g. ["Markdown", "Cheat sheet"]
authors = ["Henk Verlinde"] # E.g. ["Henk Verlinde"]

[params.seo]
  title = "" # custom title (optional)
  description = "" # custom description (recommended)
  canonical = "" # custom canonical URL (optional)
  robots = "" # custom robot tags (optional)
+++

Browse examples for quick usage of buttons, cards, and other UI components in your project.

> For more details on button styles and usage, see the [Bootstrap Buttons documentation](https://getbootstrap.com/docs/5.3/components/buttons/).

## Buttons

```html
<button type="button" class="btn btn-thulite">Download</button>
```

<button type="button" class="btn btn-thulite">Download</button>

```html
<a class="btn btn-thulite" href="#" role="button">Download</a>
```

<a class="btn btn-thulite" href="#" role="button">Download</a>

### Outline buttons

```html
<button type="button" class="btn btn-outline-thulite">Read More</button>
```

<button type="button" class="btn btn-outline-thulite">Read More</button>

```html
<a class="btn btn-outline-thulite" href="#" role="button">Read More</a>
```

<a class="btn btn-outline-thulite" href="#" role="button">Read More</a>

### Categories

```html
<a class="btn btn-category" href="#" role="button">Spring</a>
```

<a class="btn btn-category" href="#" role="button">Spring</a>

### Navigation

```html
<a class="post-navigation-link" href="#"><span aria-hidden="true">←</span></a>
```

<a class="post-navigation-link" href="#"><span aria-hidden="true">←</span></a>

```html
<a class="post-navigation-link" href="#"><span aria-hidden="true">→</span></a>
```

<a class="post-navigation-link" href="#"><span aria-hidden="true">→</span></a>

```html
<div class="d-flex justify-content-center align-items-center">
  <span aria-current="page" class="page-numbers current">1</span>
  <a class="page-numbers" href="#">2</a>
</div>
```

<div class="d-flex justify-content-center align-items-center">
  <span aria-current="page" class="page-numbers current">1</span>
  <a class="page-numbers" href="#">2</a>
</div>

## Cards

```html
<div class="card">
  <div class="card-body">This is some text within a card body.</div>
</div>
```

<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>

### Top Borders

```html
<div class="card border-top-aurora-horizontal">
  <div class="card-body">This is some text within a card body.</div>
</div>
```

<div class="card border-top-aurora-horizontal">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>

### Backgrounds

```html
<div class="card bg-dark">
  <div class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
</div>
```

<div class="card bg-dark">
  <div class="card-body">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </div>
</div>

### Top Borders and Backgrounds

```html
<div class="card bg-dark border-top-aurora-horizontal">
  <div class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
</div>
```

<div class="card bg-dark border-top-aurora-horizontal">
  <div class="card-body">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </div>
</div>

### Titles

```html
<div class="card text-bg-dark">
  <div class="card-body">
    <h2 class="card-title">Dark card title</h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
```

<div class="card text-bg-dark">
  <div class="card-body">
    <h2 class="card-title">Dark card title</h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>

### Link Cards

```html
<div class="card">
  <div class="card-body">
    <h2 class="card-title"><a href="#" class="card-link stretched-link text-decoration-none text-reset">Dark card title</a></h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
```

<div class="card">
  <div class="card-body">
    <h2 class="card-title"><a href="#" class="card-link stretched-link text-decoration-none text-reset">Dark card title</a></h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
</div>
