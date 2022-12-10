---
title: "npm"
description: ""
lead: ""
date: 2022-11-25T15:50:49+01:00
lastmod: 2022-11-25T15:50:49+01:00
draft: true
images: []
menu:
  docs:
    parent: "core-concepts"
weight: 330
toc: true
---

[npm](https://www.npmjs.com/) is the default dependency manager for [Node.js](https://nodejs.org/) used by millions of developers. Your first question is most likely _"what is a dependency manager and why do I need one?"_.

Almost any code you write probably ends up depending on 3rd party libraries. All of these libraries (projects, frameworks, files, etc) become _dependencies_ of your project. npm lets you declare the dependencies for a project and it will install and manage them.

If you’ve used [Composer](https://getcomposer.org/) for PHP, [Bundler](https://bundler.io/) for Ruby, or [pip](https://pip.pypa.io/en/latest/) for Python, then you’ve already used a dependency manager.

All these tools deal with _packages_. Every dependency is also a package. What makes a package? It can be a local file, local folder, remote zip, local Git repository, remote Git repository, GitHub repository, etc.

Most dependency managers also include a global registry of available packages. For npm, this is the [npm Registry](https://www.npmjs.com/).
