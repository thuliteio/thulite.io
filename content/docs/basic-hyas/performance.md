---
title: "Performance"
description: "Get 100 scores on Google Lighthouse by default. Hyas removes unused css, prefetches links, and lazy loads images."
lead: "Get 100 scores on <a href=\"https://googlechrome.github.io/lighthouse/viewer/?gist=e45b7560a228939b8e7362288844249b\" target=\"_blank\" rel=\"noopener\">Google Lighthouse</a> by default. Hyas removes unused css, prefetches links, and lazy loads images."
date: 2020-09-17T15:37:44+02:00
lastmod: 2020-09-17T15:37:44+02:00
draft: false
images: []
menu: 
  docs:
    parent: "basic-hyas"
weight: 130
toc: true
---

## Unused CSS removal

_Note: `./config/postcss.config.js` contains [purgecss](https://github.com/FullHuman/purgecss) and [purgecss-whitelister](https://github.com/qodesmith/purgecss-whitelister) settings_.

Defaults:

```js
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',      
      ],
      whitelist: [
        'lazyloaded',
        ...whitelister([
          './assets/scss/components/_syntax.scss',
          './assets/scss/components/_code.scss',
        ]),
      ],
    }),
  ],
}
```

⚠️ Consult the PurgeCSS Docs for customizing [configuration options](https://purgecss.com/configuration.html).

## Asset minification

Hyas uses [Hugo](https://gohugo.io/hugo-pipes/minification/) to minify CSS, JS and HTML.

## Link prefetching

Hyas uses [instant.page](https://instant.page/) with default settings for link prefetching. By default, instant.page preloads 65 ms after hovering a link and when a mobile user starts touching their display.

⚠️ Consult the instant.page Docs for customizing [options](https://instant.page/intensity).


## Lazy loading images

Hyas uses [lazysizes](https://github.com/aFarkas/lazysizes) with a Low Quality Image Placeholder (LQIP) to lazyload images added with the [image shortcode]({{< ref "deployment/#indexredirects" >}}). The LQIP is blurred with a CSS filter.
