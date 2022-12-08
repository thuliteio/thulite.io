---
title: "Installation"
description: "One page summary of how to start a new Hyas project."
lead: "Ready to install Hyas? Follow our automatic or manual set-up guide to get started."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "start-here"
weight: 120
toc: true
---

[Manual Setup &rarr;]({{< ref "manual-setup" >}})

## Prerequisites

- __Node.js__ - `v16.17.0` or higher.
- __Text editor__ - We recommend [VS Code](https://code.visualstudio.com/) with the [Hugo Language and Syntax Support](https://marketplace.visualstudio.com/items?itemName=budparr.language-hugo-vscode) extension.
- Terminal - Hyas is accessed through its command-line interface (CLI).

## Installation

`create-hyas` is the fastest way to start a new Hyas project from scratch. It will walk you through every step of setting up your new Hyas project. It allows you to choose from a few different starter templates or provide your own using the `--template` argument.

{{< alert icon="🚀" >}}
Prefer to try Hyas in your browser? [Browse our themes]({{< ref "themes" >}}) and spin up a new Hyas project without ever leaving your browser.
{{< /alert >}}

## 1. Run the Setup Wizard

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

You can run `create-hyas` anywhere on your machine, so there’s no need to create a new empty directory for your project before you begin. If you don’t have an empty directory yet for your new project, the wizard will help create one for you automatically.

If all goes well, you should see a "Done" message followed by some recommended "Next steps".

## 2. Install dependencies

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

## 3. Start Hyas ✨

Hyas uses the Hugo development server that has everything you need for project development. The `dev` command will start the local development server so that you can see your new website in action for the very first time.

Use your favorite package manager to run this command and start the Hugo development server.

{{< tabs "run-development-server" >}}
{{< tab "npm" >}}

```bash
npm run dev
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run dev
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run dev
```

{{< /tab >}}
{{< /tabs >}}

If all goes well, Hyas should now be serving your project on [http://localhost:1313/](http://localhost:1313/)!

The Hugo server will listen for live file and configuration changes in your project directory, so you will not need to restart the server as you make changes during development.

If you aren't able to open your project in the browser, go back to the terminal where you ran the `dev` command and look to see if an error occurred, or if your project is being served at a different URL than the one linked to above.

## Next Steps

Success! You are now ready to start building with Hyas! 🥳

Here are a few topics that we recommend exploring next. You can read them in any order. You can even leave our documentation for a bit and go play in your new Hyas project codebase, coming back here whenever you run into trouble or have a question.

- __Add a plugin__: Learn how to extend Hyas with support for SEO, images, CMSs and more in our [Plugins guide]({{< ref "docs/guides/plugins" >}}).
- __Deploy your site__: Learn how to build and deploy a Hyas project to the web in our [Deployment guide]({{< ref "deploy" >}}).
- __Understand your codebase__: Learn more about Hyas' project structure in our [Project Structure guide]({{< ref "project-structure" >}}).
{.list-books}
