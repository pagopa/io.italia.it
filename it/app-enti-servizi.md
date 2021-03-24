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

<form id="entiservizi__search" action="#">
  <div class="entiservizi__search__inner">
    <input pattern="^[A-Za-zÀ-ú\s]+$" type="search" id="entiservizi__searchstring" placeholder="Cerca un ente o un servizio" maxlength="30" minlength="3" required>
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
    <h2 class="entiservizi__title">{% raw %}{{o}}{% endraw %}<div class="entiservizi__logo">
      {% raw %}
      <img class=""
           {{#if nolazy}}
           style="display: inline;"
           src="{{setImgSrc fc}}"
           {{/if}}
           {{#unless nolazy}}
           src="/assets/img/blank-32.png"
           data-src="{{fc}}.png"
           {{/unless}}
           onerror="this.style.display='none'"
           alt="{{o}}">
      {% endraw %}
      </div>
    </h2>
    <div class="entiservizi__services">
      <ul class="entiservizi__serv__list">
        {% raw %}
        {{#each s}}
          {{#each this}}
          <li >
            <div class="entiservizi__serv__title" onClick="sendMessagesToRN('{{@key}}')">{{this}}
            <img alt="Espandi" class="entiservizi__icon" width="11" height="16"
                srcset="
                {{site.imagesurl}}/assets/img/icon-right-2x.png 2x,
                {{site.imagesurl}}/assets/img/icon-right.png 1x
                "
                src="{{site.imagesurl}}/assets/img/icon-right.png"
                >
            </div>
          </li>
          {{/each}}
        {{/each}}
        {% endraw %}
      </ul>
    </div>
</script>
<div class="entiservizi__searching">
  <div>
    <div class="progress-spinner progress-spinner-active centerbymargin"></div>
    <div>sto cercando fra gli enti e servizi locali:
    <br>attendi qualche secondo
    </div>
  </div>
</div>
<div class="entiservizi__noresults">
  <div>
  <img alt="Nessun risultato" class=""
                srcset="
                {{site.imagesurl}}/assets/img/question-2x.png 2x,
                {{site.imagesurl}}/assets/img/question.png 1x
                "
                src="{{site.imagesurl}}/assets/img/question.png"
                >
  <p>Nessun risultato trovato</p>
  </div>
</div>
<div class="entiservizi__list">
</div>
