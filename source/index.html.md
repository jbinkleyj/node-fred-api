---
title: API Reference

language_tabs:
  - javascript

toc_footers:
  - <a href='https://research.stlouisfed.org/docs/api/api_key.html'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - categories
  - errors

search: true
---

# Introduction

Welcome to the Fred Library/Api documentation for those who are using this with the node-fred library. You must obtain an API key through this [website](https://research.stlouisfed.org/docs/api/api_key.html)

# Authentication

> To authorize, use this code:

You must have an API to run all requests.


```javascript
import Fred from 'node-fred'

const fred = new Fred(API_KEY);
```

> Make sure to replace `API_KEY` with your API key.


<aside class="notice">
You must replace <code>API_KEY</code> with your personal API key.
</aside>