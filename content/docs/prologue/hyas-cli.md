---
title: "Hyas CLI"
description: "Work seamlessly with Hyas from the command line."
lead: "Work seamlessly with Hyas from the command line."
date: 2020-09-22T08:38:48+02:00
lastmod: 2020-09-22T08:38:48+02:00
draft: false
images: []
menu:
  docs:
    parent: "prologue"
weight: 040
toc: true
---

```bash
Work seamlessly with Hyas from the command line.

Usage: hyas <command> [options]

Commands:
  create [dir]  Create a new Hyas project
  start         Start local development server
  build         Build production website
  clean         Delete temporary directories
  check         Check local environment

Options:
  -h, --help     Show help for command                                 [boolean]
  -v, --version  Show @hyas/cli version                                [boolean]

Learn more:
  Use 'hyas <command> --help' for more information about a command.
  Read the manual at https://cli.gethyas.com
```

## Installation

Install the [Hyas CLI](https://www.npmjs.com/package/@hyas/cli) globally:

{{< btn-copy text="npm install -g @hyas/cli" >}}

```bash
npm install -g @hyas/cli
```

## npx

Or use [npx](https://nodejs.dev/learn/the-npx-nodejs-package-runner):

```bash
npx @hyas/cli <command> [options]
```

## Commands

### Create

Create a new Hyas project:

```bash
hyas create [dir]
```

| Options | Description |
| - | - |
| `[dir]` | Directory to create the project in |
| `[-t, --theme]` | Use a Hyas theme, e.g. `--theme=doks` |
| `[-s, --starter]` | Use the starter theme, i.s.o. the child theme |

#### Examples

| Command | Description |
| - | - |
| `hyas create` | Create Hyas project in `my-hyas-site` using the child theme |
| `hyas create --starter` | Create Hyas project in `my-hyas-site` using the starter theme |
| `hyas create new-site` | Create Hyas project in `new-site` using the child theme |
| `hyas create new-site --starter` | Create Hyas project in `new-site` using the starter theme |
| `hyas create new-site --theme=doks` | Create Doks project in `new-site` using the child theme |
| `hyas create new-site --theme=doks --starter` | Create Doks project in `new-site` using the starter theme |

### Start

Start local development server:

```bash
hyas start
```

### Build

Build production website:

```bash
hyas build
```

### Clean

Delete temporary directories:

```bash
hyas clean
```

### Check

Check local environment:

```bash
hyas check
```

## Options

### -h, --help

Show help for command.

### -v, --version

Show @hyas/cli version.

## Update

You'll get notified when an update is available:

```bash
   ╭──────────────────────────────────────╮
   │                                      │
   │   Update available 0.3.6 → 0.3.7     │
   │   Run npm i -g @hyas/cli to update   │
   │                                      │
   ╰──────────────────────────────────────╯
```
