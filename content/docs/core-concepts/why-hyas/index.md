---
title: "Why Hyas?"
description: ""
lead: "Hyas is an <strong>all-in-one web framework</strong> for building <strong>flexible, production-ready</strong> Hugo websites."
date: 2022-11-25T15:50:01+01:00
lastmod: 2022-11-25T15:50:01+01:00
draft: false
images: []
menu:
  docs:
    parent: "core-concepts"
weight: 310
toc: true
---

Why choose Hyas over another web framework? Here are six core design principles to help explain why we built Hyas, the problems that it exists to solve, and why Hyas may be the best choice for your project or team.

## Hyas is...

1. [Dependency manager]({{< ref "why-hyas#dependency-manager" >}}): Hyas makes managing dependencies easier.
2. [Site generator]({{< ref "why-hyas#site-generator" >}}): Hyas installs Hugo locally in your project.
3. [Code with confidence]({{< ref "why-hyas#code-with-confidence" >}}): Hyas reduces errors and improves your code quality.
4. [Ready for production]({{< ref "why-hyas#ready-for-production" >}}): Get top scores for security, performance, and SEO.
5. [Easy to use]({{< ref "why-hyas#easy-to-use" >}}): You don't need to be an expert to build something with Hyas.
6. [Fully-featured, but flexible]({{< ref "why-hyas#fully-featured-but-flexible" >}}): Make your Hyas website completely your own.

### Dependency manager

[npm](https://www.npmjs.com/) is the default dependency manager for [Node.js](https://nodejs.org/) used by millions of developers. [Hugo Modules](https://gohugo.io/hugo-modules/) (powered by Go Modules) is Hugo's default (and quite complex) way to manage dependencies (also requiring [Go](https://go.dev/)).

Most dependency managers have a global registry of available packages. For npm, this is the [npm Registry](https://www.npmjs.com/), with more than one million packages. For Hugo Modules however, there is no global registry of available packages.

__Hyas makes managing your dependencies easier__. Hyas uses _npm_ for managing dependencies in one place and _Hugo Modules_ (without requiring Go) for mounting dependency directories into Hugo's virtual filesystem.

### Site generator

__Build your website with the flexibility and speed of Hugo__. Hyas uses Hugo for it's unparalleled speed and flexibility. Hugo is usually installed in a global location. This way however, your project users could be using _different_ Hugo versions. Hyas however, installs Hugo _locally_ in your project. This way, your project users will always use the _same_ Hugo version.

- [Learn more about Hyas installing Hugo locally in your project]({{< ref "site-generator" >}})
{.list-books}

### Code with confidence

__Hyas reduces errors and improves your code quality__. Hyas uses linting for JavaScript, (S)CSS, and Markdown. Using lint tools can help you accelerate development and reduce costs by finding errors earlier.

### Ready for production

__Get top scores for security, performance, and SEO__. Easily change the default Security Headers to suit your needs. Hyas removes unused CSS and JavaScript, prefetches links, and lazy loads images. Use sensible defaults for structured data, open graph, and Twitter cards. Or, easily change the SEO settings to your liking.

- [A+ scores on Mozilla Observatory](https://observatory.mozilla.org/analyze/hyas.netlify.app)
- [100 scores on Google Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?gist=bc1047434376aa5b3e50cf637f8a5b40)

### Easy to use

__Hyas' goal is to be accessible to every web developer__. Hyas was designed to feel familiar and approachable regardless of skill level or past experience with web development.

#### Opt-in to complexity

We designed Hyas to remove as much "required complexity" as possible from the developer experience, especially as you onboard for the first time. You can build a "Hello World" example website in Hyas with just HTML and CSS. Then, when you need to build something more powerful, you can incrementally reach for new features and APIs as you go.

### Fully-featured, but flexible

__Hyas is an all-in-one web framework that comes with everything you need to build a website__. Hyas includes asset handling, a build process, bundling, optimizations, data-fetching, and more. You can build great websites without ever reaching outside of Hyas' core feature set.

If you need more control, you can extend Hyas with [plugins]({{< ref "plugins" >}}) like SEO, Images, and more, or use [themes]({{< ref "themes" >}}) like Bootstrap starter, Doks, and other community themes. Connect your favorite CMS or deploy to your favorite host with just a single command.
