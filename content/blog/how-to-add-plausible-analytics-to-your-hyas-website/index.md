---
title: "How to Add Plausible Analytics to Your Hyas Website"
description: ""
lead: ""
date: 2022-10-05T12:29:45+02:00
lastmod: 2022-10-05T12:29:45+02:00
draft: false
weight: 40
images: []
categories: ["Guides"]
tags: ["Analytics"]
authors: ["Henk Verlinde"]
featured: true
---

## Installation

```bash
npm install plausible-tracker -D
```

## Usage

Create `./assets/js/plausible.js`:

```js
import Plausible from 'plausible-tracker'

const { trackPageview } = Plausible({
  domain: 'my-app.com',
})

trackPageview()
```

Add to `./assets/js/app.js`:

```js
// Import Plausible Analytics Tracker
import 'js/plausible.js';
```

In `./netlify.toml`, add to `connect-src` of `Content-Security-Policy`: `https://plausible.io/api/event`.

## Resources

- [Plausible Analytics Tracker](https://github.com/plausible/plausible-tracker)
- [Plausible Analytics](https://plausible.io/)
