---
title: "Hyas CLI"
description: "Hyas command line tool."
lead: "Hyas command line tool."
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
Hyas command line tool

Usage: hyas <command> [options]

Commands:
  create <dir> [theme]  Create a new Hyas project
  start                 Start local development server
  build                 Build production website
  clean                 Delete temporary directories
  check                 Check local environment

Options:
  -h, --help     Show help for command                                 [boolean]
  -v, --version  Show @hyas/cli version                                [boolean]

Learn more:
  Use 'hyas <command> --help' for more information about a command.
  Read the manual at https://gethyas.com/hyas-cli
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

## Usage

```bash
hyas <command> [options]
```

## Commands

### Create

Create a new Hyas project:

```bash
hyas create <dir> [theme]
```

| Arguments | Description |
| - | - |
| `dir` | Name of the directory to create the project in |
| `theme` | Name of the Hyas theme to use |
| `-s, --starter` | Use starter theme (default: use child theme) |

#### Examples

##### Create a Hyas site

Using the child theme:

```bash
hyas create my-hyas-site
```

Using the starter theme:

```bash
hyas create my-hyas-site -s
```

##### Create a Doks site

Using the child theme:

```bash
hyas create my-doks-site doks
```

Using the starter theme:

```bash
hyas create my-doks-site doks -s
```

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

You’ll get notified when an update is available:

```bash
Update available 0.3.8 → 0.3.9
Run npm i -g @hyas/cli to update
```
