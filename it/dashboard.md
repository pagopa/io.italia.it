---
layout: naked
title: Dashboard
description: Le novità, gli aggiornamenti e le informazioni sull’app dei servizi pubblici
lang: it
image: /assets/img/social-card-newsletter.jpg
permalink: /dashboard/
ref: dashboard
---

{% assign current_lang = page.lang | default: site.lang | default: 'it' %}
{% assign t = site.data.t[current_lang] %}

{% include dashboard.html %}