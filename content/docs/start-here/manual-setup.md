---
title: "Manual Setup"
description: ""
lead: "Ready to install Hyas? Follow our automatic or manual set-up guide to get started."
date: 2022-12-06T12:12:26+01:00
lastmod: 2022-12-06T12:12:26+01:00
draft: false
images: []
menu:
  docs:
    parent: "installation"
weight: 130
toc: true
url: "/docs/start-here/installation/manual-setup/"
_build:
  list: never
  publishResources: true
  render: always
---

[&larr; Automatic CLI]({{< ref "installation" >}})

## Prerequisites

- __Node.js__ - `v16.17.0` or higher.
- __Text editor__ - We recommend [VS Code](https://code.visualstudio.com/) with the [Hugo Language and Syntax Support](https://marketplace.visualstudio.com/items?itemName=budparr.language-hugo-vscode) extension.
- Terminal - Hyas is accessed through its command-line interface (CLI).

## Installation

If you prefer not to use our automatic `create-hyas` CLI tool, you can set up your project yourself by following the guide below.

## 1. Create your directory

Create an empty directory with the name of your project, and then navigate into it.

```bash
mkdir my-hyas-project && cd my-hyas-project
```

Once you are in your new directory, create your project `package.json` file. This is how you will manage your project dependencies, including Hyas. If you aren't familiar with this file format, run the following command to create one.

{{< tabs "create-package-json" >}}
{{< tab "npm" >}}

```bash
npm init --yes
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm init
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn init --yes
```

{{< /tab >}}
{{< /tabs >}}

## 2. Install Hyas

First, replace any placeholder "scripts" section of your `package.json` with the following:

```bash
  "scripts": {
    "predev": "npm run clean:build",
    "dev": "exec-bin node_modules/.bin/hugo/hugo server --gc --bind=0.0.0.0 --disableFastRender --baseURL=http://localhost",
    "create": "exec-bin node_modules/.bin/hugo/hugo new",
    "check": "npm run check:scripts && npm run check:styles && npm run check:markdown",
    "check:scripts": "eslint config",
    "check:styles": "stylelint \"assets/scss/**/*.{css,sass,scss}\"",
    "check:markdown": "markdownlint-cli2 \"*.md\" \"content/**/*.md\"",
    "fix:markdown": "markdownlint-cli2-fix \"*.md\" \"content/**/*.md\"",
    "test": "npm run check",
    "prebuild": "npm run clean:build",
    "build": "exec-bin node_modules/.bin/hugo/hugo --gc --minify",
    "preview": "http-server --gzip --brotli --ext=html --cors",
    "clean": "npm run clean:build && npm run clean:install",
    "clean:build": "shx rm -rf public resources .hugo_build.lock",
    "clean:install": "shx rm -rf package-lock.json yarn.lock pnpm-lock.yaml node_modules",
    "preinfo": "npm version",
    "info": "npm list",
    "postinfo": "exec-bin node_modules/.bin/hugo/hugo version",
    "postinstall": "shx rm -rf node_modules/.bin/hugo && shx mkdir node_modules/.bin/hugo && shx cp node_modules/gethyas/node_modules/.bin/hugo/* node_modules/.bin/hugo"
  },
```

You'll use these scripts later in the guide to start Hyas and run its different commands.

Then, add an `.npmrc` file to your project root with the following:

```bash
enable-pre-post-scripts = true
auto-install-peers = true
node-linker = hoisted
prefer-symlinked-executables = false
```

Next, install the Hyas project dependencies inside your project.

{{< tabs "install-dependencies" >}}
{{< tab "npm" >}}

```bash
npm install gethyas --save-dev
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install gethyas --save-dev
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add gethyas --save-dev
```

{{< /tab >}}
{{< /tabs >}}

## 3. Create config files

Hyas uses Hugo's configuration setup.

### `config/_default` directory

Create an empty `config/_default` directory, and then navigate into it.

```bash
mkdir config/_default && cd config/_default
```

#### `config.toml`

Add a `config.toml` file with the following:

```bash
baseurl = "/"
canonifyURLs = false
disableAliases = true
disableHugoGeneratorInject = true
disableKinds = ["taxonomy", "term"]
enableEmoji = true
enableGitInfo = false
enableRobotsTXT = true
languageCode = "en-US"
paginate = 7
rssLimit = 10

[outputs]
  home = ["HTML", "RSS"]

[caches]
  [caches.getjson]
    dir = ":cacheDir/:project"
    maxAge = "10s"

[sitemap]
  changefreq = "monthly"
  filename = "sitemap.xml"
  priority = 0.5

[taxonomies]
  category = "categories"

[permalinks]
  blog = "/:title/"

[minify.tdewolff.html]
  keepWhitespace = false

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

#### `markup.toml`

Add a `markup.toml` file with the following:

```bash
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

#### `module.toml`

Add a `module.toml` file with the following:

```bash
[[mounts]]
  source = "node_modules/@hyas/core/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/@hyas/core/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/gethyas/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/gethyas/static"
  target = "static"

[[mounts]]
  source = "assets"
  target = "assets"

[[mounts]]
  source = "layouts"
  target = "layouts"

[[mounts]]
  source = "static"
  target = "static"
```

#### `params.toml`

Add a `params.toml` file with the following:

```bash
# Meta Data for SEO

## Homepage
title = "Hyas"
titleSeparator = "-"
titleAddition = "Build websites faster"

# Feed
copyRight = "Copyright (c) 2020-2022 Hyas"
```

### `config` directory

`cd` one level up.

```bash
cd ..
```

#### `babel.config.js`

Add a `babel.config.js` file with the following:

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

#### `postcss.config.js`

Add a `postcss.config.js` file with the following:

```js
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './node_modules/@hyas/core/layouts/**/*.html',
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
        'h1',
        'h2',
        'h3',
        'alert-link',
        ...whitelister([
          './node_modules/@hyas/core/assets/scss/app.scss',
        ]),
      ],
    }),
  ],
}
```

### Project directory

`cd` one level up.

```bash
cd ..
```

#### `.editorconfig`

Add a `.editorconfig` file with the following:

```bash
# editorconfig.org

root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

#### `.eslintignore`

Add a `.eslintignore` file with the following:

```bash
assets/js/vendor
node_modules
```

#### `.eslintrc.json`

Add a `.eslintrc.json` file with the following:

```json
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-console": 0,
    "quotes": ["error", "single"],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }
    ]
  }
}
```

#### `.gitignore`

Add a `.gitignore` file with the following:

```js
node_modules
public
resources
.netlify
.hugo_build.lock
```

#### `.markdownlint-cli2.jsonc`

Add a `.markdownlint-cli2.jsonc` file with the following:

```json
{
  "config": {
    "default": true,
    "MD013": false,
    "MD024": false,
    "MD026": false,
    "MD033": false,
    "MD034": false
  },
  "ignores": ["node_modules", "CHANGELOG.md", "README.md"]
}
```

#### `.stylelintignore`

Add a `.stylelintignore` file with the following:

```bash
assets/scss/vendor
node_modules
```

#### `.stylelintrc.json`

Add a `.stylelintrc.json` file with the following:

```json
{
  "extends": "stylelint-config-standard-scss",
  "rules": {
    "no-empty-source": null,
    "string-quotes": "double",
    "scss/comment-no-empty": null,
    "max-line-length": null,
    "scss/at-extend-no-missing-placeholder": null,
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "extend",
          "at-root",
          "debug",
          "warn",
          "error",
          "if",
          "else",
          "for",
          "each",
          "while",
          "mixin",
          "include",
          "content",
          "return",
          "function",
          "tailwind",
          "apply",
          "responsive",
          "variants",
          "screen"
        ]
      }
    ]
  }
}
```

#### `netlify.toml`

Add a `netlify.toml` file with the following:

```toml
[build]
  publish = "public"
  functions = "functions"

