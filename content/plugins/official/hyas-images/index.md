---
title: "@hyas/images"
description: "Image render hook + shortcode for Hyas sites."
lead: "Image render hook + shortcode for Hyas sites."
date: 2022-09-20T10:40:37+02:00
lastmod: 2022-09-20T10:40:37+02:00
draft: false
images: []
menu:
  plugins:
    parent: ""
weight: 130
toc: true
github: "https://github.com/h-enk/hyas-images"
npm: "https://www.npmjs.com/package/@hyas/images"
---

## Installation

```bash
npm i @hyas/images -D
```

## Setup

Add to `./config/_default/module.toml`:

```toml
[[mounts]]
  source = "node_modules/@hyas/images/layouts"
  target = "layouts"

[[mounts]]
  source = "layouts"
  target = "layouts"
```

Add to `./config/_default/params.toml`:

```bash
# Images
imageResponsive = true
imageConvertTo = "webp"
imageImageSizes = ["480","720","1080","1280","1600","2048"]
singleSize = false
imageAddClass = "img-fluid lazyload blur-up"
```

## Usage

See the Hyas docs: [Images](https://gethyas.com/docs/recipes/images/)

## Credits

Based on [DFD Hugo image handling module](https://github.com/danielfdickinson/image-handling-mod-hugo-dfd)
