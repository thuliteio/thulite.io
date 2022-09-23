---
title: "@hyas/seo"
description: "SEO templates for Hyas sites."
lead: "SEO templates for Hyas sites."
date: 2022-09-20T10:40:26+02:00
lastmod: 2022-09-20T10:40:26+02:00
draft: false
images: []
menu:
  plugins:
    parent: ""
weight: 120
toc: true
github: "https://github.com/h-enk/hyas-seo"
npm: "https://www.npmjs.com/package/@hyas/seo"
---

## Installation

```bash
npm i @hyas/seo -D
```

## Setup

Add to `./config/_default/module.toml`:

```toml
[[mounts]]
  source = "node_modules/@hyas/seo/layouts"
  target = "layouts"

[[mounts]]
  source = "layouts"
  target = "layouts"
```

Add to `./config/_default/params.toml`:

```bash
## Homepage
title = "Hyas"
titleSeparator = "-"
titleAddition = "Modern Hugo Starter"
description = "Hyas is a Hugo starter helping you build modern websites that are secure, fast, and SEO-ready — by default."

## Open Graph
images = ["hyas.png"]
ogLocale = "en_US"
titleHome = "Hyas Hugo Starter"

## Twitter Cards
twitterSite = "@gethyas"
twitterCreator = "@henkverlinde"

## JSON-LD
# schemaType = "Person"
schemaType = "Organization"
schemaName = "Hyas"
schemaAuthor = "Henk Verlinde"
schemaAuthorTwitter = "https://twitter.com/henkverlinde"
schemaAuthorLinkedIn = "https://www.linkedin.com/in/henkverlinde/"
schemaAuthorGitHub = "https://github.com/h-enk"
schemaLocale = "en-US"
schemaLogo = "logo-hyas.png"
schemaLogoWidth = 512
schemaLogoHeight = 512
schemaImage = "hyas.png"
schemaImageWidth = 1280
schemaImageHeight = 640
schemaTwitter = "https://twitter.com/gethyas"
schemaLinkedIn = ""
schemaGitHub = "https://github.com/h-enk/hyas"
```

## Usage

See the Hyas docs: [SEO](https://gethyas.com/docs/reference-guides/seo/)

## Credits

Structured data setup is based on [Schema.org](https://developer.yoast.com/features/schema/overview/) approach by Yoast SEO.
