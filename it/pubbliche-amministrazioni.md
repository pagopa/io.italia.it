---
layout: internal
full_width: true
title: IO, un'opportunità per le PA
lang: it
ref: pubbliche-amministrazioni
permalink: /pubbliche-amministrazioni/
description: "IO permette alle diverse Pubbliche Amministrazioni, locali o nazionali, di raccogliere tutti i servizi, le comunicazioni e i documenti in un unico luogo e di interfacciarsi in modo semplice, rapido e sicuro con i cittadini."
redirect_from:
  - /it/pubbliche-amministrazioni/
  - /it/pa/
  - /pa/
  
intro_image: "/assets/img/intro-pa.svg"
intro_primary_text: "Sali a bordo"
intro_primary_link: "https://medium.com/team-per-la-trasformazione-digitale/progetto-io-guida-per-gli-enti-pubblici-integrazione-servizi-pubblica-amministrazione-smartphone-cittadini-f290306a611a"
intro_secondary_text: "Contatta il team di IO"
intro_secondary_link: "mailto:onboarding@io.italia.it"
---

<section class="container">
  <div class="row">
  <div class="col-md-8 internal-page__bodytable">
    <p>
    Il progetto IO parte dall’analisi dalle necessità dei cittadini e costituisce un vantaggio per tutti i soggetti pubblici che erogano servizi digitali.
Fornisce infatti le principali funzioni necessarie all'interazione tra la pubblica amministrazione e i cittadini, grazie anche all'integrazione con le piattaforme abilitanti pagoPA, ANPR e SPID.
    </p>
    <p>Gli enti che aderiscono al progetto potranno sfruttare le open API (Application Programming Interface) della piattaforma di IO per l'invio di notifiche e messaggi ai cittadini, le transazioni economiche, l’invio e la richiesta di documenti dell’utente e la gestione delle preferenze generali.
    </p><p>
    Non sarà più necessario preoccuparsi di chiedere al cittadino di indicare e tenere aggiornato su ogni sito l’indirizzo email, il numero di cellulare, le proprie coordinate bancarie, la modalità preferita per i contatti, la lingua parlata, etc.
    </p><p>
    Per utilizzare il servizio l'ente, che deve avere aderito esplicitamente al progetto IO, deve disporre del codice fiscale del cittadino, e deve ovviamente essere autorizzato ad usarlo. Questo può avvenire per effettivo mandato istituzionale e/o perché il cittadino ha effettivamente sottoscritto appositi termini di utilizzo nei confronti dell'ente.
    </p>
    <a href="#onboarding" class="font-weight-bold " >Rappresenti una PA e vuoi portare i tuoi servizi su IO?</a>
  </div>
  <div class="col-md-4" >
  <aside>
  IO facilita a tutte le pubbliche amministrazioni:
    <div class="row facilita-pa">
      <div class="col-3 text-right"><img class="img-fluid" src="{{ '/assets/img/icon-messages.svg' | relative_url }}" alt="Messaggi"></div>
      <div class="col-9">l’invio di notifiche e messaggi</div>
    </div>
    <div class="row facilita-pa">
      <div class="col-3 text-right"><img class="img-fluid" src="{{ '/assets/img/icon-wallet.svg' | relative_url }}" alt="Pagamenti"></div>
      <div class="col-9">i pagamenti e le transazioni economiche</div>
    </div>
    <div class="row facilita-pa">
      <div class="col-3 text-right"><img class="img-fluid" src="{{ '/assets/img/icon-document.svg' | relative_url }}" alt="Documenti"></div>
      <div class="col-9">l’invio e la richiesta di documenti</div>
    </div>
    <div class="row facilita-pa">
      <div class="col-3 text-right"><img class="img-fluid" src="{{ '/assets/img/icon-settings.svg' | relative_url }}" alt="Preferenze"></div>
      <div class="col-9">le gestione delle preferenze dell’utente</div>
    </div>
    {% comment %}
    <div class="row facilita-pa">
      <a href="{% link it/pubbliche-amministrazioni/partecipa.md %}" class="btn btn-primary mt-4 mb-4">Partecipa alla sperimentazione!</a>
    </div>
    {% endcomment %}
  </aside>
  </div>
  </div>
