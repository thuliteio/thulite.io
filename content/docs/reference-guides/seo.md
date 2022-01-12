---
title: "SEO"
description: "Use sensible defaults for structured data, open graph, and Twitter cards. Or easily change the SEO settings to your liking."
lead: "Use sensible defaults for structured data, open graph, and Twitter cards. Or easily change the SEO settings to your liking."
date: 2020-09-18T14:25:19+02:00
lastmod: 2020-09-18T14:25:19+02:00
draft: false
images: []
menu:
  docs:
    parent: "reference-guides"
weight: 330
toc: true
---

`./config/_default/params.toml`

## Homepage

```toml
title = "Hyas"
titleSeparator = "-"
titleAddition = "Modern Hugo Starter"
description = "Hyas is a Hugo starter helping you build modern websites that are secure, fast, and SEO-ready — by default."
```

See also: [The Document Title element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)

## Open Graph

```toml
images = ["hyas.png"]
ogLocale = "en_US"
titleHome = "Hyas Hugo Starter"
```

See also: [The Open Graph protocol](https://ogp.me/)

## Twitter Cards

```toml
twitterSite = "@gethyas"
twitterCreator = "@henkverlinde"
```

See also: [Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

## JSON-LD

```toml
# schemaType = "Person"
schemaType = "Organization"
schemaName = "Hyas"
schemaAuthor = "Henk Verlinde"
schemaAuthorTwitter = "https://twitter.com/henkverlinde"
schemaAuthorLinkedIn = "https://www.linkedin.com/in/henkverlinde/"
schemaAuthorGitHub = "https://github.com/h-enk"
schemaLocale = "en-US"
schemaLogo = "logo-hyas.png"
schemaLogoWidth = 512
schemaLogoHeight = 512
schemaImage = "hyas.png"
schemaImageWidth = 1280
schemaImageHeight = 640
schemaTwitter = "https://twitter.com/gethyas"
schemaLinkedIn = ""
schemaGitHub = "https://github.com/h-enk/hyas"
```

See also: [schema.org](https://schema.org/)

## Chrome Browser

```toml
themeColor = "#fff"
```

See also: [theme-color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color)
