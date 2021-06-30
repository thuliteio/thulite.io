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
aliases: [/hyas-cli/]
---

```bash
$ hyas -h
Hyas command line tool

Usage: hyas <command> [options]

Commands:
  create [dir]   Create a new Hyas project
  start          Start local development server
  build          Build production website
  add [file]     Add content file
  clean          Delete temporary directories
  lint [source]  Check for errors
  check          Check local environment

Options:
  -h, --help     Show help for command                                 [boolean]
  -v, --version  Show @hyas/cli version                                [boolean]

Learn more:
  Use 'hyas <command> --help' for more information about a command.
  Read the manual at https://gethyas.com/hyas-cli
```

## Installation

Install the [Hyas CLI](https://www.npmjs.com/package/@hyas/cli) globally:

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
hyas create [options]
```

| Arguments | Description | Default |
| - | - | - |
| `dir` | Directory to create the project in | `my-hyas-site`|
| `-c, --child` | Use child theme | Use starter theme |
| `-t, --theme` | Hyas theme to use (e.g. `--theme=doks`)| No Hyas theme|

#### Examples

##### Create a Hyas project

Create a Hyas project in `my-hyas-site` using the starter theme:

```bash
hyas create my-hyas-site
```

Create a Hyas project in `my-hyas-site` using the child-theme:

```bash
hyas create my-hyas-site --child
```

##### Create a Doks project

Create a Doks project in `my-hyas-site` using the starter theme:

```bash
hyas create my-hyas-site --theme=doks
```

Create a Doks project in `my-hyas-site` using the child-theme:

```bash
hyas create my-hyas-site --theme=doks --child
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
Update available 0.4.1 → 0.4.2
Run npm i -g @hyas/cli to update
```