</section>

{% comment %}
<section class=" pa-schema__wrapper">
    <h2 class="text-center">Le componenti del progetto e i soggetti che le usano</h2>
    <div class="pa-schema__inner">
        <img class="pa-schema" src="{{ '/assets/img/pa-schema-architetturale.png' | relative_url }}" alt="Schema dell'architettura">
    </div>
</section>
{% endcomment %}

<section class="onboarding__wrapper" id="onboarding">
  <div class="container text-center text-white">
    <h2 class="onboarding__title">Come portare i servizi su IO</h2>
    <p class="onboarding__subtitle mt-3">Una <strong>breve guida per tutti gli enti</strong> che desiderano prepararsi a utilizzare  IO come canale di erogazione dei propri servizi.</p>
    <div class="row">
      {% include onboarding/column.html
        ordinal="01"
        title="Identificazione dei servizi"
        text="Identifica <strong>quali servizi</strong> vuoi erogare attraverso IO e prepara i relativi messaggi."
        button_text="Template servizi e messaggi"
        button_link="https://docs.google.com/spreadsheets/u/1/d/1dr3yt3O9_2zkCeEaxu3Riw99D5AhjYCWPpRZIoONbYI/edit?usp=sharing"
        button_type="xls" %}
      {% include onboarding/column.html
        ordinal="02"
        title="Integrazione tecnologica"
        text="Registrati al back-office come sviluppatore, genere  le API e inizia a testare l'integrazione."
        button_text="IO-back office / developer"
        button_link="https://developer.io.italia.it"
        button_type="backoffice" %}
      {% include onboarding/column.html
        ordinal="03"
        title="Responsabilità legali"
        text="Crea il tuo ente nel back-office, identifica il rappresentante legale e esegui gli adempimenti necessari."
        button_text="IO-back office / enti<br/>(in costruzione)"
        button_link="#"
        button_type="backoffice"
        disabled="true" %}
      {% include onboarding/column.html
        ordinal="04"
        title="Comunicazione e lancio"
        text="Definisci una strategia di comunicazione per far conoscere ai tuoi utenti la possibilità di ricevere i servizi che hai sviluppato sull'app IO."
        button_text="Kit comunicazione"
        button_link="https://docs.google.com/document/u/1/d/1UBe_2QSbkHSYLuIqHLecDvtdxn-3IlhC9cIoTS-Cx1Q/edit?usp=sharing"
        button_type="kit" %}
    </div>
    <div class="text-center pb-5">
      <a href="https://medium.com/team-per-la-trasformazione-digitale/progetto-io-guida-per-gli-enti-pubblici-integrazione-servizi-pubblica-amministrazione-smartphone-cittadini-f290306a611a" class="btn btn-white text-primary my-4" target="_blank">Scopri di più!</a>
    </div>
  </div>
</section>

