---
title: Archivio versioni
subtitle:
layout: self
ref: app-tos-privacy-archive
permalink: /app-content/index-tos.html
index: no-index
assets:
  js:
    - "/assets/js/tos.js"
  css: "/assets/tos.css"
---

{% assign pages = site.pages | where_exp: "item", "item.vers > 0 " | where_exp: "item", "item.ref contains 'app-tos-privacy'" | sort: "vers" | reverse  %}

{:.d-startup}

### Archivio "Informativa privacy e Termini e condizioni d’uso"

{:.d-startup}

<ul>
{% for pag in pages offset: 1 %}
    <li><a href="{{pag.url}}">versione n.{{pag.vers}} ({{pag.updated}})</a></li>
{% endfor %}
</ul>
