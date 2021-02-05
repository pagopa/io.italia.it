---
layout: internal-simple
title: Quali metodi di pagamento puoi salvare su IO
image: "/assets/img/cashback/social-card-cashback.jpg"
pre-title: D
description: Lista dei metodi di pagamento attualmente attivi su IO
subdescription:
permalink: /metodi-pagamento/
lang: it
ref: cashback-metodi
introduction_slides:
grid-items:
  - title: Abilita la tua carta agli acquisti online
    body: "[Se la tua banca è supportata](https://io.italia.it/cashback/carta-non-abilitata-pagamenti-online), puoi aggiungere la carta anche se non ha il codice di sicurezza e usarla per il Cashback."
    img: /assets/img/cashback/metodi/ic-toggle.svg
  - title: Aggiungi tutti i circuiti riportati sulla carta
    body: Se la tua carta PagoBANCOMAT ha più di un logo, segui le istruzioni in app e aggiungi il secondo circuito.
    img: /assets/img/cashback/metodi/ic-card.svg
  - title: Apple Pay e Google Pay sono in arrivo
    body: Nel frattempo, aggiungi e attiva su IO la tua carta fisica se vuoi che gli acquisti siano validi per partecipare al Cashback.
    img: /assets/img/cashback/metodi/ic-device.svg
---

<div class="container container--mid  my-5 my-md-0">
<h1 class="mb-2 mb-md-3 text-primary">{{page.title}}</h1>
<p class="mb-2 mr-0 mr-md-5 text-primary">
In questa pagina, trovi il riepilogo dei metodi di pagamento che puoi salvare sull’app IO, all’interno della sezione <b>Portafoglio</b>. Per ciascuna tipologia di carta o altro metodo di pagamento, puoi verificare come è possibile utilizzarli direttamente dall’app IO e a quali servizi è possibile associarli.
</p>
<div class="my-3 my-md-4">
<a class="btn btn-primary text-uppercase px-3 px-md-5 mr-2 mb-2 mb-md-0" href="#cards" title="Carte supportate">Carte supportate</a>
<a class="btn btn-outline-primary text-uppercase px-3 px-md-5" href="#apps" title="App e altri metodi">App e altri metodi</a>
</div>
<p class="font-size-reset">
La mappatura dei metodi di pagamento <b>non è esaustiva</b>, poiché al momento si basa su quelli che abbiamo già avuto modo di testare internamente con il supporto delle banche e degli altri soggetti emettitori coinvolti. 
Per questo, la lista si popolerà progressivamente, in linea con la roadmap di sviluppo dell’app IO e di nuove funzionalità che aggiungeremo nel tempo. 
</p>
<div class="row my-2 my-md-5">
    {% for item in page.grid-items %}
        <div class="col-md-4 mb-3 mb-md-0">
            <div class="bg-white rounded-l shadow h-100 py-4 px-2 px-md-5 ">
                <div class="d-flex justify-content-center" style="height: 80px"><img class="align-self-center" src="{{item.img}}" alt="{{item.title}}"></div>
                <div class="text-primary font-weight-bold text-center my-2">{{item.title}}</div>
                <div class="font-size-reset text-center">{{item.body | markdownify}}</div>
            </div>
        </div>
    {% endfor %}
</div>
</div><!--/.container-->

{% include_relative widget-metodi-supportati.html %}

{% include_relative include-footer.html %}
