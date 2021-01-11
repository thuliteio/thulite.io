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
    parent: "prologue"
weight: 020
toc: true
---

## Requirement

{{< alert icon="👉" text="Hyas uses Node Package Manager (npm) as a build tool. <a href=\"/blog/\">Read more →</a>" >}}

Make sure [Node.js](https://nodejs.org/) is installed:
- Long Term Support (LTS) release, or
- Current release

## Start a new Hyas project

Create a new site, change directories, install npm packages, and start development server.

### Create a new site

{{< btn-copy text="git clone https://github.com/h-enk/hyas.git my-hyas-site" >}}

```bash
git clone https://github.com/h-enk/hyas.git my-hyas-site
```

### Change directories

{{< btn-copy text="cd my-hyas-site" >}}

```bash
cd my-hyas-site
```

### Install npm packages

{{< btn-copy text="npm install" >}}

```bash
npm install
```

### Start development server

{{< btn-copy text="npm run start" >}}

```bash
npm run start
```

Hyas will start the Hugo development webserver accessible by default at `http://localhost:1313`. Saved changes will live reload in the browser.

## Other commands

Hyas comes with commands for common tasks. [Commands →]({{< ref "commands" >}})
