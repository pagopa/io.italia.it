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

<form id="entiservizi__search" action="#" tabindex="0" >
  <div class="entiservizi__search__inner">
    <input pattern="^[A-Za-zÀ-ú\s]+$" role="searchbox"
           aria-placeholder="Cerca un Ente inserendo almeno tre caratteri, poi batti invio"
           type="search" id="entiservizi__searchstring" placeholder="Cerca un ente" maxlength="30" minlength="3" required>
    <button type="submit" id="entiservizi__submit" role="button" aria-label="Cerca"><img  src="/assets/img/icon-search.svg" alt="Cerca" aria-hidden="true" ></button>
  </div>
  <div class="entiservizi__search__tip" aria-hidden="true">inserisci almeno 3 caratteri e avvia la ricerca</div>
  <div class="entiservizi__search__done"><div>Risultati della ricerca per "<span id="entiservizi__searched"></span>"</div><a href="#" title="Annulla" id="entiservizi__searchreset">annulla</a></div>
</form>
<div id="loading">
<div class="progress-spinner progress-spinner-active"></div>
<span>sto caricando enti e servizi locali:
  <br>attendi qualche secondo</span>
</div>

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
<div class="entiservizi__list__search">
</div>
<div class="entiservizi__list" aria-label="Elenco degli Enti">
{% raw %}
<script id="entiservizi-template" type="text/x-handlebars-template">
{{#each this}}
  <div class="entiservizi__item {{#lazy @index}}lazy{{/lazy}} ec{{getFc this}}">
    <a class="entiservizi__title"
       tabIndex="1"
       role="button"
       aria-controls="s{{getFc this}}"
       aria-expanded="false"
       id="ente{{getFc this}}"
       href="#" onClick="getServices('{{getFc this}}');return false;">{{getName this}}
      <div class="entiservizi__logo">
      <img class=""
           aria-hidden="true"
           {{#lazy @index}}
            src="/assets/img/blank-32.png"
            data-src="{{getFc this}}.png"
           {{/lazy}}
           {{#nolazy @index}}
           style="display: inline;"
           src="{{setImgSrc this}}"
           {{/nolazy}}
           onerror="this.style.display='none'"
           alt="{{getName this}}">
      </div>
    </a>
    <div class="entiservizi__services services{{getFc this}}" id="s{{getFc this}}" >
    </div>
    <div class="entiservizi__spinner">
    <div class="progress-spinner progress-spinner-double  progress-spinner-active ">
        <div class="progress-spinner-inner"></div>
        <div class="progress-spinner-inner"></div>
    </div>
    </div>
  </div>
{{/each}}
</script>
<script id="listservices-template" type="text/x-handlebars-template">
<ul class="entiservizi__serv__list">
    {{#each s}}
      <li  >
        <div class="entiservizi__serv__title" onClick="sendMessagesToRN('{{i}}')"
             tabIndex="2"
             role="button"
             >{{n}}
          {{#arriving q}}
          <span class="entiservizi__serv__quality">In arrivo</span>
          {{/arriving}}
        <img alt="Visualizza i dettagli del servizio" class="entiservizi__icon" width="11" height="16"
            aria-hidden="true"
            srcset="
            {{site.imagesurl}}/assets/img/icon-right-2x.png 2x,
            {{site.imagesurl}}/assets/img/icon-right.png 1x
            "
            src="{{site.imagesurl}}/assets/img/icon-right.png"
            >
        </div>
      </li>
    {{/each}}
</ul>
</script>
{% endraw %}
</div>
<div class="entiservizi__problem">
    <div>
            <img alt="Nessun risultato" class=""
                srcset="
                {{site.imagesurl}}/assets/img/question-2x.png 2x,
                {{site.imagesurl}}/assets/img/question.png 1x
                "
                src="{{site.imagesurl}}/assets/img/question.png"
                >
    <p>Ci sono problemi nel download dei dati, riprova tra qualche minuto.</p>
    </div>
</div>
