---
title: "Netlify"
description: "Deploy to Netlify with sensible defaults. Easily use Netlify Functions, Netlify Redirects, and Netlify Headers."
lead: "Deploy to Netlify with sensible defaults. Easily use Netlify Functions, Netlify Redirects, and Netlify Headers."
date: 2020-09-21T15:58:12+02:00
lastmod: 2020-09-21T15:58:12+02:00
draft: false
images: []
menu:
  docs:
    parent: "reference-guides"
weight: 460
toc: true
---

```bash
.
├── functions/
├── layouts/
│   ├── index.headers
│   └── index.redirects
└── netlify.toml
```

See also the Hugo Docs: [Host on Netlify](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/).

## Functions

See: [Functions](/docs/recipes/functions/)

## Redirects

`./layouts/index.redirects` is converted on build to `./public/_redirects`.

```bash
{{- range $p := .Site.Pages -}}
{{- range .Aliases }}
{{ . }} {{ $p.RelPermalink -}}
{{- end }}
{{- end -}}
```

See also the Netlify docs: [Redirects and rewrites](https://docs.netlify.com/routing/redirects/)

## Headers

`./layouts/index.headers` is converted on build to `./public/_headers`.

```bash
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Content-Security-Policy: default-src 'self'; manifest-src 'self'; connect-src 'self'; font-src 'self'; img-src 'self' data:; script-src 'self' 'nonce-dXNlcj0iaGVsbG8iLGRvbWFpbj0iaGVua3ZlcmxpbmRlLmNvbSIsZG9jdW1lbnQud3JpdGUodXNlcisiQCIrZG9tYWluKTs=' 'sha256-aWZ3y/RxbBYKHXH0z8+8ljrHG1mSBvyzSfxSMjBSaXk='; style-src 'self'
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin
  Feature-Policy: geolocation 'self'
  Cache-Control: public, max-age=31536000
  Access-Control-Allow-Origin: *
```

See also the Netlify docs: [Custom headers](https://docs.netlify.com/routing/headers/)

## Configuration

`./netlify.toml`:

```toml
[build]
  publish = "public"
  functions = "functions"

[build.environment]
  NODE_VERSION = "16.13.1"
  NPM_VERSION = "8.1.2"

[context.production]
  command = "npm run build"

[context.deploy-preview]
  command = "npm run build -- -b $DEPLOY_PRIME_URL"

[context.branch-deploy]
  command = "npm run build -- -b $DEPLOY_PRIME_URL"

[context.next]
  command = "npm run build"

[context.next.environment]
  HUGO_ENV = "next"

[dev]
  framework = "#custom"
  command = "npm run start"
  targetPort = 1313
  port = 8888
  publish = "public"
  autoLaunch = false
```

See also the Netlify docs: [File-based configuration](https://docs.netlify.com/configure-builds/file-based-configuration/)
