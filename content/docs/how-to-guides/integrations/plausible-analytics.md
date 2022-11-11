---
title: "Plausible Analytics"
description: "How to add Plausible Analytics to your Hyas website."
lead: "How to add Plausible Analytics to your Hyas website."
date: 2020-11-17T14:55:51+01:00
lastmod: 2020-11-17T14:55:51+01:00
draft: false
images: []
menu:
  docs:
    parent: "integrations"
weight: 372
toc: true
---

## Installation

```bash
npm install plausible-tracker -D
```

## Usage

Add to `./assets/js/plausible.js`:

```js
import Plausible from 'plausible-tracker'

const { trackPageview } = Plausible({
  domain: 'my-app.com',
})

trackPageview()
```

## Resources

- [Plausible Analytics](https://plausible.io/)
- [plausible/plausible-tracker](https://github.com/plausible/plausible-tracker)
- [Adblockers and using a proxy for analytics](https://plausible.io/docs/proxy/introduction)
