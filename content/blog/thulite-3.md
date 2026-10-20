+++
title = 'Thulite 3'
url = "/blog/thulite-3/"
description = 'Thulite 3 brings Hugo 0.166.0 support, requires Dart Sass instead of LibSass, and adds Portless for stable local development URLs.'
summary = 'Thulite 3 brings Hugo 0.166.0 support, requires Dart Sass instead of LibSass, and adds Portless for stable local development URLs.'
date = 2026-10-13T11:20:29+02:00
lastmod = 2026-10-20T09:05:38+02:00
draft = false
weight = 50
categories = ["Product"] # E.g. ["Product", "Legal"]
tags = ["Framework", "Hugo", "npm"] # E.g. ["Markdown", "Cheat sheet"]
authors = ["Henk Verlinde"] # E.g. ["Henk Verlinde"]

[params.seo]
  title = "" # custom title (optional)
  description = "Thulite 3 brings Hugo 0.166.0 support, requires Dart Sass instead of LibSass, and adds Portless for stable local development URLs." # custom description (recommended)
  canonical = "" # custom canonical URL (optional)
  robots = "" # custom robot tags (optional)
+++
Thulite 3 is now available, with support for the latest Hugo release, a modern Sass compiler, and simpler local development URLs.

## Highlights

- Hugo 0.166.0
- Dart Sass
- Portless support

## Get started

To upgrade, follow the [Upgrade to Thulite v3](https://docs.thulite.io/thulite/start-here/updating/v3/) guide. See the [v3.0.0 release notes](https://github.com/thuliteio/thulite/releases/tag/v3.0.0) for the full changelog.

## Hugo 0.166.0

Thulite 3 is updated for [Hugo 0.166.0](https://github.com/gohugoio/hugo/releases/tag/v0.166.0).

## Dart Sass

LibSass support has been removed. Install [Dart Sass](https://sass-lang.com/install/) to compile your stylesheets.

## Portless

Use [Portless](https://docs.thulite.io/thulite/start-here/usage/#start-portless-development-server) to develop at a stable, named `.localhost` URL over HTTPS instead of a port-numbered localhost URL.
