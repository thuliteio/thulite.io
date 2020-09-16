---
title: "Deployment"
description: "Deployment Hyas."
lead: "Hyas is optimized for deployment to Netlify, but you can use any static site host to your liking."
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

See also the Hugo Docs: [Host on Netlify](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/)

### netlify.toml

```toml
[build]
  publish = "public"
  functions = "functions"

[build.environment]
  HUGO_VERSION = "0.74.3"
  NODE_VERSION = "13.11.0"
  NPM_VERSION = "6.13.7"
  YARN_VERSION = "1.22.4"

[context.production]
  command = "yarn build"

[context.deploy-preview]
  command = "yarn build -b $DEPLOY_PRIME_URL"

[context.branch-deploy]
  command = "yarn build -b $DEPLOY_PRIME_URL"
```

To customize the default `netlify.toml`, [check out the Netlify Docs for config vars](https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata)

### index.headers

```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Content-Security-Policy: default-src 'none'; manifest-src 'self'; connect-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin
  Feature-Policy: geolocation 'self'
  Cache-Control: public, max-age=31536000
```
[Custom headers](https://docs.netlify.com/routing/headers/)

### index.redirects
```
{{ range $pages := .Site.Pages -}}
  {{ range .Aliases -}}
    {{ . }} {{ $pages.RelPermalink -}}
  {{ end -}}
{{ end -}}
```
[Redirects and rewrites](https://docs.netlify.com/routing/redirects/)

## Other hosting options

See the Hugo Docs: [Hosting & Deployment](https://gohugo.io/hosting-and-deployment/)
