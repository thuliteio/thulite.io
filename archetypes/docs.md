---
title: "{{ replace .Name "-" " " | title }}"
description: "{{ .Site.Params.description }}"
lead: "{{ .Site.Params.description }}"
date: {{ .Date }}
draft: true
images: ["image-hyas.jpg"]
menu: 
  docs:
    parent: ""
weight: 00
toc: false
---
