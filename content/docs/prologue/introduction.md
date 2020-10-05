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

Six reasons why you should use Hyas.

### Security aware
Get A+ scores on [Mozilla Observatory](https://observatory.mozilla.org/analyze/hyas.netlify.app) out of the box. Easily change the default Security Headers to suit your needs.

See also: [Security]({{< ref "security" >}})

### Fast by default
Get 100 scores on [Google Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?gist=8b7aec005ae7b9e128ad5c4e2f125fea) by default. Hyas removes unused css, prefetches links, and lazy loads images.

See also: [Performance]({{< ref "performance" >}})

### SEO-ready

Use sensible defaults for structured data, open graph, and Twitter cards. Or easily change the SEO settings to your liking.

See also: [SEO]({{< ref "seo" >}})

### Development tools

Code with confidence. Check styles, scripts, and markdown for errors and fix automatically or manually.

See also: [Development Tools]({{< ref "development-tools" >}})

### Bootstrap framework

Build robust, flexible, and intuitive websites with Bootstrap. Or use any other front-end framework if you prefer.

See also: [Bootstrap]({{< ref "bootstrap" >}})

### Netlify-ready

Deploy to Netlify with sensible defaults. Easily use Netlify Functions, Netlify Redirects, and Netlify Headers.

See also: [Netlify]({{< ref "netlify" >}})

## Prerequisites

Make sure all dependencies have been installed:

- [Hugo](https://gohugo.io/) >= 0.75.1/extended
- [Node.js](https://nodejs.org/) >= 14.12.0
- [Yarn](https://yarnpkg.com/) >= 1.22.5 (recommended)

## Get started

Create a new Hyas project:

{{< btn-copy text="git clone git@github.com:h-enk/hyas.git my-hyas-site" >}}

```bash
git clone git@github.com:h-enk/hyas.git my-hyas-site
```

Install dependencies:

{{< btn-copy text="yarn install" >}}

```bash
yarn install
```

Build development theme with live reloading and injection:

{{< btn-copy text="yarn start" >}}

```bash
yarn start
```

### Other commands

- `yarn lint:styles` - Check Sass for errors
- `yarn lint:scripts` - Check JavaScript for errors
- `yarn clean` - Delete temporary directories
- `yarn build` - Build production theme

## Quick start

Get your Hyas site in 1 min.

<a class="btn btn-primary btn-sm px-3" href="https://app.netlify.com/start/deploy?repository=https://github.com/h-enk/hyas" role="button">Deploy to Netlify</a>

<!--
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/h-enk/hyas "Deploy to Netlify")
-->

## Example site

👉 [hyas.netlify.app](https://hyas.netlify.app/)
