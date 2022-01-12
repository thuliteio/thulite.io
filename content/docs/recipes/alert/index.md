---
title: "Alert"
description: "Show a global alert. Optionally, make it dismissible."
lead: "Show a global alert. Optionally, make it dismissible."
date: 2022-01-12T11:41:04+01:00
lastmod: 2022-01-12T11:41:04+01:00
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 155
toc: true
---

See also: [Alert](/docs/recipes/project-configuration/#alert)

## Settings

The global alert is visible on all pages when activated (at the top). Switch it on by setting `alert = true` and make it dismissible by setting `alertDismissable = true` in `./config/_default/params.toml`:

## Example

```toml
# Alert
alert = true
alertDismissable = true
alertText = "Deliver web projects 10x faster. <a class=\"alert-link\" href=\"https://www.netlify.com/whitepaper/\" target=\"_blank\" rel=\"noopener\">Get the free enterprise paper →</a>"
```

Will be processed into:

![Global alert](alert.png)
