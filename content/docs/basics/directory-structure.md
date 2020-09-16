---
title: "Directory Structure"
description: "Directory Structure Hyas."
lead: ""
date: 2020-04-20T14:14:16+02:00
lastmod: 2020-04-20T14:14:16+02:00
draft: false
images: []
menu: 
  docs:
    parent: "basics"
weight: 110
toc: true
---

A basic Hyas project would be structured like this:

```bash
.
├── archetypes/
├── assets/
├── config/
├── content/
├── data/
├── layouts/
├── static/
├── .eslintignore
├── .eslintrc.json
├── .stylelintignore
├── .stylelintrc.json
├── netlify.toml
└── package.json
```

## Root directories

See also the Hugo docs: [Directory Structure](https://gohugo.io/getting-started/directory-structure/).

### archetypes

```bash
..
├── default.md
└── news.md
```

### assets

```bash
..
├── fonts/
├── images/
├── js/
│   ├── vendor/
│   └── app.js
├── lambda/
└── scss/
    ├── common/
    ├── components/
    ├── layouts/
    ├── vendor/
    └── app.scss
```

### config

```bash
..
├── _default/
│   ├── config.toml
│   ├── menus.toml
│   └── params.toml
├── production/
│   ├── config.toml
│   └── params.toml
├── staging/
│   ├── config.toml
│   └── params.toml
└── postcss.config.js
```

### content

```bash
..
├── news/
├── quick-start/
└── _index.md
```

### data

```bash
..
└── .gitkeep
```

### layouts

```bash
..
├── _default/
│   ├── baseof.html
│   ├── list.html
│   └── single.html
├── partials/
│   ├── footer
│   │   ├── footer.html
│   │   └── script-footer.html
│   ├── head
│   │   ├── favicons.html
│   │   ├── head.html
│   │   ├── resource-hints.html
│   │   ├── script-header.html
│   │   ├── seo.html
│   │   ├── structured-data.html
│   │   └── stylesheet.html
│   └── header
│       └── header.html
├── shortcodes/
│   └── img.html
├── 404.html
├── index.headers
├── index.html
├── index.redirects
├── robots.txt
├── rss.xml
└── sitemap.xml
```

### static

Contains static content to be copied over as is (no modification), like e.g. favicons and `site.webmanifest`. See also the Hugo docs: [Static Files](https://gohugo.io/content-management/static-files/)

## Root files

### .eslintignore

Indicates which paths should be omitted from linting. See the ESLint docs: [Ignoring Files and Directories](https://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories).

### .eslintrc.json

ESLint configuration file. See the ESLint docs: [Configuring ESLint](https://eslint.org/docs/user-guide/configuring).

### .stylelintignore

Indicates which paths should be omitted from linting. See the stylelint docs: [Ignoring code](https://stylelint.io/user-guide/ignore-code).

### .stylelintrc.json

Stylelint configuration file. See the stylelint docs: [Configuration](https://stylelint.io/user-guide/configure).

### netlify.toml

Netlify configiration file. See the Netlify docs: [File-based configuration](https://docs.netlify.com/configure-builds/file-based-configuration/).

### package.json

Node.js dependencies and scripts.
