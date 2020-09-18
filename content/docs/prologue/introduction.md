---
title: "Introduction"
description: "Introduction Hyas."
lead: "Hyas is a Hugo starter helping you build modern websites that are secure, fast, and SEO-ready — by default."
date: 2020-04-17T08:48:57+00:00
lastmod: 2020-04-17T08:48:57+00:00
draft: false
images: []
menu: 
  docs:
    parent: "prologue"
weight: 010
toc: true
---

## Why Hyas?

- Lightweight code base
- 100 scores [Google Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?gist=e45b7560a228939b8e7362288844249b)
- A+ scores [Mozilla Observatory](https://observatory.mozilla.org/analyze/hyas.netlify.app)
- Easily make it your own
- [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/download/#source-files) Sass (no JavaScript) and [Autoprefixer](https://github.com/postcss/autoprefixer)
- Check SCSS for errors with [stylelint](https://stylelint.io/)
- Check JavaScript for errors with [ESLint](https://eslint.org/)
- Environment specific configuration
- Image shortcode with [lazysizes](https://github.com/aFarkas/lazysizes) and blur up
- Fingerprinting and [SRI](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) (production)
- Remove unused CSS (production) with [PurgeCSS](https://github.com/FullHuman/purgecss)

👉 See a working example at [hyas.netlify.app](https://hyas.netlify.app/)

## Prerequisites

Make sure all dependencies have been installed:

- [Hugo](https://gohugo.io/) >= 0.73.0/extended
- [Node.js](https://nodejs.org/) >= 13.11.0
- [Yarn](https://yarnpkg.com/) >= 1.22.4 (recommended)

## Get started

Create a new Hyas project:

```bash
git clone git@github.com:h-enk/hyas.git my-hyas-site
```

Install dependencies:

```bash
yarn install
```

Build development theme with live reloading and injection:

```bash
yarn start
```

### Other commands

- `yarn lint:styles` - Check Sass for errors
- `yarn lint:scripts` - Check JavaScript for errors
- `yarn lint:markdown` - Check Markdown for errors
- `yarn clean` - Delete temporary directories
- `yarn build` - Build production theme

## Quick start

Click the Deploy to Netlify button:

<a class="btn btn-primary btn-sm px-3" href="https://app.netlify.com/start/deploy?repository=https://github.com/h-enk/hyas" role="button" target="_blank" rel="noopener">Deploy to Netlify</a>

<!--
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/h-enk/hyas "Deploy to Netlify")
-->

## Alternatives

- [Atlas](https://github.com/indigotree/atlas). Hyas is based on Atlas.
