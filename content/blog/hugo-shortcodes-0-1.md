+++
title = 'Hugo Shortcodes 0.1'
url = "/blog/hugo-shortcodes-0-1/"
description = 'The Hugo Shortcodes extension for VS Code adds syntax highlighting and smart shortcode completions, helping Hugo and Thulite authors write faster Markdown.'
summary = 'The Hugo Shortcodes extension for VS Code adds syntax highlighting and smart shortcode completions, helping Hugo and Thulite authors write faster Markdown.'
date = 2026-05-14T15:02:00+02:00
lastmod = 2026-05-14T15:02:00+02:00
draft = false
weight = 50
categories = ["Tools"] # E.g. ["Product", "Legal"]
tags = ["Markdown"] # E.g. ["Markdown", "Cheat sheet"]
authors = ["Henk Verlinde"] # E.g. ["Henk Verlinde"]

[params.seo]
  title = "Hugo Shortcodes for VS Code" # custom title (optional)
  description = "The Hugo Shortcodes extension for VS Code adds syntax highlighting and smart shortcode completions, helping Hugo and Thulite authors write faster Markdown." # custom description (recommended)
  canonical = "" # custom canonical URL (optional)
  robots = "" # custom robot tags (optional)
+++

If you write Hugo or Thulite content in Markdown, the [Hugo Shortcodes extension](https://marketplace.visualstudio.com/items?itemName=thuliteio.hugo-shortcodes) can save a lot of time.

## Smart Editing

It adds shortcode-aware syntax highlighting and intelligent completions while you type `{{</* shortcode */>}}` or `{{%/* shortcode */%}}`. That means fewer typos, faster writing, and less context switching to documentation.

## Template Aware

What makes it especially useful is that suggestions are based on shortcode templates in your own workspace. The extension can discover names, named arguments, and positional argument slots from patterns like `.Get`, `.Params`, and `@param` docs, then refresh automatically when templates change.

## Why It Helps

You get a smoother authoring experience, more accurate shortcode usage, and quicker content production in VS Code.

## Get the Extension

[Install Hugo Shortcodes from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=thuliteio.hugo-shortcodes)
