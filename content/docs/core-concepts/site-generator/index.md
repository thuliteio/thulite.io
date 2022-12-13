---
title: "Site Generator"
description: ""
lead: "Hyas installs Hugo locally in your project."
date: 2022-11-25T15:50:41+01:00
lastmod: 2022-11-25T15:50:41+01:00
draft: false
images: []
menu:
  docs:
    parent: "core-concepts"
weight: 320
toc: true
---

## Hugo

[Hugo](https://gohugo.io/) is one of the most popular static site generators. In the world of web development we usually choose [npm](https://www.npmjs.com/) as our dependency management solution. Hugo, however, is written in [Go](https://go.dev/) - and thus not integrated into the npm module ecosystem. Instead, users are asked to install Hugo globally on their systems.

By doing so however, your project users could be using _different_ Hugo versions. However, if Hugo is installed _locally_ in your project, your project users will always use the _same_ Hugo version.

## Hugo Installer

[Hyas](https://github.com/h-enk/hyas) uses [Hugo Installer](https://github.com/dominique-mueller/hugo-installer) to install Hugo locally in your project. It's a small Node.js script which you can use to fetch the correct Hugo binary for your system, e.g. via a `postinstall` hook within a `package.json` file.

Features include:

- Compatible with all operating systems and system architectures (Windows, MacOS, Linux, ..., CI/CD)
- Supports all Hugo versions, including extended version
- Verifies checksum & runs health check when installing
- Recognizes already downloaded binaries
{.list-star}

## Resources

- [hugo-installer](https://github.com/dominique-mueller/hugo-installer)
{.list-books}

## Credits

The text on this page is (heavily) based on the [What it does](https://github.com/dominique-mueller/hugo-installer#what-it-does) section of Hugo Installer's README.md.
