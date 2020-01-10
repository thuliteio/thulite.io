---
title: "Introduction"
description: ""
lead: "Hyas is a Hugo boilerplate helping you build fast, robust, and adaptable websites."
date: 2020-01-07T16:23:23+01:00
draft: false
images: ["image-hyas.jpg"]
menu: 
  docs:
    parent: "prologue"
weight: 010
toc: true
---

## Why Hyas?
- Bootstrap Sass (no JavaScript) and Autoprefixer
- Check Sass and JavaScript for errors
- Environment specific configuration
- Image shortcode with [lazysizes](https://github.com/aFarkas/lazysizes) and [blur up](https://github.com/aFarkas/lazysizes/tree/master/plugins/blur-up) plugin
- Fingerprinting and [SRI](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) (production)
- Remove unused CSS (production)

## Prerequisites
Make sure all dependencies have been installed:

- Hugo >= 0.62.2/extended
- Node.js >= 10.16.0
- npm >= 6.9.0
- Yarn >= 1.21.1 (recommended)

## How to install
Create a new Hyas project:

```bash
$ git clone git@github.com:h-enk/hyas.git my-hyas-site
```

Install dependencies:

```bash
# @ my-hyas-site/
$ yarn install
```

Build development theme with live reloading and injection:

```bash
# @ my-hyas-site/
$ yarn start
```

### Other commands
- `yarn lint:styles` - Check Sass for errors
- `yarn lint:scripts` - Check JavaScript for errors
- `yarn clean` - Delete temporary directories
- `yarn build` - Build production theme

## Alternatives
- [Atlas](https://github.com/indigotree/atlas). 