[build.environment]
  NODE_VERSION = "16.17.0"
  NPM_VERSION = "8.15.0"

[context.production]
  command = "npm run build"

[context.deploy-preview]
  command = "npm run build -- -b $DEPLOY_PRIME_URL"

[context.branch-deploy]
  command = "npm run build -- -b $DEPLOY_PRIME_URL"

[context.next]
  command = "npm run build"

[context.next.environment]
  HUGO_ENV = "next"

[[plugins]]
  package = "netlify-plugin-submit-sitemap"

 [plugins.inputs]
    baseUrl = "https://hyas.netlify.app/"
    sitemapPath = "/sitemap.xml"
    ignorePeriod = 0
    providers = [
      "google",
      "yandex"
    ]

[dev]
  framework = "#custom"
  command = "npm run start"
  targetPort = 1313
  port = 8888
  publish = "public"
  autoLaunch = false

# Redirects and rewrites — https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file

# Custom headers — https://docs.netlify.com/routing/headers/#syntax-for-the-netlify-configuration-file
[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Content-Security-Policy = "default-src 'self'; manifest-src 'self'; connect-src 'self'; font-src 'self'; img-src 'self' data:; script-src 'self' 'nonce-dXNlcj0iaGVsbG8iLGRvbWFpbj0iaGVua3ZlcmxpbmRlLmNvbSIsZG9jdW1lbnQud3JpdGUodXNlcisiQCIrZG9tYWluKTs=' 'sha256-aWZ3y/RxbBYKHXH0z8+8ljrHG1mSBvyzSfxSMjBSaXk='; style-src 'self'"
    X-Frame-Options = "SAMEORIGIN"
    Referrer-Policy = "strict-origin"
    Feature-Policy = "geolocation 'self'"
    Cache-Control= '''
    public,
    max-age=31536000'''
    Access-Control-Allow-Origin = "*"
```

## 4. Create `app.scss`

In the root of your project, create an empty `assets/scss` directory, and then navigate into it.

```bash
mkdir assets/scss && cd assets/scss
```

Add an `app.scss` file with the following:

```scss
/** Import modern-css-reset */
@import "modern-css-reset/src/reset";

```

## 5. Create your first page

Hyas uses the Hugo content structure. In the root of your project, create an empty `content` directory, and then navigate into it.

```bash
mkdir content && cd content
```

Next, create your new homepage:

{{< tabs "create-homepage" >}}
{{< tab "npm" >}}

```bash
npm run create _index.md
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run create _index.md
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run create _index.md
```

{{< /tab >}}
{{< /tabs >}}

In the frontmatter set `draft: false` and add some content:

```md
---
title: ""
date: 2022-12-07T11:35:33+01:00
draft: false
---

This line is from `content/_index.md` :rocket:

```

## Next steps

If you have followed the steps above, your project directory should now look like this:

```bash
├── assets/
│   └── scss/
│       └── app.scss
├── config/
│   ├── default/
│   │    ├── config.toml
│   │    ├── markup.toml
│   │    ├── module.toml
│   │    └── params.toml
│   ├── babel.config.js
│   └── postcss.config.js
├── content/
│   └── _index.md
├── node_modules/
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .markdownlint-cli2.jsonc
├── .npmrc
├── .stylelintignore
├── .stylelintrc.json
├── netlify.toml
├── package.json
└── package-lock.json (or: yarn.lock, pnpm-lock.yaml, etc.)
```

Congratulations, you’re now set up to use Hyas!

If you followed this guide completely, you can jump directly to [Step 3: Start Hyas]({{< ref "installation#3-start-hyas-" >}}) to continue and learn how to run Hyas for the first time.
