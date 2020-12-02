---
layout: internal-simple
title: In quali punti vendita partecipi al Cashback
image: "/assets/img/cashback/social-card-cashback.jpg"
pre-title: Dall'8 Dicembre
description: Lista degli issuer convenzionati al Cashback di Stato
subdescription:
permalink: /cashback/acquirer/
lang: it
ref: cashback-issuer
introduction_slides:
faq:
  - title: "Cosa s’intende per Acquirer Convenzionato?"
    body: "L’Acquirer Convenzionato è il soggetto che ha concluso un accordo con l’Esercente per l’utilizzo di strumenti di pagamento elettronici attraverso dispositivi di accettazioni fisici e che ha sottoscritto una convenzione con la società PagoPA S.p.A. - la società incaricata dal Ministero dell’Economia e delle Finanze per lo sviluppo e la gestione della piattaforma tecnologica alla base del programma - per partecipare al Cashback."
    cat:
---

<div class="container container--mid text-primary my-5 my-md-0">
<h1 class="mb-2 mb-md-3">{{page.title}}</h1>
<p class="mb-2 mr-0 mr-md-5">
All’avvio del Cashback, alcuni Esercenti potrebbero non disporre da subito di un dispositivo per l’utilizzo degli strumenti di pagamento elettronici che ti consentono di partecipare all’iniziativa.<br>
Infatti, affinché una tua transazione possa essere acquisita ai fini del programma, è necessario che l’Esercente abbia concluso un accordo con un “<b>Acquirer Convenzionato</b>”.</p>
<p>
Per questo, prima di eseguire un pagamento presso un punto vendita, <b>verifica se partecipa al Cashback</b>.
</p>
</div>

{% capture content_include %}

<h2 class="text-primary">Acquirer Convenzionati</h2>
<p>
La lista degli Acquirer Convenzionati è in divenire e in costante aggiornamento, con l’obiettivo di darti la possibilità di partecipare al Cashback presso la quasi totalità dei punti vendita sul territorio italiano. </p>

{% endcapture %}
{% include grid-card.html source='acquirer-convenzionati' nameClassStyle='m-0' itemClassStyle='' content=content_include %}

{% include faq.html pagesource=page.faq %}

{% include_relative include-footer.html %}
