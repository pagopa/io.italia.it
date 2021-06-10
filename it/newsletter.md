---
layout: naked
title: La Newsletter
has_recaptcha: true
description: Le novità, gli aggiornamenti e le informazioni sull’app dei servizi pubblici
lang: it
image: /assets/img/social-card-newsletter.jpg
permalink: /newsletter/
redirect_from:
  - /it/newsletter/
---

{% assign current_lang = page.lang | default: site.lang | default: 'it' %}
{% assign t = site.data.t[current_lang] %}

{%- include home/section-8.html -%}