<section class="privacy__wrapper" id="privacy-e-dati-personali">
  <div class="container mw-60">
  <h2>Privacy e dati personali</h2>
  <p class="privacy__subtitle"></p>
  <div class="row">
  <div class="col-md-8">
  <p class="privacy__paragraph">IO si configura come un canale a disposizione delle pubbliche amministrazioni per l’erogazione di alcune componenti (funzioni) dei loro servizi digitali. È per certi aspetti assimilabile all’uso della posta elettronica come canale di comunicazione con i cittadini: la titolarità dei dati personali dell’utente resta in capo agli enti titolari dei servizi.<br/>In questa fase di sperimentazione, tuttavia, il Team Digitale è coinvolto in qualità di contitolare, al fine di gestire al meglio la compliance privacy insieme agli enti aderenti, previa stipula di un accordo di contitolarità tra il Team Digitale e quest’ultimi.</p>
    <p class="privacy__paragraph">IO è stato concepito e sviluppato tenendo conto delle prescrizioni della normativa vigente, incluse le recenti indicazioni del nuovo regolamento privacy (GDPR), in ossequio al principio “privacy by design”.</p>
    <p class="privacy__paragraph">Documenti e messaggi vengono conservati in un database dispiegato su datacenter europei che utilizza l’“encryption at rest”. Il contenuto è presente nei sistemi del provider esclusivamente per il tempo che serve a garantirne l’invio. I dati relativi a transazioni e metodi di pagamento sono trattati da un fornitore certificato PCI.</p>
    <p class="privacy__paragraph">Il cittadino resterà padrone dei propri dati: in qualsiasi momento potrà scegliere di effettuare un download di tutti i dati che lo riguardano o già ora può cancellare la sua iscrizione dal servizio rimuovendo i dati salvati.</p>
  </div>
  <div class="col-md-4 text-center">
  <div class="col__device__privacy">
  <img src="{{ '/assets/img/mockups/it/mockup-privacy.png' | relative_url }}" class="w-100" alt="Schermata Privacy">
  </div>
  </div>
  </div>
  </div>
</section>

<section class="attorno-utente__wrapper" id="attorno-al-cittadino">
  <div class="container mw-60">
  <div class="text-center">
  <img src="{{ '/assets/img/icon-user-green.svg' | relative_url }}" height="148" alt="icona utente">
  </div>
  <h2 class="text-center">Attorno al cittadino</h2>
  <p class="text-center attorno-utente__subtitle">
  Per le PA è sufficiente conoscere il <b>codice fiscale</b> <br>di un utente per usare le funzioni di IO
  </p>
  <p class="text-justify mw-40 attorno-utente__paragraph">
  Oggi per molti enti pubblici conoscere i recapiti o altre informazioni anagrafiche dell’utente è difficile: spesso comporta un notevole sforzo e tempi lunghi.<br>
Lo stesso vale per i cittadini, che sono costretti a completare il proprio profilo e le proprie schede anagrafiche presso il sito di ogni ente di cui vogliono usare i servizi.<br>
IO risolve questo problema consentendo a qualunque ente che conosca il codice fiscale di un cittadino di utilizzare le API di IO per contattare l’utente, inviargli documenti o avvisi, o per leggere le preferenze che il cittadino ha scelto di impostare.<br>
La certezza di avere dall’altra parte esattamente il cittadino è garantita dal processo di autenticazione basato su SPID. Se il cittadino non ha ancora attivato la app, IO si occuperà di recapitare il messaggio attraverso il canale tradizionale, oppure notificherà il servizio che il cittadino non è ancora a bordo.
  </p>
  </div>
</section>

<section class="sicurezza__wrapper" id="sicurezza-e-privacy">
  <img src="{{ '/assets/img/alien.gif' | relative_url }}" width="176" alt="icona alieno" class="sicurezza__alien">
  <div class="container mw-60">
  <h2 class="text-center">Sicurezza e privacy</h2>
  <p class="text-justify mw-40 sicurezza__paragraph">
  IO è un progetto open source. Questo permette di rovesciare il paradigma della “sicurezza tramite segretezza”: i codici dell’applicazione e delle piattaforme di back-end sono infatti a disposizione di tutti, compresi coloro che scelgono di dare una mano segnalando malfunzionamenti ed eventuali bug.</p><p class="text-justified mw-40 sicurezza__paragraph">
