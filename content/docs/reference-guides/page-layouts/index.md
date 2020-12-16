---
title: "Page Layouts"
description: "Build pages with a landing page, blog, or documentation layout. Add custom sections and components to suit your needs."
lead: "Build pages with a landing page, blog, or documentation layout. Add custom sections and components to suit your needs."
date: 2020-11-10T11:38:43+01:00
lastmod: 2020-11-10T11:38:43+01:00
draft: false
images: []
menu:
  docs:
    parent: "reference-guides"
weight: 380
toc: true
---

## Default structure

See also: `./layouts/_default/baseof.html`

### Sections

{{< img-simple src="landing-page-layout.png" alt="Landing page layout" class="border rounded p-1" >}}

See also the Bootstrap documentation: [Layout](https://getbootstrap.com/docs/4.5/layout/overview/)

### Components

See the Bootstrap documentation: [Components](https://getbootstrap.com/docs/4.5/components/alerts/)

## Landing page

The homepage and 404 page have a landing page layout.

### Example

`./layouts/index.html` excerpt:

```html
{{ define "sidebar-prefooter" }}
<section class="section section-sm">
  <div class="container">
    <div class="row justify-content-center text-center mt-lg-3">
      <div class="col-lg-5">
        <h2 class="h4">Full text search</h2>
        <p>Search your Hyas site with FlexSearch. Easily customize index settings and search options to your liking.</p>
      </div>
      <div class="col-lg-5">
        <h2 class="h4">Page layouts</h2>
        <p>Build pages with a landing page, blog, or documentation layout. Add custom sections and components to suit your needs.</p>
      </div>
      <div class="col-lg-5">
        <h2 class="h4">Dark mode</h2>
        <p>Switch to a low-light UI with the click of a button. Change colors with variables to match your branding.</p>
      </div>
    </div>
  </div>
</section>
{{ end }}
```

### Alert homepage

The homepage contains an alert component.

{{< alert icon="👉" text="Set `alert` and `alertText` in `./config/_default/params.toml`." >}}

## Blog page

### Example

`./layouts/blog/single.html`:

```html
{{ define "main" }}
<div class="row justify-content-center">
  <div class="col-md-12 col-lg-10 col-xl-8">
    <article>
      <div class="blog-header">
        <h1>{{ .Title }}</h1>
        {{ partial "main/blog-meta.html" . }}
      </div>
      <p class="lead">{{ .Params.lead | safeHTML }}</p>
      {{ .Content }}
    </article>
  </div>
</div>
{{ end }}
```
