---
title: "Images 2.0: Better Images"
url: "/blog/images-2/"
description: "Images 2.0 is out with new shortcodes and partials, an improved image render hook, and a brand new documentation website."
summary: "Images 2.0 is out with new shortcodes and partials, an improved image render hook, and a brand new documentation website."
date: 2023-12-01T19:09:51+01:00
lastmod: 2023-12-01T19:09:51+01:00
draft: true
weight: 50
gradient: "blue-purple" # blue-green(default), blue-purple, orange-yellow, pink-blue, or purple-orange (this setting is only relevant when "images: []")
categories: ["Integrations"] # E.g. ["Product", "Legal"]
tags: ["Images"] # E.g. ["Markdown", "Cheat sheet"]
authors: ["Henk Verlinde"] # E.g. ["Henk Verlinde"]
featured: false # false (default) or true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Images 2.0 is out with new shortcodes and partials, an improved image render hook, and a brand new documentation website.

- [Shortcodes and partials](#shortcodes-and-partials)
- [Image render hook](#image-render-hook)
- [Documentation site](#documentation-site)

To take advantage of the latest features, make sure you're running the latest version of Images. You can upgrade to Images 2 by running the upgrade command for your package manager of choice:

{{< tabs "update-images" >}}
{{< tab "npm" >}}

```bash
npm install @hyas/images@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade @hyas/images --latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade @hyas/images --latest
```

{{< /tab >}}
{{< /tabs >}}

## Shortcodes and partials

In 2.0 we removed our old image integration, and along with it some existing features we know you were using. We decided to build back better, with a stronger image story that was only getting started.

## Image render hook

## Documentation site

Check:

- [Better Images in Astro](https://astro.build/blog/images/)
- [Astro 3.3: Picture component](https://astro.build/blog/astro-330/)
