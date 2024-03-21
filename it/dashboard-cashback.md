---
layout: naked
title: I numeri del Cashback
description: In questa pagina trovi le statistiche relative alla partecipazione al programma Cashback, aggiornate quotidianamente
lang: it
permalink: /cashback/dashboard/
ref: dashboard-cashback
image: /assets/img/cashback/social-card-cashback-dashboard.jpg
extra_scripts:
  - /assets/js/dashboard/_next/static/chunks/polyfills.js
  - /assets/js/dashboard/_next/static/chunks/webpack.js
  - /assets/js/dashboard/_next/static/chunks/main.js
  - /assets/js/dashboard/_next/static/chunks/pages/_app.js
---

{% assign current_lang = page.lang | default: site.lang | default: 'it' %}
{% assign t = site.data.t[current_lang] %}

<div class="py-4"></div>
<div class="container container--mid pb-3">
<a href="/dashboard/" title="Tutti i dati dell'App IO" class="btn btn-primary">&larr; Tutti i dati dell'App IO</a>
</div>
{% include dashboards/cashback.html %}
