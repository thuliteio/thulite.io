---
title: "Hugo Shortcodes"
description: "This cheat sheet provides a quick overview of all available Hugo shortcodes."
summary: "This cheat sheet provides a quick overview of all available Hugo shortcodes."
date: 2023-02-22T09:48:59+01:00
lastmod: 2023-02-22T09:48:59+01:00
draft: true
weight: 50
gradient: "blue-green" # blue-green(default), blue-purple, orange-yellow, pink-blue, or purple-orange (this setting is only relevant when "images: []")
categories: ["Guides"]
tags: []
authors: ["Henk Verlinde"]
featured: false
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus dolor eu laoreet pretium. Etiam at feugiat risus. Nullam sodales facilisis felis, sed finibus neque interdum congue. Suspendisse eu neque quis magna ultricies consequat.

## Donec at aliquam orci

Vivamus ultricies, ligula at fringilla commodo, nunc risus mollis velit, auctor fringilla ex magna eu tellus. Duis mollis nisl quis vestibulum aliquet. Donec pellentesque mi vel ullamcorper sollicitudin. Sed urna ligula, efficitur vel sodales quis, egestas id justo. Donec at aliquam orci. Vivamus sit amet imperdiet eros. Nunc sit amet tempus justo.

## Cras porttitor magna

Nullam eget nibh vel massa faucibus accumsan nec in arcu. Cras porttitor magna eu blandit interdum. Donec hendrerit nunc augue, id posuere orci euismod eu. Vivamus in libero metus. Nam sed placerat erat.

Sed vel ipsum elementum, mattis sem in, venenatis dui. Sed ac risus vel enim iaculis lacinia non nec urna. Donec auctor nisi at arcu condimentum, eget lobortis dui ullamcorper. Cras dictum egestas mi, vel pharetra turpis porttitor non. Nam non venenatis justo.

{{< callout >}} This is a default callout. Example text to show it in action. {{< /callout >}}

{{< callout tip >}} This is a tip callout. Example text to show it in action. {{< /callout >}}

{{< callout caution >}} This is a caution callout. Example text to show it in action. {{< /callout >}}

{{< callout danger >}} This is a danger callout. Example text to show it in action. {{< /callout >}}

{{< callout context="note" icon="info-circle" title="Prefer to install Hyas manually?" >}}
Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within a callout works with this kind of content.
{{< /callout >}}

## Details

{{< details "Details" >}}
Something small enough to escape casual notice.
{{< /details >}}

{{< details "Start in open state" open >}}
This Boolean attribute indicates whether the details — that is, the contents of the `<details>` element — are currently visible. The details are shown when this attribute exists, or hidden when this attribute is absent. By default this attribute is absent which means the details are not visible.
{{< /details >}}

## Tabs

Run the following command in your terminal to start our handy install wizard, `create-hyas`.

{{< tabs "create-new-site" >}}
{{< tab "npm" >}}

```bash
npm create hyas@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create hyas@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create hyas
```

{{< /tab >}}
{{< /tabs >}}

`cd` into your new project directory to begin using Hyas. Install your dependencies before continuing.

{{< tabs "install-dependencies" >}}
{{< tab "npm" >}}

```bash
npm install
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn install
```

{{< /tab >}}
{{< /tabs >}}
