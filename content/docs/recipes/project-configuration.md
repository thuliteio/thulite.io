---
title: "Project Configuration"
description: "Set and customize configuration."
lead: "Set and customize configuration."
date: 2020-09-21T12:19:02+02:00
lastmod: 2020-09-21T12:19:02+02:00
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 110
toc: true
---

```bash
..
├── _default/
│   ├── config.toml
│   ├── markup.toml
│   ├── menus.toml
│   └── params.toml
├── next/
├── production/
├── babel.config.js
└── postcss.config.js
```

See also the Hugo docs: [Configure Hugo](https://gohugo.io/getting-started/configuration/).

## Set configuration

### params.toml

#### Meta data

See also: [SEO]({{< ref "seo" >}})

##### Homepage

```toml
title = "Hyas"
titleSeparator = "-"
titleAddition = "Modern Hugo Starter"
description = "Hyas is a Hugo starter helping you build modern websites that are secure, fast, and SEO-ready — by default."
```

##### Open Graph

```toml
images = ["hyas.png"]
ogLocale = "en_US"
titleHome = "Hyas Hugo Starter"
```

##### Twitter Cards

```toml
twitterSite = "@gethyas"
twitterCreator = "@henkverlinde"
```

##### JSON-LD

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

##### Chrome Browser

```toml
themeColor = "#fff"
```

#### Images

```toml
quality = 85
bgColor = "#fff"
landscapePhotoWidths = [900, 800, 700, 600, 500]
portraitPhotoWidths = [800, 700, 600, 500]
lqipWidth = "20x"
smallLimit = "320"

### Image partial
defaultImage = "default-image.png" # put in `./assets/images/`
fillImage = "1280x720 Center" # normalize image size
```

#### Footer

```toml
footer = "Powered by <a href=\"https://www.netlify.com/\">Netlify</a>, <a href=\"https://gohugo.io/\">Hugo</a>, and <a href=\"https://gethyas.com/\">Hyas</a>"
```

#### Feed

```toml
copyRight = "Copyright (c) 2020-2021 Henk Verlinde"
```

#### Alert

```toml
alert = true
alertDismissable = true
alertText = "Deliver web projects 10x faster. <a class=\"alert-link\" href=\"https://www.netlify.com/whitepaper/\" target=\"_blank\" rel=\"noopener\">Get the free enterprise paper →</a>"
```

### menus.toml

```toml
[[main]]
  name = "GitHub"
  url = "https://github.com/h-enk/hyas"
  weight = 10

[[social]]
  name = "LinkedIn"
  url = "https://www.linkedin.com/in/henkverlinde/"
  weight = 20

[[social]]
  name = "Twitter"
  url = "https://twitter.com/henkverlinde"
  weight = 30
```

See also: [Menus]({{< ref "menus" >}})

## Customize configuration

### config.toml

#### Basics

```toml
baseurl = "https://hyas.netlify.app/"
canonifyURLs = false
disableAliases = true
disableHugoGeneratorInject = true
disableKinds = ["taxonomy", "taxonomyTerm"]
enableEmoji = true
enableGitInfo = false
enableRobotsTXT = true
languageCode = "en-US"
paginate = 7
rssLimit = 10
```

#### Netlify

```toml
# add redirects/headers
[outputs]
  home = ["HTML", "RSS", "REDIRECTS", "HEADERS"]

# remove .{ext} from text/netlify
[mediaTypes."text/netlify"]
  suffixes = [""]
  delimiter = ""

# add output format for netlify _redirects
[outputFormats.REDIRECTS]
  mediatype = "text/netlify"
  baseName = "_redirects"
  isPlainText = true
  notAlternative = true

# add output format for netlify _headers
[outputFormats.HEADERS]
  mediatype = "text/netlify"
  baseName = "_headers"
  isPlainText = true
  notAlternative = true
```

#### Caching

```toml
[caches]
  [caches.getjson]
    dir = ":cacheDir/:project"
    maxAge = "10s"
```

#### Sitemap

```toml
[sitemap]
  changefreq = "weekly"
  filename = "sitemap.xml"
  priority = 0.5
```

#### Taxonomies

```toml
[taxonomies]
  category = "categories"
```

#### Permalinks

```toml
[permalinks]
  blog = "/:title/"
```

#### Minify

```toml
[minify.tdewolff.html]
  keepWhitespace = false
```

#### Related

```toml
[related]
  threshold = 80
  includeNewer = true
  toLower = false
    [[related.indices]]
    name = "categories"
    weight = 100
    [[related.indices]]
    name = "date"
    weight = 10
```

### markup.toml

```toml
defaultMarkdownHandler = "goldmark"

[goldmark]
  [goldmark.extensions]
    linkify = false
  [goldmark.parser]
    autoHeadingID = true
    autoHeadingIDType = "github"
    [goldmark.parser.attribute]
      block = true
      title = true
  [goldmark.renderer]
    unsafe = true

[highlight]
  codeFences = false
  guessSyntax = false
  hl_Lines = ""
  lineNoStart = 1
  lineNos = false
  lineNumbersInTable = true
  noClasses = false
  style = "dracula"
  tabWidth = 4

[tableOfContents]
  endLevel = 3
  ordered = false
  startLevel = 2
```

### babel.config.js

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            // Best practice: https://github.com/babel/babel/issues/7789
            '>=1%',
            'not ie 11',
            'not op_mini all',
          ],
        },
      },
    ],
  ],
};
```

See also the Babel docs: [Configure Babel](https://babeljs.io/docs/en/configuration).

### postcss.config.js

```js
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'h3',
        'alert-link',
        ...whitelister([
          './assets/scss/components/_alerts.scss',
          // './assets/scss/components/_buttons.scss',
          './assets/scss/components/_code.scss',
          // './assets/scss/components/_syntax.scss',
        ]),
      ],
    }),
  ],
}
```

See also: [Unused CSS removal]({{< ref "performance#unused-css-removal" >}}).
