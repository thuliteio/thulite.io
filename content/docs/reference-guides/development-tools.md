---
title: "Development Tools"
description: "Check styles, scripts, and markdown for errors and fix automatically or manually. Run a server on your LAN. Use the CLI's."
lead: "Check styles, scripts, and markdown for errors and fix automatically or manually. Run a server on your LAN. Use the CLI's."
date: 2020-09-21T14:26:38+02:00
lastmod: 2020-09-21T14:26:38+02:00
draft: false
images: []
menu:
  docs:
    parent: "reference-guides"
weight: 440
toc: true
---

## Linting

See also: [lint](/docs/overview/commands/#lint)

## Development server

Hyas makes the Hugo development webserver accessible by default at `http://localhost:1313`.

### LAN

Update the `start:lan` command in `./package.json` for `--baseURL`.

```bash
npm run start:lan
```

### Netlify DEV

Hyas' `./netlify.toml` excerpt:

```toml
[dev]
  framework = "#custom"
  command = "npm run start"
  targetPort = 1313
  port = 8888
  publish = "public"
  autoLaunch = false
```

See also the Netlify docs: [What is Netlify Dev?](https://cli.netlify.com/netlify-dev)

## Build server

{{< alert icon="💡" text="<a href=\"https://github.com/http-party/http-server\">http-server</a> is a simple zero-configuration command-line http server." />}}

Update the `build:lan` command in `./package.json` for `--baseURL`.

```bash
npm run build:lan
```

## Hyas CLI

See also the Hyas docs:

- [Hyas CLI](/docs/overview/hyas-cli/)

## GitHub CLI

See also the GitHub docs:

- [Take GitHub to the command line](https://cli.github.com/)
- [Manual](https://cli.github.com/manual/)

## Netlify CLI

See also the Netlify docs:

- [Get started with Netlify CLI](https://docs.netlify.com/cli/get-started/)
- [Netlify CLI Command List](https://cli.netlify.com/)
