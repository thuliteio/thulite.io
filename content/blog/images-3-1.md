+++
title = "Images 3.1"
url = "/blog/images-3-1/"
description = "Images 3.1 is out — new shortcodes and partials, an improved image render hook, and a new documentation website."
summary = "Images 3.1 is out —  new shortcodes and partials, an improved image render hook, and a new documentation website."
date = 2024-02-02T08:03:57+01:00
lastmod = 2024-02-02T08:03:57+01:00
draft = false
weight = 50
categories = ["Product", "Integrations"] # E.g. ["Product", "Legal"]
tags = ["Images", "Hugo", "npm"] # E.g. ["Markdown", "Cheat sheet"]
authors = ["Henk Verlinde"] # E.g. ["Henk Verlinde"]

[params.seo]
  title = "" # custom title (optional)
  description = "" # custom description (recommended)
  canonical = "" # custom canonical URL (optional)
  robots = "" # custom robot tags (optional)
+++

Images 3.1 is out — new shortcodes and partials, an improved image render hook, and a new documentation website.

## Overview

Images now has a new code base, making it more robust, flexible, and easy to use.

## Highlights

- Improved [image render hook](#image-render-hook) for Markdown images.
- New [shortcodes and partials](#shortcodes-and-partials) for `picture`, `img`, and `figure` elements.
- Store your images as a page resource, global resource, or remote resource.
- Set defaults for `loading`, `decoding`, `fetchpriority`, and more — override locally.
- Use the automatic `sizes` attribute calculation :rocket:
- Show your images with a blurred-up LQIP :star2:
- New [documentation website](#documentation-website).

## Get started

To take advantage of the latest features, make sure you're running the latest version of Images and have set the new [parameters](https://images.thulite.io/docs/basics/customizing-images/#update-parameters). You can upgrade to Images 3.1 by running the following command for your package manager of choice:

{{< tabs "update-images" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/images@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade @thulite/images --latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade @thulite/images --latest
```

{{< /tab >}}
{{< /tabs >}}

## Shortcodes and partials

You can add images to your `html` pages by using the the `img`, `picture`, or `figure` partial. The shortcodes are wrappers for the partials. Add images to your `.md` pages by using the `img`, `picture`, or `figure` shortcode — for example:

```md
{{</* img
  process="fill 1600x900"
  src="images/my-image.jpg"
  alt="My super image in multiple formats!"
*/>}}
```

The above code will generate the following HTML, and allow the browser to determine the best image to display:

```html
<img
  srcset="..."
  data-srcset="..."
  data-sizes="auto"
  src="..."
  width="1600"
  height="900"
  decoding="async"
  fetchpriority="auto"
  loading="lazy"
  alt="My super image in multiple formats!"
  class="blur-up lazyautosizes ls-is-cached lazyloaded"
  sizes="628px" />
```

## Image render hook

You can add images to your `.md` pages by using the Markdown syntax for images.

```md
![A starry night sky](images/stars.jpg)
```

The Markdown above get rendered into the following HTML:

```html
<img
  src="/images/stars_hu5459c0360c2b0cb7a147d2df0eb350ca_80218_1920x1280_resize_q85_h2_lanczos.webp"
  width="410"
  height="274"
  decoding="async"
  fetchpriority="auto"
  loading="lazy"
  alt="A starry night sky"
  id="h-rh-i-1" />
```

## Documentation website

To better explain the possibilities of Images, we launched a new documentation website: [images.thulite.io](https://images.thulite.io/).

{{< img loading="lazy" fetchpriority="auto" src="images/images.gethyas.com.jpg" alt="Screenshot homepage images.gethyas.com" class="border-img my-4">}}

The new website contains handy how-to-guides and reference guides.

## Acknowledgements

This release wouldn’t have been possible without the effort of the amazing open source community. Thank you, everyone.
