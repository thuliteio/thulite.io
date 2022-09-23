---
title: "Quick Start"
description: "One page summary of how to start a new Hyas project."
lead: "One page summary of how to start a new Hyas project."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "overview"
weight: 120
toc: true
---

## Requirements

- [Git](https://git-scm.com/): latest source release
- [Node.js](https://nodejs.org/) (includes npm): latest LTS version or newer

Hyas uses npm to centralize dependency management, making it easy to update resources, build tooling, plugins, and build scripts.

{{< details "Why Hyas" >}}

Hyas is just super, duh!

{{< /details >}}

## Start a new Hyas project

Create a new site, change directories, install dependencies, and start development server.

### Create a new site

```bash
git clone https://github.com/h-enk/hyas.git my-hyas-site && cd my-hyas-site
```

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
