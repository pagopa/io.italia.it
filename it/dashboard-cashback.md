---
layout: naked
title: I numeri dell'app IO
description: In questa pagina trovi le statistiche relative all'utilizzo dell'app IO, aggiornate quotidianamente.
lang: it
permalink: /dashboard/cashback/
ref: dashboard-cashback
image: /assets/img/social-card-stats.jpg
---

{% assign current_lang = page.lang | default: site.lang | default: 'it' %}
{% assign t = site.data.t[current_lang] %}

<div class="py-4"></div>
{% include dashboards/cashback.html %}
