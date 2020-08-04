---
title: Archivio versioni
subtitle: 
layout: self
ref: app-tos-privacy-archive
permalink: /app-content/index-tos.html
index: no-index
---
{% assign pages = site.pages | where_exp: "item", "item.vers > 0" | sort: "vers" | reverse  %}

{:.d-startup}
### Archivio "Informativa privacy e Termini e condizioni d’uso"

{:.d-startup}
<ul>
{% for pag in pages%}
    <li><a href="{{pag.url}}">versione n.{{pag.vers}} ({{pag.updated}})</a></li>
{% endfor %}
</ul>