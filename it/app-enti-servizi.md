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
    - "/assets/js/entiservizi.js"
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
<div class="progress-spinner progress-spinner-active"></div>
<span>sto caricando enti e servizi locali:
  <br>attendi qualche secondo</span>
</div>

<script id="entiservizi-template" type="text/x-handlebars-template">
    <h2 class="entiservizi__title">{% raw %}{{o}}{% endraw %}<div class="entiservizi__logo"></div></h2>
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
  <div class="progress-spinner progress-spinner-active"></div>
  <div>sto cercando fra gli enti e servizi locali:
  <br>attendi qualche secondo
  </div>
</div>
<div class="entiservizi__noresults">
  <div>
  <img class="entiservizi__icon--noresults" src="/assets/img/icon-no-results.svg" alt="Nessun risultato" >
  <p>non ho trovato servizi<br>corrispondenti a questa ricerca</p>
  </div>
</div>
<div class="entiservizi__list">
</div>
