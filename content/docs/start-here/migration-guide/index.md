---
title: "Migration Guide"
description: "This guide will help you migrate from older versions of Hyas to the latest version."
lead: "This guide will help you migrate from older versions of Hyas to the latest version."
date: 2022-11-25T15:48:57+01:00
lastmod: 2022-11-25T15:48:57+01:00
draft: false
images: []
menu:
  docs:
    parent: ""
weight: 150
toc: true
---

You can update your project's version of Hyas to the latest version using your package manager. If you're using plugins, you'll also want to update those to the latest version.

Update the `gethyas` dependency:

{{< tabs "update-gethyas-dependency" >}}
{{< tab "npm" >}}

```bash
npm upgrade gethyas
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade gethyas
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade gethyas
```

{{< /tab >}}
{{< /tabs >}}

Or, to update all dependencies:

{{< tabs "update-all-dependencies" >}}
{{< tab "npm" >}}

```bash
npm upgrade
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade
```

{{< /tab >}}
{{< /tabs >}}

Read the guide below for major highlights and instructions on how to handle breaking changes.

## Hyas 2.0

Hyas v2.0 introduces some changes that you should be aware of when migrating from v1.x releases. See below for more details.

### Modular setup

Hyas v2.0 is setup modularly, making it flexible and easier to add plugins and themes to your project. The Hyas packages:

- [gethyas](https://github.com/h-enk/hyas)
- [create-hyas](https://github.com/gethyas/create-hyas)
- [@hyas/core](https://github.com/h-enk/hyas-core)
- [@hyas-seo](https://github.com/h-enk/hyas-seo)
- [@hyas-images](https://github.com/h-enk/hyas-images)
- [@hyas/themes-starter-bootstrap](https://github.com/h-enk/hyas-themes-starter-bootstrap)
- [@hyas/themes-doks](https://github.com/h-enk/hyas-themes-doks)
{.list-package}

### Migrate from v1.5.x

First, replace the "scripts" section of your `package.json` with the following:

```bash
  "scripts": {
    "predev": "npm run clean:build",
    "dev": "exec-bin node_modules/.bin/hugo/hugo server --gc --bind=0.0.0.0 --disableFastRender --baseURL=http://localhost",
    "create": "exec-bin node_modules/.bin/hugo/hugo new",
    "check": "npm run check:scripts && npm run check:styles && npm run check:markdown",
    "check:scripts": "eslint config",
    "check:styles": "stylelint \"assets/scss/**/*.{css,sass,scss}\"",
    "check:markdown": "markdownlint-cli2 \"*.md\" \"content/**/*.md\"",
    "fix:markdown": "markdownlint-cli2-fix \"*.md\" \"content/**/*.md\"",
    "test": "npm run check",
    "prebuild": "npm run clean:build",
    "build": "exec-bin node_modules/.bin/hugo/hugo --gc --minify",
    "preview": "http-server --gzip --brotli --ext=html --cors",
    "clean": "npm run clean:build && npm run clean:install",
    "clean:build": "shx rm -rf public resources .hugo_build.lock",
    "clean:install": "shx rm -rf package-lock.json yarn.lock pnpm-lock.yaml node_modules",
    "preinfo": "npm version",
    "info": "npm list",
    "postinfo": "exec-bin node_modules/.bin/hugo/hugo version",
    "postinstall": "shx rm -rf node_modules/.bin/hugo && shx mkdir node_modules/.bin/hugo && shx cp node_modules/gethyas/node_modules/.bin/hugo/* node_modules/.bin/hugo"
  },
```

Next, remove the "otherDependencies" section of your `package.json`, and replace the "devDependencies" section with the following:

```bash
  "devDependencies": {
    "@hyas/images": "^0.3.2",
    "@hyas/seo": "^0.1.2",
    "@popperjs/core": "^2.11.6",
    "bootstrap": "^5.2.2",
    "gethyas": "^2.0.2"
  }
```

Then, add an `.npmrc` file to your project root with the following:

```bash
enable-pre-post-scripts = true
auto-install-peers = true
node-linker = hoisted
prefer-symlinked-executables = false
```

Finally, install the Hyas project dependencies inside your project.

{{< tabs "install-dependencies" >}}
{{< tab "npm" >}}

```bash
npm install
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn install
```

{{< /tab >}}
{{< /tabs >}}

In addition, you might also want to check your configuration files against the ones of the [full control variant of the Boostrap starter](https://github.com/gethyas/create-hyas/tree/main/template-bs-starter-full-control).
