---
title: "Functions"
description: "Add Netlify Functions."
lead: "Add Netlify Functions."
date: 2022-01-12T11:01:29+01:00
lastmod: 2022-01-12T11:01:29+01:00
draft: false
images: []
menu:
  docs:
    parent: "integrations"
weight: 371
toc: true
---

```bash
./functions/
```

See also the Netlify docs: [Functions overview](https://docs.netlify.com/functions/overview/)

## Example

```bash
./functions/hi-from-lambda.js
```

```js
exports.handler = (event, context, callback) => {
  callback (null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Hi from Lambda.',
    }),
  });
}
```
