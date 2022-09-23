---
title: "Updating"
description: "Regularly update the installed npm packages to keep your Hyas website stable, usable, and secure."
lead: "Regularly update the installed npm packages to keep your Hyas website stable, usable, and secure."
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu:
  docs:
    parent: "help"
weight: 313
toc: true
---

{{< alert icon="💡" text="Learn more about <a href=\"https://docs.npmjs.com/about-semantic-versioning\">semantic versioning</a> and <a href=\"https://docs.npmjs.com/cli/v6/using-npm/semver#advanced-range-syntax\">advanced range syntax</a>." />}}

## Check for outdated packages

```bash
npm outdated
```

## Update npm packages

Bump the versions in the `devDependencies` section of `./package.json`.

Next, run:

```bash
npm update
```

## Update Hugo

In `./package.json`, bump the Hugo version:

```json
"otherDependencies": {
  "hugo": "0.91.2"
}
```

Next, run:

```bash
npm install
```

## Clean install

```bash
npm run clean:install
```

Next, run:

```bash
npm install
```

## Resources

- [npm-outdated](https://docs.npmjs.com/cli/v6/commands/npm-outdated)
- [npm-update](https://docs.npmjs.com/cli/v6/commands/npm-update)
