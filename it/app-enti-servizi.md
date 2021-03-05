---
title: Enti - Servizi
description:
layout: self
ref: app-enti-servizi
permalink: /app-content/enti-servizi.html
body_class: "loading"
index: no-index
assets:
  css: "/assets/entiservizi.css"
  js:
    - "/assets/js/vendor/handlebars.min.js"
    - "/assets/js/enti.js"
---

<form id="entiservizi__search">
  <div class="entiservizi__search__inner">
    <input pattern="^([a-zA-ZÀ-ú]+\s)*[a-zA-ZÀ-ú]+$" type="text" id="entiservizi__searchstring" placeholder="Cerca un ente o un servizio" maxlength="30" minlength="3">
    <button type="submit" id="entiservizi__submit"><img  src="/assets/img/icon-search.svg" alt="Cerca" ></button>
  </div>
  <div class="entiservizi__search__tip">inserisci almeno 3 caratteri e avvia la ricerca</div>
  <div class="entiservizi__search__done"><div>Risultati della ricerca per "<span id="entiservizi__searched"></span>"</div><a href="#" title="Annulla" id="entiservizi__searchreset">annulla</a></div>
</form>
<div id="loading">
<span>Caricamento in corso...</span>
</div>

<script id="entiservizi-template" type="text/x-handlebars-template">
    <h2 class="entiservizi__title"><div class="entiservizi__logo"></div>{% raw %}{{o}}{% endraw %}</h2>
    <div class="entiservizi__services">
      <ul class="entiservizi__serv__list">
        {% raw %}
        {{#each s}}
          {{#each this}}
          <li>
            <div class="entiservizi__serv__title" data-load-service="{{@key}}" onClick="loadService(this)">{{this}}
            <img class="entiservizi__icon" src="/assets/img/icon-right.svg" alt="Espandi" >
            </div>
          </li>
          {{/each}}
        {{/each}}
        {% endraw %}
      </ul>
    </div>
</script>
<div class="entiservizi__searching">
  <div>sto cercando fra gli enti e servizi:
  <br>attendi qualche secondo
  </div>
</div>
<div class="entiservizi__noresults">
  <div>Non &egrave; stato possibile trovare nessun ente o servizio con la stringa ricercata
  </div>
</div>
<div class="entiservizi__list">
</div>
