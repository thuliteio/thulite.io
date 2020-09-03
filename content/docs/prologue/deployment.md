---
title: "Deployment"
description: "Deployment Hyas."
lead: "Hyas is optimized for deployment on Netlify."
date: 2020-04-20T12:46:25+02:00
lastmod: 2020-04-20T12:46:25+02:00
draft: false
images: []
menu: 
  docs:
    parent: "prologue"
weight: 020
toc: true
---

## Netlify

See the Hugo Doks: [Host on Netlify](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/)

### netlify.toml

```toml
[build]
  publish = "public/"
  command = "yarn build"
  functions = "functions/"

[build.environment]
  HUGO_VERSION = "0.69.0"
  NODE_VERSION = "13.11.0"
  NPM_VERSION = "6.13.7"
  YARN_VERSION = "1.22.4"

[context.deploy-preview]
  command = "yarn build:preview"

[context.branch-deploy]
  command = "yarn build"
```

[Check Netlify Docs on config vars](https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata)

## Other hosting options

See the Hugo Doks: [Hosting & Deployment](https://gohugo.io/hosting-and-deployment/)
