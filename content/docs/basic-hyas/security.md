---
title: "Security"
description: "Get A+ scores on Mozilla Observatory out of the box. Easily change the default Security Headers to suit your needs."
lead: "Get A+ scores on <a href=\"https://observatory.mozilla.org/analyze/hyas.netlify.app\" target=\"_blank\" rel=\"noopener\">Mozilla Observatory</a> out of the box. Easily change the default Security Headers to suit your needs."
date: 2020-09-17T13:48:09+02:00
lastmod: 2020-09-17T13:48:09+02:00
draft: false
images: []
menu: 
  docs:
    parent: "basic-hyas"
weight: 120
toc: true
---

## Security Headers
_Note: `./layouts/index.headers` is converted to a Netlify `_headers file`._

Defaults:

```bash
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

⚠️ For customizing check the [Netlify Docs](https://docs.netlify.com/routing/headers/).

### Content Security Policy
💡 [Laboratory](https://addons.mozilla.org/nl/firefox/addon/laboratory-by-mozilla/) is an experimental Firefox extension that helps you generate a Content Security Policy (CSP) header for your website.

## Subresource Integrity
[Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) is implemented with [Hugo](https://gohugo.io/hugo-pipes/fingerprint/) on styles and scripts.
