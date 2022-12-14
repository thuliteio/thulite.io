---
title: "Microsoft Azure"
description: "Deploy your Hyas Site to Microsoft Azure"
lead: "Deploy your Hyas Site to Microsoft Azure."
date: 2022-12-14T08:39:57+01:00
lastmod: 2022-12-14T08:39:57+01:00
draft: false
images: []
menu:
  docs:
    parent: "deploy"
weight: 475
toc: true
url: "/docs/basics/deploy/microsoft-azure/"
_build:
  list: never
  publishResources: true
  render: always
---

[Azure](https://azure.microsoft.com/) is a cloud platform from Microsoft. You can deploy your Hyas site with Microsoft Azure’s [Static Web Apps](https://aka.ms/staticwebapps) service.

## Prerequisites

To follow this guide you will need:

- An Azure account and a subscription key. [Create a free Azure account](https://azure.microsoft.com/free).
- Your app code pushed to [GitHub](https://github.com/).
- The [SWA Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps) in [Visual Studio Code](https://code.visualstudio.com/).

## How to deploy

1. Open your project in VS Code.
2. Open the Static Web Apps extension, sign in to Azure, and click the **+** button to create a new Static Web App. You will be prompted to designate which subscription key to use.
3. Follow the wizard started by the extension to give your app a name, choose a framework preset, and designate the app root (usually `/`) and built file location `/public`. The wizard will run and will create a [GitHub Action](https://github.com/features/actions) in your repo in a `.github` folder.

The GitHub Action will deploy your app (you can see its progress in your repo’s Actions tab on GitHub). When successfully completed, you can view your app at the address shown in the SWA Extension’s progress window by clicking the **Browse Website** button (this will appear after the GitHub Action has run).

[&larr; Deploy]({{< ref "deploy" >}})
