---
title: "SEO 2.2"
url: "/blog/seo-2-2/"
description: "SEO 2.2 is here — improved favicons generation, several bug fixes, and a new documentation website."
summary: "SEO 2.2 is here — improved favicons generation, several bug fixes, and a new documentation website."
date: 2024-03-18T11:09:01+01:00
lastmod: 2024-03-18T11:09:01+01:00
draft: false
weight: 50
gradient: "" # blue-green(default), blue-purple, orange-yellow, pink-blue, or purple-orange (this setting is only relevant when "images: []")
categories: ["Product", "Integrations"] # E.g. ["Product", "Legal"]
tags: ["SEO", "Hugo", "npm"] # E.g. ["Markdown", "Cheat sheet"]
authors: ["Henk Verlinde"] # E.g. ["Henk Verlinde"]
featured: false # false (default) or true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

SEO 2.2 is here — improved favicons generation, several bug fixes, and a new documentation website.
{.lead}

## Highlights

- Improved [favicons](#favicons) generation 🚀
- New [documentation website](#documentation-website).
- Several [bug fixes](#bug-fixes).

## Get started

To take advantage of the latest features, make sure you're running the latest version of SEO and have updated the [parameters](https://seo.thulite.io/docs/start-here/customizing-seo/#update-parameters). You can upgrade to SEO 2.2 by running the following command for your package manager of choice:

{{< tabs "update-seo" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/seo@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade @thulite/seo --latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade @thulite/seo --latest
```

{{< /tab >}}
{{< /tabs >}}

## Favicons

Add a `png` favicon file (and optionally an `svg` favicon file) to your `assets` directory, and Hyas SEO generates all necessary files and meta tags — for example:

```html
<link rel="icon" href="/favicon.ico" sizes="32x32" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" type="image/png" />
<link rel="icon" href="/favicon-192x192.png" sizes="192x192" type="image/png" />
<link rel="icon" href="/favicon-512x512.png" sizes="512x512" type="image/png" />
<link rel="manifest" href="/manifest.webmanifest" />
```

Hyas SEO also generates a `manifest.webmanifest` file. Read more about [favicons](https://seo.thulite.io/docs/built-ins/favicons/) in our documentation.

## Documentation website

To better explain the possibilities of the Hyas SEO integration, we launched a new documentation website: [seo.thulite.io](https://seo.thulite.io/).

{{< img loading="lazy" fetchpriority="auto" src="seo.gethyas.com.png" alt="Screenshot homepage seo.gethyas.com" class="border-img mb-3">}}

The new website contains handy how-to-guides and reference guides.

## Bug Fixes

Several bug fixes are included in this release. Check out the [release notes](https://github.com/thuliteio/seo/releases/tag/v2.2.0) to learn more.

## Acknowledgements

This release wouldn’t have been possible without the effort of the amazing open source community. Thank you, everyone.
