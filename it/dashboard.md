---
layout: naked
title: I numeri dell'app IO
description: In questa pagina trovi le statistiche relative all'utilizzo dell'app IO, aggiornate quotidianamente.
lang: it
permalink: /numeri/
ref: dashboard
image: /assets/img/social-card-stats.jpg
redirect_from:
  - /dashboard/
extra_scripts:
  - /assets/js/dashboard/_next/static/chunks/polyfills.js
  - /assets/js/dashboard/_next/static/chunks/webpack.js
  - /assets/js/dashboard/_next/static/chunks/main.js
  - /assets/js/dashboard/_next/static/chunks/pages/_app.js
---

{% assign current_lang = page.lang | default: site.lang | default: 'it' %}
{% assign t = site.data.t[current_lang] %}

{% include dashboard.html %}
