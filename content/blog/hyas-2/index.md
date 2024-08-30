---
title: "Hyas 2.0"
url: "/blog/hyas-2/"
description: "Hyas 2.0 is a code restructuring release, making Hyas more robust and flexible."
summary: "Hyas 2.0 is a code restructuring release, making Hyas more robust and flexible."
date: 2023-09-01T11:51:15+02:00
lastmod: 2023-09-01T11:51:15+02:00
draft: false
weight: 50
gradient: "orange-yellow" # blue-green(default), blue-purple, orange-yellow, pink-blue, or purple-orange (this setting is only relevant when "images: []")
categories: ["Product"] # E.g. ["Product", "Legal"]
tags: ["Framework", "Hugo", "npm"] # E.g. ["Markdown", "Cheat sheet"]
authors: ["Henk Verlinde"] # E.g. ["Henk Verlinde"]
featured: false # false (default) or true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

We are thrilled to announce Hyas v2.0 — a code restructuring release, making Hyas more robust and flexible.
{.lead}

Hyas' code base is now fully modularized. Main functionalities — for example Images and SEO — are now available as separate Hyas integrations, making them easier to maintain and update. The restructured Hyas makes it easier to build any website you want.

```quote
"Hyas is a web framework designed for speed, security, and SEO — all powered by Hugo and npm."
```

## Key features

- **Hugo powered**: Fast website build times and flexible project organization.
- **Fully npm managed**: Straightforward and easy dependency management.
- **Production-ready**: Optimized for speed, SEO, and security.
- **Customizable**: Tailwind, Images, and other integrations to choose from.
- **Development tools**: Find and fix problems in scripts, styles, and markdown.
- **Deploy anywhere**: Deployment guides to different deployment services.

Check out our detailed [Why Hyas](https://docs.thulite.io/concepts/why-thulite/) breakdown to learn more about what makes Hyas special.

## Get started

Hyas 2.0 is available now on npm. Visit [new.thulite.io](https://new.thulite.io/) to try out Hyas 2.0 in your browser, or run the following command in your terminal to get started with a new project:

{{< tabs "create-new-site" >}}
{{< tab "npm" >}}

```bash
npm create thulite@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create thulite@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create thulite
```

{{< /tab >}}
{{< /tabs >}}

Upgrading an existing project to Hyas 2.0? Check out the [v2.0 Upgrade Guide](https://docs.thulite.io/guides/upgrade-to/v2/).

## New website

To celebrate Hyas v2.0, we kicked off a brand-new redesign of our website: [thulite.io](https://thulite.io/)

{{< img loading="lazy" fetchpriority="auto" src="gethyas.com.jpg" alt="Screenshot homepage gethyas.com" class="border-img mb-3">}}

The new website tells our story better, with a fresh can of paint and a focus on content, performance, and community.

## Acknowledgements

This release wouldn't have been possible without the effort of the amazing open source community. Thank you, everyone.
