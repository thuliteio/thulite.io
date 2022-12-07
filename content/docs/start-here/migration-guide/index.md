---
title: "Migration Guide"
description: "This guide will help you migrate from older versions of Hyas to the latest version."
lead: "This guide will help you migrate from older versions of Hyas to the latest version."
date: 2022-11-25T15:48:57+01:00
lastmod: 2022-11-25T15:48:57+01:00
draft: false
images: []
menu:
  docs:
    parent: ""
weight: 150
toc: true
---

You can update your project's version of Hyas to the latest version using your package manager. If you're using plugins, you'll also want to update those to the latest version.

Updates the `gethyas` dependency:

{{< tabs "update-gethyas-dependency" >}}
{{< tab "npm" >}}

```bash
npm upgrade gethyas
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade gethyas
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade gethyas
```

{{< /tab >}}
{{< /tabs >}}

Or, to update all dependencies:

{{< tabs "update-all-dependencies" >}}
{{< tab "npm" >}}

```bash
npm upgrade
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade
```

{{< /tab >}}
{{< /tabs >}}

Read the guide below for major highlights and instructions on how to handle breaking changes.

## Hyas 2.0

Hyas v2.0 introduces some changes that you should be aware of when migrating from v1.x and v2.0-beta releases. See below for more details.

## Migrate to v2.0.0-beta
