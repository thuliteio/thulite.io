---
title: "Pages"
description: "Add a default page or blog post. Customize the homepage and 404 page."
lead: "Add a default page or blog post. Customize the homepage and 404 page."
date: 2020-11-23T11:55:16+01:00
lastmod: 2020-11-23T11:55:16+01:00
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 130
toc: true
---

```bash
..
├── blog/
│   └── _index.md
├── quick-start/
│   └── index.md
└── _index.md
```

See also the Hugo docs: [Content Organization](https://gohugo.io/content-management/organization/).

## Add a default page

### Example

```bash
npm run create about/index.md
```

## Add a blog post

### Example

```bash
npm run create blog/say-hello-to-hyas/index.md
```

## Customize homepage

See: [Page Layouts]({{< ref "page-layouts" >}}).

## Customize 404 page

See: [Page Layouts]({{< ref "page-layouts" >}}).
