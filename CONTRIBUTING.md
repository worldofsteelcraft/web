# Contribution Guidelines     
This is created due to the lack of CMS options due to the sudden transfer to CF Pages
The plan is to provide this until I find a good CMS option

---
## General Guidelines
- Only Create a page/post to designated section
- Follow file name pattern on related filename
---
## Adding a single page

```
---
category: page
title: "Page Name"
date: 2022-01-29T17:47:06+08:00
description: "Page Description"
draft: false
sitemapExclude: false
unlisted: true
customPagePreviewImage: false
customPagePreviewImageURL: /images/preview-badgesystem.png
singlepage: true
---
{{<html>}}
Raw HTML Content Here
{{</html>}}
```
- Ways to make the page unlisted: ```sitemapExclude: true``` or ```unlisted: true```
- Date is following a 24-Hour Clock 
---

## Adding a post
```
category: post
title: "Post name"
date: 2022-01-29T17:47:06+08:00
description: "Post Description"
draft: false
sitemapExclude: false
unlisted: false
customPagePreviewImage: false
customPagePreviewImageURL: /images/preview-badgesystem.png
```
- Ways to make the page unlisted: ```sitemapExclude: true``` or ```unlisted: true```
- Date is following a 24-Hour Clock
