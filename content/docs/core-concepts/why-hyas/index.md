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

1. [Dependency manager]({{< ref "why-hyas#dependency-manager" >}}): Makes managing dependencies as easy as possible.
2. [Site generator]({{< ref "why-hyas#site-generator" >}}): Hyas builds websites fast and flexible with Hugo.
3. [Code with confidence]({{< ref "why-hyas#code-with-confidence" >}}): Hyas reduces errors and improves code quality.
4. [Ready for production]({{< ref "why-hyas#ready-for-production" >}}): Top scores for security, performance, and SEO.
5. [Easy to use]({{< ref "why-hyas#easy-to-use" >}}): You don't need to be an expert to build something with Hyas.
6. [Fully-featured, but flexible]({{< ref "why-hyas#fully-featured-but-flexible" >}}): Make your Hyas website completely your own.

### Dependency manager

[npm](https://www.npmjs.com/) is the default dependency manager for [Node.js](https://nodejs.org/) used by millions of developers. [Hugo Modules](https://gohugo.io/hugo-modules/) (powered by Go Modules) is Hugo's default way to manage dependencies.

Most dependency managers have a global registry of available packages. For npm, this is the [npm Registry](https://www.npmjs.com/). For Hugo Modules there is no global registry of available packages.

__Hyas makes managing dependencies as easy as possible__. Hyas uses _npm_ for dependency management and _Hugo Modules_ for mounting `node_modules` directories into Hugo's virtual filesystem.

### Site generator

__Hyas builds websites fast and flexible with Hugo__. Hyas uses Hugo for it's flexibility and speed. Hugo is usually installed in a global location. Hyas however, installs Hugo _locally_ in your project. This way Hyas has full control over the Hugo version used. But best of all, all your project users use the _same_ Hugo version.

### Code with confidence

__Hyas reduces errors and improves the overall quality of your code__. Hyas uses linting for JavaScript, (S)CSS, and Markdown. Using lint tools can help you accelerate development and reduce costs by finding errors earlier.

### Ready for production

__With Hyas, you'll get top scores for security, performance, and SEO__. Hyas provides you with sound default Security Headers. Hyas removes unused CSS and JavaScript, prefetches links, and lazy loads images. Plus, Hyas provides you with sensible defaults for structured data, open graph, and Twitter cards. All default settings can easily be changed.

- [A+ scores on Mozilla Observatory](https://observatory.mozilla.org/analyze/hyas.netlify.app)
- [100 scores on Google Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?gist=bc1047434376aa5b3e50cf637f8a5b40)

### Easy to use

__Hyas' goal is to be accessible to every web developer__. Hyas was designed to feel familiar and approachable regardless of skill level or past experience with web development.

One of our favorite sayings is: __opt-in to complexity__. We designed Hyas to remove as much "required complexity" as possible from the developer experience, especially as you onboard for the first time. You can build a "Hello World" example website in Hyas with just HTML and CSS. Then, when you need to build something more powerful, you can incrementally reach for new features and APIs as you go.

### Fully-featured, but flexible

__Hyas is an all-in-one web framework that comes with everything you need to build a website__. Hyas includes asset handling, a build process, bundling, optimizations, data-fetching, and more. You can build great websites without ever reaching outside of Hyas' core feature set.

If you need more control, you can extend Hyas with [plugins]({{< ref "plugins" >}}) like SEO, Images, and more, or use [themes]({{< ref "themes" >}}) like Bootstrap starter, Doks, and more. Connect your favorite CMS or deploy to your favorite host with just a single command.
