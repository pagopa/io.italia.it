---
title: Enti - Servizi
description:
layout: self
ref: app-enti-servizi
permalink: /app-content/enti-servizi.html
body_class: "loading"
assets:
  css: "/assets/entiservizi.css"
  js:
    - "/assets/js/vendor/handlebars.min.js"
    - "/assets/js/enti.js"
---

<form id="entiservizi__search">
  <div class="entiservizi__search__inner">
    <input type="text" id="entiservizi__searchstring" placeholder="Cerca un ente o un servizio" maxlength="30" minlength="3">
    <button type="submit" id="entiservizi__submit"><img  src="/assets/img/icon-search.svg" alt="Cerca" ></button>
  </div>
</form>
<div id="loading">
<span>Caricamento in corso...</span>
</div>

<script id="entiservizi-template" type="text/x-handlebars-template">
    <h2 class="entiservizi__title">{% raw %}{{o}}{% endraw %}</h2>
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

<div class="entiservizi__list">
</div>
