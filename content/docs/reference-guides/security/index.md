---
title: "Security"
description: "Get A+ scores on Mozilla Observatory out of the box. Easily change the default Security Headers to suit your needs."
lead: "Get A+ scores on Mozilla Observatory out of the box. Easily change the default Security Headers to suit your needs."
date: 2020-09-17T13:48:09+02:00
lastmod: 2020-09-17T13:48:09+02:00
draft: false
images: ["mozilla-observatory-scan-summary-hyas.png", "mozilla-observatory-scan-recommendations-hyas.png"]
menu:
  docs:
    parent: "reference-guides"
weight: 310
toc: true
---

![Mozilla Observatory Scan Summary Hyas](mozilla-observatory-scan-summary-hyas.png)

See also Mozilla Observatory: [Scan Results for hyas.netlify.app](https://observatory.mozilla.org/analyze/hyas.netlify.app)

## Netlify

See also the Netlify website: [Security at Netlify](https://www.netlify.com/security/).

### Security Headers

`./layouts/index.headers` excerpt:

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

See also: [Headers]({{< ref "netlify#headers" >}}).

#### Content Security Policy

{{< alert icon="💡" text="<a href=\"https://csper.io/evaluator\">Policy Evaluator</a> is a free tool to evaluate your website's Content Security Policy for security misconfigurations and recommendations." >}}

{{< alert icon="💡" text="<a href=\"https://csper.io/generator\">Policy Generator</a> is a free tool to generate a Content Security Policy." >}}

## Subresource Integrity

[Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) is applied to Hyas CSS and JS files when building your Hyas site for production:

- `./layouts/partials/head/stylesheet.html`
- `./layouts/partials/footer/script-footer.html`

See also the Hugo Docs: [Fingerprinting and SRI](https://gohugo.io/hugo-pipes/fingerprint/).

## Hyas Codebase

The Hyas Codebase is regularly checked for vulnarabilites with an automated CodeQL workflow.

See also the GitHub docs: [Finding security vulnerabilities and errors in your code](https://docs.github.com/en/free-pro-team@latest/github/finding-security-vulnerabilities-and-errors-in-your-code)

## Hyas Dependencies

The Hyas Dependencies are regularly checked for updates with an automated Dependabot process.

See also the GitHub docs: [Keeping your dependencies updated automatically](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/keeping-your-dependencies-updated-automatically)
