---
layout: naked
title: I numeri dell'app IO
description: In questa pagina trovi le statistiche relative all'utilizzo dell'app IO, aggiornate giornalmente.
lang: it
permalink: /dashboard/
ref: dashboard
---

{% assign current_lang = page.lang | default: site.lang | default: 'it' %}
{% assign t = site.data.t[current_lang] %}

{% include dashboard.html %}