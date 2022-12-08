---
title: "Links"
description: "Add a normal link, or add an email link with email obfuscation."
lead: "Add a normal link, or add an email link with email obfuscation."
date: 2022-01-12T11:23:17+01:00
lastmod: 2022-01-12T11:23:17+01:00
draft: false
images: []
menu:
  docs:
    parent: "basics"
weight: 460
toc: true
---

## Processing

Render hook template: `./layouts/_default/_markup/render-link.html`. Normal links open in the same window or tab. Email obfuscation template: `./layouts/partials/email.html`.

## Add a normal link

See the Markdown Guide: [Links](https://www.markdownguide.org/basic-syntax/#links)

## Add an email link

### Example

```md
- <fake@example.com>
- [fake@example.com](mailto:fake@example.com)
- [Email me](mailto:fake@example.com)
```

Will be processed into:

```html
<ul>
  <li>
    <script type="text/javascript" nonce="dXNlcj0iaGVsbG8iLGRvbWFpbj0iaGVua3ZlcmxpbmRlLmNvbSIsZG9jdW1lbnQud3JpdGUodXNlcisiQCIrZG9tYWluKTs=">userName="fake",domainName="example",domainExtension="com",document.write("<a href='mailto:"+userName+"@"+domainName+"."+domainExtension+"'>"+userName+"@"+domainName+"."+domainExtension+"</a>");</script>
    <noscript>fake at example dot com</noscript>
  </li>
  <li>
    <script type="text/javascript" nonce="dXNlcj0iaGVsbG8iLGRvbWFpbj0iaGVua3ZlcmxpbmRlLmNvbSIsZG9jdW1lbnQud3JpdGUodXNlcisiQCIrZG9tYWluKTs=">userName="fake",domainName="example",domainExtension="com",document.write("<a href='mailto:"+userName+"@"+domainName+"."+domainExtension+"'>"+userName+"@"+domainName+"."+domainExtension+"</a>");</script>
    <noscript>fake at example dot com</noscript>
  </li>
  <li>
    <script type="text/javascript" nonce="dXNlcj0iaGVsbG8iLGRvbWFpbj0iaGVua3ZlcmxpbmRlLmNvbSIsZG9jdW1lbnQud3JpdGUodXNlcisiQCIrZG9tYWluKTs=">userName="fake",domainName="example",domainExtension="com",document.write("<a href='mailto:"+userName+"@"+domainName+"."+domainExtension+"'>Email me</a>");</script>
    <noscript>fake at example dot com</noscript>
  </li>
</ul>
```
