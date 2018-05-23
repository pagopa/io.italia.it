---
layout: internal
title: Informazioni per gli sviluppatori
subtitle:
---

<section class="container mw-60">
  <h2 class="h3 mt-5">Intro</h2>
  <p>Lo sviluppo open e collaborativo, oltre ad essere uno dei punti chiave del <a href="https://developers.italia.it" target="_blank">nuovo modo di fare software</a> nella Pubblica Amministrazione italiana, si adatta perfettamente a questa iniziativa, che mira ad agevolare la relazione tra i cittadini e la Pubblica Amministrazione (PA) attraverso la creazione di una piattaforma di componenti riutilizzabili in grado di rendere i servizi digitali più efficaci.</p>
  <p>I <a href="https://github.com/teamdigitale/digital-citizenship/blob/master/CONTRIBUTING.it.md#repository-github" target="_blank">componenti</a> sono pubblici, e qualunque fornitore di servizi può integrali o proporre miglioramenti. Ogni modulo potrà quindi essere riutilizzato dalle amministrazioni che erogano servizi digitali al fine di garantire un’esperienza utente coerente nonché risparmiare sulla spesa richiesta da un’implementazione tout-court di tali tecnologie trasversali.</p>
  <p>L’interfaccia è progettata seguendo il metodo proposto dalle <a href="https://designers.italia.it" target="_blank">linee guida per il design dei servizi pubblici</a> e utilizzano i kit di designers italia, così da mettere alla prova e testare sul campo gli strumenti di prototipazione e gli altri kit che le altre Pubbliche Amministrazione potranno a loro volta utilizzare.</p>

  <h2 class="h3">Reference implementation</h2>
  <p>La app ed il suo backend vogliono essere un esempio da seguire per le Pubbliche Amministrazioni che si approcciano a problemi e contesti simili.</p>
  <p>Il progetto IO vuole porsi quindi come implementazione di riferimento per l'integrazione con le piattaforme previste dal <a href="https://pianotriennale-ict.italia.it/" target="_blank">piano di trasformazione digitale della PA</a>:
    <ul>
      <li>
        <a href="https://www.spid.gov.it/" target="_blank">SPID</a>, il Sistema Pubblico di Identità Digitale</li>
      <li><a href="http://www.agid.gov.it/agenda-digitale/pubblica-amministrazione/pagamenti-elettronici" target="_blank">PagoPA</a>, il sistema dei pagamenti a tutte le Pubbliche Amministrazioni</li>
      <li><a href="https://www.anpr.interno.it/portale/" target="_blank">ANPR</a>, l'Anagrafe Nazionale della Popolazione Residente</li>
      <li>il <a href="https://pianotriennale-ict.italia.it/piattaforme-abilitanti/" target="_blank">Sistema di avvisi e notifiche di cortesia</a></li>
    </ul>
  </p>
  <h2 class="h3 mt-5">Approccio Agile</h2>
  <p>Sia in fase di progettazione che di implementazione l’approccio scelto è quello “agile”, che ben si sposa con il contesto dinamico del progetto: tutti i requisiti e le caratteristiche non possono (e non vogliono) essere definiti completamente up-front.</p>
  <p>Analisi e progettazione si svolgono pertanto tramite l’ausilio di strumenti ormai consolidati nel mondo del privato, ma che fino ad ora hanno trovato poco spazio in quello della Pubblica Amministrazione, quali sprint settimanali, stand-up meeting, strumenti di collaborazione che permettono  la comunicazione tra i membri del team “diffuso”.</p>
  <h2 class="h3 mt-5">Strumenti per gestire il workflow</h2>
  <p>Tutto il processo di progettazione e sviluppo dell’applicazione avviene in maniera aperta. Chiunque può monitorare il processo di sviluppo. I tool che supportano la progettazione e lo sviluppo dell’applicazione sono:
    <ul>
      <li><b><a href="https://github.com/teamdigitale/digital-citizenship/blob/master/CONTRIBUTING.it.md#repository-github" target="_blank">Github</a></b><br>
        Tutto il codice sorgente dell’applicazione e la relativa documentazione, così come la maggior parte del codice che è necessario alla infrastruttura su cui poggia l’applicazione, sono disponibili su GitHub, la più grande piattaforma di condivisione di codice esistente.</li>
      <li><b><a href="https://github.com/teamdigitale/digital-citizenship/blob/master/CONTRIBUTING.it.md#pianificazione-delle-attivit%C3%A0-pivotal-tracker-ita" target="_blank">Pivotal Tracker</a></b><br>
        Per pianificare le attività e tracciarne il progresso il team di IO usa Pivotal Tracker, definendo le feature della applicazione e del backend utilizzando il metodo delle user stories raggruppate in epics. Questa tecnica consente di progettare in maniera agile le funzionalità del servizio senza perdere mai di vista l’impatto reale di ciascuna attività sull’esperienza utente. </li>
      <li><b><a href="https://github.com/teamdigitale/digital-citizenship/blob/master/CONTRIBUTING.it.md#google-drive-ita" target="_blank">Google Documents</a></b><br>
        Una buona documentazione è alla base di qualunque progetto aperto: lo strumento di scrittura collaborativa offerto gratuitamente da Google consente di lavorare a più mani sullo stesso documento, aggiornandolo con facilità per tenere traccia delle evoluzioni del progetto e consentendo facilmente di includere nuovi collaboratori.</li>
      <li><b><a href="https://github.com/teamdigitale/digital-citizenship/blob/master/CONTRIBUTING.it.md#slack" target="_blank">Canale slack</a></b><br>
        Slack è ad oggi lo strumento più efficiente e versatile per lavorare a distanza. Ogni conversazione che riguarda il progetto di cittadinanza digitale avviene in canali slack pubblici: questo implica che chiunque voglia partecipare alla conversazione o capire come si è arrivati a determinate scelte progettuali può in ogni momento entrare, anche solo come osservatore, e leggere le conversazioni presenti e passate, e partecipare, perchè no, a quelle future.
      </li>
    </ul>
  </p>
  <h2 class="h3 mt-5">Infrastruttura e cloud</h2>
  <p>Abbiamo compiuto scelte infrastrutturali, basate per quanto possibile su tecnologie open source, che consentono di minimizzare i blocchi dovuti ai fornitori e facilitare la migrazione verso servizi PaaS erogati da fornitori diversi in Cloud o di cui è possibile l'installazione on-premise. L’intera infrastruttura è “codificata”, documentata e riproducibile eseguendo uno script da chiunque abbia un account su Azure. Sono a piano attività volte a generalizzare le scelte infrastrutturali consentendo di migrare l’intera piattaforma presso cloud provider completamente open source.</p>
  <h2 class="h3 mt-5">Contributori</h2>
  <p>Ogni singolo individuo che partecipa al progetto lo fa in prima persona, mettendoci la faccia, ed avendo la garanzia del riconoscimento del proprio lavoro, come da tradizione nel mondo open source, sia che sia un privato cittadino che lavori presso una azienda o presso un ente pubblico.</p>
  <p>La partecipazione attiva al progetto fornisce l’opportunità di beneficiare di una metodologia di lavoro e di una cultura di team condivisa, e ti permette di entrare in contatto con professionisti del settore, favorendo così una crescita personale e professionale.</p>
  <p>Contribuire a codice che è pubblico, visibile a tutti, è spesso sinonimo di una migliore qualità del codice stesso; lavorare in “open” aumenta la trasparenza e la solidità delle scelte adottate, fornendo a chiunque l’opportunità di condividere le proprie competenze e suggerire miglioramenti di processo e di sviluppo.</p>
  <p>Con il tuo contributo ad IO potrai avere un impatto concreto sul rapporto con la PA di milioni di cittadini, semplificando così la quotidianità dei tuoi familiari e amici.</p>
  <h2 class="h3 mt-5">Scopri di più, e partecipa</h2>
  <p>Per seguire lo sviluppo di IO e partecipare puoi leggere il <a href="https://github.com/teamdigitale/digital-citizenship/blob/master/CONTRIBUTING.it.md" target="_blank">file di documentazione</a> che illustra in maniera estensiva come partecipare. Se vuoi semplicemente integrarti con le API di IO, l’indirizzo del portale sviluppatori è: <a href="https://developer.cd.italia.it/" target="_blank">https://developer.cd.italia.it/</a>.</p>
  <p class="text-center"><a class="btn btn-primary" href="https://github.com/teamdigitale/digital-citizenship/blob/master/CONTRIBUTING.it.md">Come partecipare</a></p>
  <p>Oppure partecipa al canale <a href="https://developersitalia.slack.com/messages/CA70BM37X" target="_blank">#io-devel</a> sullo <a href="https://slack.developers.italia.it/" target="_blank">Slack di Developers Italia</a>!</p>
</section>
