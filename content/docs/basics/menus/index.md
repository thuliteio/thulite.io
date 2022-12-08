---
title: "Menus"
description: "Add pages or links to the main menu."
lead: "Add pages or links to the main menu."
date: 2020-11-23T11:55:36+01:00
lastmod: 2020-11-23T11:55:36+01:00
draft: false
images: []
menu:
  docs:
    parent: "basics"
weight: 450
toc: true
---

See also the Hugo docs: [Menus](https://gohugo.io/content-management/menus/).

```bash
./config/_default/menus.toml
```

## Add to main menu

```toml
[[main]]
  name = "GitHub"
  url = "https://github.com/h-enk/hyas"
  weight = 10
```
