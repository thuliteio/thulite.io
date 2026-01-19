+++
title = 'Thulite CLI 2.0'
url = "/blog/thulite-cli-2-0/"
description = 'Thulite CLI 2.0 adds improved interactive and non-interactive modes, instant install/start, and a streamlined project setup experience.'
summary = 'Thulite CLI 2.0 adds improved interactive and non-interactive modes, instant install/start, and a streamlined project setup experience.'
date = 2026-01-19T12:11:30+01:00
lastmod = 2026-01-19T12:11:32+01:00
draft = false
weight = 50
categories = ["Tools"] # E.g. ["Product", "Legal"]
tags = [] # E.g. ["Markdown", "Cheat sheet"]
authors = ["Henk Verlinde"] # E.g. ["Henk Verlinde"]

[params.seo]
  title = "" # custom title (optional)
  description = "" # custom description (recommended)
  canonical = "" # custom canonical URL (optional)
  robots = "" # custom robot tags (optional)
+++

Thulite CLI 2.0 is now available! This release brings improved control over project scaffolding, instant install/start options, and a smoother setup experience.

## Highlights

- Install dependencies and start dev automatically
- Force interactive or non-interactive mode
- Immediate setup with no prompts

## Get started

Install with your favorite package manager:

{{< tabs "create-thulite" >}}
{{< tab "npm" >}}

```bash
npm create thulite@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create thulite
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create thulite
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun create thulite
```

{{< /tab >}}
{{< /tabs >}}

## Install dependencies and start dev

Quickly scaffold a new project, install dependencies, and start the dev server:

```bash
npm create thulite@latest

> npx
> create-thulite

│
◇  Project name:
│  thulite-project
│
◇  Select a template:
│  Doks theme
│
◇  Select a variant:
│  With recommended integrations (SEO and Images)
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /home/h-enk/thulite-project...
│
◇  Installing dependencies with npm...
│
◇  Starting dev server...
```

Follow the prompts to set up your project and start development instantly.

## Interactive

Use the `--interactive` flag to get a guided, step-by-step setup. All options are prompted, even if you provide arguments:

```bash
npm create thulite@latest my-doks-site -- --template doks --interactive
```

Great for exploring options and customizing your project.

## Non-interactive

Skip all prompts with `--no-interactive`. The CLI uses your arguments or sensible defaults:

```bash
npm create thulite@latest my-doks-site -- --template doks --no-interactive
```

Perfect for automation, CI/CD, or scripting.

## Immediate

Use `--immediate` to install dependencies and start the dev server right after scaffolding:

```bash
npm create thulite@latest my-doks-site -- --template doks --immediate
```

No further prompts—just instant setup and launch.

## Acknowledgements

This CLI is based on [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite).
