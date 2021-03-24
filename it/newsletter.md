---
layout: naked
title: La Newsletter
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

<div class="text-center p-5 m-5">
<h3><a href="/" title="Homepage">Homepage</a></h3>
</div>
