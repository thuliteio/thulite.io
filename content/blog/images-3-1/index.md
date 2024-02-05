---
title: "Images 3.1"
url: "/blog/images-3-1/"
description: "Images 3.1 is out — new shortcodes and partials, an improved image render hook, and a new documentation website."
summary: "Images 3.1 is out —  new shortcodes and partials, an improved image render hook, and a new documentation website."
date: 2024-02-02T08:03:57+01:00
lastmod: 2024-02-02T08:03:57+01:00
draft: true
weight: 50
gradient: "" # blue-green(default), blue-purple, orange-yellow, pink-blue, or purple-orange (this setting is only relevant when "images: []")
categories: ["Product", "Integrations"] # E.g. ["Product", "Legal"]
tags: ["Images", "Hugo", "npm"] # E.g. ["Markdown", "Cheat sheet"]
authors: ["Henk Verlinde"] # E.g. ["Henk Verlinde"]
featured: false # false (default) or true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Images 3.1 is out —  new shortcodes and partials, an improved image render hook, and a new documentation website.
{.lead}

## Highlights

- [Shortcodes and partials](#shortcodes-and-partials)
- [Image render hook](#image-render-hook)
- [Documentation website](#documentation-website)

## Get started

To take advantage of the latest features, make sure you're running the latest version of Images. You can upgrade to Images 3 by running the following command for your package manager of choice:

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

## Documentation website

To celebrate Images v3.1, we kicked off a brand-new redesign of our website: [gethyas.com](https://gethyas.com/)

{{< img loading="lazy" fetchpriority="auto" src="images.gethyas.com.jpg" alt="Screenshot homepage images.gethyas.com" class="border-img mb-3">}}

The new website tells our story better, with a fresh can of paint and a focus on content, performance, and community.

## Acknowledgements

This release wouldn't have been possible without the effort of the amazing open source community. Thank you, everyone.
