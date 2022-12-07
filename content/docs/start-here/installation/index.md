---
title: "Installation"
description: "One page summary of how to start a new Hyas project."
lead: "Ready to install Hyas? Follow our automatic or manual set-up guide to get started."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "installation"
weight: 120
toc: true
---

[Manual Setup &rarr;]({{< ref "manual-setup" >}})

## Prerequisites

- __Node.js__ - `v16.17.0` or higher.
- __Text editor__ - We recommend [VS Code](https://code.visualstudio.com/) with the [Hugo Language and Syntax Support](https://marketplace.visualstudio.com/items?itemName=budparr.language-hugo-vscode) extension.
- Terminal - Hyas is accessed through its command-line interface (CLI).

## Installation

`create-hyas` is the fastest way to start a new Hyas project from scratch. It will walk you through every step of setting up your new Hyas project. It allows you to choose from a few different starter templates or provide your own using the `--template` argument.

{{< alert icon="🚀" >}}
Prefer to try Hyas in your browser? [Browse our themes]({{< ref "themes" >}}) and spin up a new Hyas project without ever leaving your browser.
{{< /alert >}}

## 1. Run the Setup Wizard

Run the following command in your terminal to start our handy install wizard, `create-hyas`.

{{< tabs "create-new-site" >}}
{{< tab "npm" >}}

```bash
npm create hyas@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create hyas@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create hyas
```

{{< /tab >}}
{{< /tabs >}}

You can run `create-hyas` anywhere on your machine, so there’s no need to create a new empty directory for your project before you begin. If you don’t have an empty directory yet for your new project, the wizard will help create one for you automatically.

If all goes well, you should see a “Ready for liftoff!” message followed by some recommended “Next steps”. `cd` into your new project directory to begin using Hyas.

## 2. Install dependencies

If you skipped the `npm install` step during the `create-hyas` wizard, then be sure to install your dependencies before continuing.

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

## 3. Start Hyas ✨

## Next Steps

---

## Start a new Hyas project

Create a new site, change directories, install dependencies, and start development server.

### Create a new site

{{< tabs "create-new-site" >}}
{{< tab "npm" >}}

```bash
npm create hyas@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create hyas
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create hyas
```

{{< /tab >}}
{{< /tabs >}}

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run start
```

Hyas will start the Hugo development webserver accessible by default at `http://localhost:1313`. Saved changes will live reload in the browser.

## Other commands

Hyas comes with commands for common tasks. [Commands →]({{< ref "commands" >}})
