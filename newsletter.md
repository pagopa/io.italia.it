---
permalink: /newsletter.html
title: La Newsletter di IO
description: Le novità, gli aggiornamenti e le informazioni sulle nuove funzionalità dell'app dei servizi pubblici
lang: it
image: /assets/img/social-card-newsletter.jpg
---
{% assign current_lang = page.lang | default: site.lang | default: 'it' %}
{% assign t = site.data.t[current_lang] %}
<html lang="it">
  <meta charset="utf-8">
  <title>Redirecting&hellip;</title>
  <link rel="canonical" href="https://io.italia.it/">
  {%- include social.html -%}
  <script>location="https://io.italia.it/"</script>
  <meta http-equiv="refresh" content="0; url=https://io.italia.it/">
  <meta name="robots" content="noindex">
  <h1>Redirecting&hellip;</h1>
  <a href="https://io.italia.it/">Click here if you are not redirected.</a>
</html>