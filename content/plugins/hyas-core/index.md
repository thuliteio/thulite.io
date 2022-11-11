---
title: "@hyas/core"
slug: "hyas-core"
description: "Core templates for Hyas sites."
lead: "Core templates for Hyas sites."
date: 2022-09-20T10:25:08+02:00
lastmod: 2022-09-20T10:25:08+02:00
draft: false
images: []
weight: 110
toc: true
plugins: ["Official", "Core"]
github: "https://github.com/h-enk/hyas-core"
---

## Installation

```bash
npm i @hyas/core -D
```

## Setup

Add to `./config/_default/module.toml`:

```toml
[[mounts]]
  source = "node_modules/@hyas/core/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/@hyas/core/layouts"
  target = "layouts"

[[mounts]]
  source = "assets"
  target = "assets"

[[mounts]]
  source = "layouts"
  target = "layouts"
```

Add to `./config/_default/config.toml`:

```toml
baseurl = "https://hyas.netlify.app/"
canonifyURLs = false
disableAliases = true
disableHugoGeneratorInject = true
disableKinds = ["taxonomy", "term"]
enableEmoji = true
enableGitInfo = false
enableRobotsTXT = true
languageCode = "en-US"
paginate = 7
rssLimit = 10

[outputs]
  home = ["HTML", "RSS"]

[caches]
  [caches.getjson]
    dir = ":cacheDir/:project"
    maxAge = "10s"

[sitemap]
  changefreq = "monthly"
  filename = "sitemap.xml"
  priority = 0.5

[minify.tdewolff.html]
  keepWhitespace = false
```

Add to `./config/_default/params.toml`:

```toml
## Chrome Browser
themeColor = "#fff"

# Feed
copyRight = "Copyright (c) 2020-2021 Henk Verlinde"
```

## Usage

See the Hyas docs: [Quick Start](https://gethyas.com/docs/prologue/quick-start/)
