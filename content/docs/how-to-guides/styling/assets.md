---
title: "Assets"
description: "Customize Hyas SCSS or Hyas JS."
lead: "Customize Hyas SCSS or Hyas JS."
date: 2020-09-21T14:41:53+02:00
lastmod: 2020-09-21T14:41:53+02:00
draft: false
images: []
menu:
  docs:
    parent: "styling"
weight: 341
toc: true
---

```bash
..
├── fonts/
├── images/
├── js/
│   ├── vendor/
│   ├── alert-init.js
│   ├── alert.js
│   ├── app.js
│   └── bootstrap.js
└── scss/
    ├── common/
    ├── components/
    ├── layouts/
    ├── vendor/
    └── app.scss
```

See also the Hugo docs: [Hugo Pipes](https://gohugo.io/hugo-pipes/).

## Customize Hyas SCSS

{{< alert icon="👉" text="Set variables in `./assets/scss/common/_variables.scss`." />}}

See also the Bootstrap code: [Variables](https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss).

### app.scss

```bash
./assets/scss/app.scss
```

```scss
/** Import Bootstrap functions */
@import "bootstrap/scss/functions";

/** Import theme variables */
@import "common/variables";

/** Import Bootstrap */
@import "bootstrap/scss/bootstrap";

/** Import theme styles */
@import "common/fonts";
@import "common/global";
@import "components/alerts";
@import "components/buttons";
@import "components/code";

// @import "components/syntax";
@import "components/comments";
@import "components/forms";
@import "components/images";
@import "layouts/footer";
@import "layouts/header";
@import "layouts/pages";
@import "layouts/posts";
@import "layouts/sidebar";
```

## Customize Hyas JS

### app.js

```bash
./assets/js/app.js
```

```js
// app.js for concatenation of smaller libraryies
// to reduce http requests of small files
'use strict';

// Prefetch in-viewport links during idle time
import { listen } from 'quicklink/dist/quicklink.mjs';
listen();

// lazy sizes for image loading
import 'lazysizes';

// global alert
import './assets/js/alert';
```