Il codice è sviluppato mettendo in pratica le best practice OWASP e vengono utilizzati tool che permettono di monitorare l’integrità delle dipendenze. Ma garantire la sicurezza è un processo continuativo: l’aiuto della community è un fattore importante per il successo delle pratiche di “responsible disclosure”.
</p><p class="text-justify mw-40 sicurezza__paragraph">
L’autenticazione avviene in modo sicuro tramite SPID. Questo permette a IO di non gestire direttamente le password e gli eventuali meccanismi di aggiornamento che vengono delegati agli IDP. Oltre alle credenziali SPID, al fine di garantire un’esperienza utente più efficace, verrà chiesto di impostare un PIN e, se il dispositivo in uso supporta la funzionalità, un meccanismo di riconoscimento biometrico. Sia il PIN che i dati necessari al riconoscimento (es. impronta digitale) non lasciano il dispositivo né vengono condivisi con terze parti.
  </p>
  </div>
  <div class="text-center container sicurezza__aliens">
    <img src="{{ '/assets/img/aliens.png' | relative_url }}" alt="icona alieni" class="img-fluid">
  </div>
</section>

<section class="legge__wrapper" id="la-legge-e-io">
  <div class="container mw-60">
  <h2 class="text-center">La Legge e IO</h2>
  <p class="text-center attorno-utente__subtitle">Le indicazioni del Codice dell’Amministrazione Digitale</p>
  <div class="row">
    <article class="col-sm-6 col-md-3">
    <h1 >Il "Punto di Accesso telematico ai servizi della PA"</h1>
    <p class="legge__paragraph">
  L'articolo 64-bis istituisce il "punto di accesso telematico attivato presso la Presidenza del Consiglio dei Ministri", come il canale attraverso cui tutti i soggetti pubblici devono rendere fruibili i propri servizi.</p>
    </article>
    <article class="col-sm-6 col-md-3">
    <h1 >Il "Diritto a servizi on-line semplici e integrati"</h1>
    <p class="legge__paragraph">
  L'articolo 7 aggiunge che tutti i cittadini hanno il diritto di fruire dei servizi erogati dai soggetti pubblici in forma digitale e in modo integrato, anche tramite il punto di accesso telematico e attraverso dispositivi mobili.</p>
    </article>
    <article class="col-sm-6 col-md-3">
    <h1 >I doveri delle Pubbliche Amministrazioni</h1>
    <p class="legge__paragraph">
  Per rendere effettivo questo diritto tutte le pubbliche amministrazioni devono progettare i propri servizi digitali in modo da garantire l'integrazione e l'interoperabilità con il back-end di IO, riorganizzando e aggiornando i propri servizi a partire dalle reali esigenze degli utenti.</p>
    </article>
    <article class="col-sm-6 col-md-3">
    <h1 >Da quando saranno integrati i servizi?</h1>
    <p class=" legge__paragraph">
  Il correttivo al CAD afferma che tutti i cittadini devono poter usufruire di questo diritto a partire dalla data di attivazione del "punto di accesso telematico", quindi da quando IO uscirà dalla fase beta. </p>
    </article>
  </div>
  </div>
</section>

{% comment %}
<section class="onboard__wrapper" id="onboard">
  <div class="container mw-60">
  <h2 class="text-center">Vuoi portare i tuoi servizi su IO?</h2>
  <p class="text-center onboard__subtitle">Vuoi essere fra le prime PA a utilizzare le funzioni di IO?</p>
  <p class="text-center onboard__paragraph mw-50 mb-4">
  Io è un progetto aperto, qualunque ente pubblico può partecipare alla sperimentazione. In una prima fase avranno priorità i cittadini dei territori in cui è più alta la concentrazione di enti e servizi che partecipano, e gli enti che offrono i servizi al maggior numero di cittadini. Descrivi nella apposita sezione del forum quali sono i servizi per cui vorresti usare le funzioni di IO.
  </p>
  <div class="text-center">
      <a href="{% link it/pubbliche-amministrazioni/partecipa.md %}" class="btn btn-primary mt-4 mb-4">Partecipa alla sperimentazione!</a>
  </div>
  </div>
</section>
{% endcomment %}
