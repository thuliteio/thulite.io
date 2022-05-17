---
title: "Images"
description: "Add a local or a remote image with Markdown, or use the image partial in a template. Images are lazyloaded, blurred up, and responsive."
lead: "Add a local or a remote image with Markdown, or use the image partial in a template. Images are lazyloaded, blurred up, and responsive."
date: 2020-11-23T11:53:06+01:00
lastmod: 2020-11-23T11:53:06+01:00
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 160
toc: true
---

See also the Markdown Guide: [Images](https://www.markdownguide.org/basic-syntax/#images-1)

## Processing

- Render hook: `./layouts/_default/_markup/render-image.html`.
- Image partial: `./layouts/partials/content/image.html`.
- An `<img>` element is generated for small images, a `<figure>` element for large images.

### Settings

Set `smallLimit`, `defaultImage`, and `fillImage` in `./config/_default/params.toml`:

```toml
smallLimit = "320"

### Image partial
defaultImage = "default-image.png" # put in `./assets/images/`
fillImage = "1280x720 Center" # normalize image size
```

See also: [Images](http://localhost:1313/docs/recipes/project-configuration/#images)

## Add a local image

Place your local images in a page bundle:

```bash
..
├── blog/
│   ├── say-hello-to-doks/
│   │   ├── index.md
│   │   └── say-hello-to-doks.png
│   └── _index.md
└── _index.md
```

See also the Hugo docs: [Page Bundles](https://gohugo.io/content-management/page-bundles/)

### Example

```md
![Green Sea Turtle Hatchling by Hannah Le Leu](green-sea-turtle-hatchling.webp "A green sea turtle hatchling cautiously surfaces for air, to a sky full of hungry birds.")
```

Will be processed into:

![Green Sea Turtle Hatchling by Hannah Le Leu](green-sea-turtle-hatchling.webp "A green sea turtle hatchling cautiously surfaces for air, to a sky full of hungry birds.")

## Add a remote image

### Example

```md
![Happy Dance by Neil Sanders](https://i.giphy.com/media/hIip12KtxrNU5GG0Ii/giphy.gif?cid=790b7611e72a6d08626c8c4ff1410056fbc51e0ed1f2daab&rid=giphy.gif&ct=s)
```

Will be processed into:

![Happy Dance by Neil Sanders](https://i.giphy.com/media/hIip12KtxrNU5GG0Ii/giphy.gif?cid=790b7611e72a6d08626c8c4ff1410056fbc51e0ed1f2daab&rid=giphy.gif&ct=s)

## Use the image partial

### Example

Add `{{ partial "content/image.html" . }}` to `./layouts/blog/single.html`:

```html
{{ define "main" }}
<div class="row justify-content-center">
  <div class="col-lg-7">
    <article>
      <h1>{{ .Title }}</h1>
      {{ partial "content/image.html" . }}
      {{ .Content }}
    </article>
  </div>
</div>
{{ end }}
```
