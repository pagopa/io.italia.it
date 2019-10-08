---
layout: internal
full_width: true
title: Advantages for the PA
subtitle: Common functions available to all public services
description: "IO allows different local or national public administrations to collect all services, communications and documents in one place and to communicate with citizens in a simple, rapid and safe manner."
lang: en
ref: pubbliche-amministrazioni
permalink: /en/public-administrations/
redirect_from:
  - /public-administrations/

intro_image: "/assets/img/intro-pa.svg"
intro_primary_text: "Join us"
intro_primary_link: "https://medium.com/team-per-la-trasformazione-digitale/progetto-io-guida-per-gli-enti-pubblici-integrazione-servizi-pubblica-amministrazione-smartphone-cittadini-f290306a611a"
intro_secondary_text: "Contact us"
intro_secondary_link: "mailto:onboarding@io.italia.it"
---

<section class="container">
	<div class="row">
	<div class="col-md-8 internal-page__bodytable">
	<p>The IO project is based on the analysis of the citizens’ needs. All public entities providing digital services will profit from IO as it provides the main functions necessary for the  interaction between the public administration and citizens, thanks also to the integration with the enabling platforms pagoPA, ANPR and SPID.</p>
	<p>Organizations participating in the project will be able to take advantage of  the open API (Application Programming Interface) of the IO platform in order to  send notifications and messages to citizens, complete economic transactions, send and request user documents, and manage general preferences.</p>
	<p>Citizens will no longer need to provide and update their email address, mobile telephone number, bank details, preferred contact method, language spoken, etc., on each and every site.</p>
	<p>To use the service, the institution (which must be explicitly taking part in the IO project), will need to use the citizens tax code and  must the necessary authorization to use it. The authorization is achieved through  an effective institutional mandate and/or because the citizen has signed the specific terms of use with regards to the institution.</p>
		<a href="#onboard" class="font-weight-bold " >Do you represent a PA and want to add your services to IO?</a>
	</div>
	<div class="col-md-4" >
	<aside>
	IO facilitates all Public Administrations:
		<div class="row facilita-pa">
			<div class="col-3 text-right"><img class="img-fluid" src="{{ '/assets/img/icon-messages.svg' | relative_url }}" alt="Messages"></div>
			<div class="col-9">Sending notifications and messages</div>
		</div>
		<div class="row facilita-pa">
			<div class="col-3 text-right"><img class="img-fluid" src="{{ '/assets/img/icon-wallet.svg' | relative_url }}" alt="Payments"></div>
			<div class="col-9">Economic payments and transactions</div>
		</div>
		<div class="row facilita-pa">
			<div class="col-3 text-right"><img class="img-fluid" src="{{ '/assets/img/icon-document.svg' | relative_url }}" alt="Documents"></div>
			<div class="col-9">Delivering and requesting documents</div>
		</div>
		<div class="row facilita-pa">
			<div class="col-3 text-right"><img class="img-fluid" src="{{ '/assets/img/icon-settings.svg' | relative_url }}" alt="Preferences"></div>
			<div class="col-9">Managing user preferences</div>
		</div>
	</aside>
	</div>
	</div>
</section>

{% comment %}
<section class=" pa-schema__wrapper" >
    <h2 class="text-center">The components of the project and the subjects who use them</h2>
    <div class="pa-schema__inner">
        <img class="pa-schema" src="{{ '/assets/img/pa-architectural-schema.png' | relative_url }}" alt="Architectural Schema">
    </div>
</section>
{% endcomment%}

<section class="onboarding__wrapper" id="onboarding">
  <div class="container text-center text-white">
    <h2 class="onboarding__title">How to bring services to IO</h2>
    <p class="onboarding__subtitle mt-3">A <strong>short guide for all institutions</strong> that want to prepare to use IO as a service delivery channel.</p>
    <div class="row">
      {% include onboarding/column.html
        ordinal="01"
        title="Service identification"
        text="Identify <strong>which services</strong> you want to deliver through IO and prepare related messages."
        button_text="Service and messages templates"
        button_link="https://docs.google.com/spreadsheets/u/1/d/1dr3yt3O9_2zkCeEaxu3Riw99D5AhjYCWPpRZIoONbYI/edit?usp=sharing"
        button_type="xls" %}
      {% include onboarding/column.html
        ordinal="02"
        title="Technological integration"
        text="Register to the back office as a developer, type the API and start testing the integration."
        button_text="IO-back office/developer"
        button_link="https://developer.io.italia.it"
        button_type="backoffice" %}
      {% include onboarding/column.html
        ordinal="03"
        title="Legal responsibilities"
        text="Create your institution in the back office, identify the legal representative and perform the necessary formalities."
        button_text="IO-back office/institutions"
        button_link="#"
        button_type="backoffice"
        disabled="true" %}
      {% include onboarding/column.html
        ordinal="04"
        title="Communication and launch"
        text="Define a communication strategy to let your users know how to receive the services you developed on the IO app."
        button_text="Communication kit"
        button_link="https://docs.google.com/document/u/1/d/1UBe_2QSbkHSYLuIqHLecDvtdxn-3IlhC9cIoTS-Cx1Q/edit?usp=sharing"
        button_type="kit" %}
    </div>
    <div class="text-center pb-5">
      <a href="https://medium.com/team-per-la-trasformazione-digitale/progetto-io-guida-per-gli-enti-pubblici-integrazione-servizi-pubblica-amministrazione-smartphone-cittadini-f290306a611a" class="btn btn-white text-primary my-4">Discover more!</a>
    </div>
  </div>
</section>

<section class="privacy__wrapper">
	<div class="container mw-60">
	<h2>Privacy and personal data</h2>
	<p class="privacy__subtitle"></p>
	<div class="row">
	<div class="col-md-8">
	<p class="privacy__paragraph">
	IO is configured as a channel that the Public Administrations can use to provide certain components (functions) of their digital services. It is in some respects similar to the use of electronic mail as a means of communication with citizens, with the user’s personal data being stored by the entities that manage the services.
</p>
<p class="privacy__paragraph">
IO has been conceived and developed by taking into account the provisions of the current legislation, including the recent directives of the new privacy regulation (GDPR), in accordance with the principle of "privacy by design".
</p>
<p class="privacy__paragraph">
IO is configured as the data processor responsible for the data it carries. The data controllers remain the providers of the respective services. IO uses part of the anonymized data for the sole purpose of improving the quality of the service offered to citizens.
</p><p class="privacy__paragraph">
Documents and messages are stored in a database spread across European data centers that utilize "encryption at rest". The content is present in the provider's systems exclusively for the time necessary to ensure the transmission. Data relating to transactions and payment methods are processed by a certified PCI provider.
</p><p class="privacy__paragraph">
Citizens  remain owner of their  data. At any time, citizens can choose to download all the data concerning themselves or cancel their subscription to the service with the removal of the stored data.
	</p>
	</div>
	<div class="col-md-4 text-center">
	<div class="col__device__privacy">
	<img src="{{ '/assets/img/mockups/en/mockup-privacy.png' | relative_url }}" class="w-100" alt="Privacy view">
	</div>
	</div>
	</div>
	</div>
</section>

<section class="attorno-utente__wrapper">
	<div class="container mw-60">
	<div class="text-center">
	<img src="{{ '/assets/img/icon-user-green.svg' | relative_url }}" height="148" alt="user icon">
	</div>
	<h2 class="text-center">Around the citizen</h2>
	<p class="text-center attorno-utente__subtitle">
	It is sufficient for PAs to have a user's tax code in order to use IO's functions
	</p>
	<p class="text-justify mw-40 attorno-utente__paragraph">
	Today, it is difficult for many public entities to determine the contact details or other personal information of the user, often involving considerable time and  effort.<br>The same applies to citizens, who are forced to complete their profile and provide their personal data on the website of each institution whose services they wish to use.<br>
IO solves this problem by allowing any entity with citizens’  tax code to use IO's APIs to contact users, send them documents or notices, or to read the preferences that the citizens have chosen to set.<br>
The assurance of communicating directly with the right citizen is guaranteed by the authentication process based on SPID. If  the citizen has not yet activated the app, IO will ensure to deliver the message through the traditional channel, or will notify the service that the citizen is not yet on board.
	</p>
	</div>
</section>

<section class="sicurezza__wrapper">
	<img src="{{ '/assets/img/alien.gif' | relative_url }}" width="176" alt="alien icon" class="sicurezza__alien">
	<div class="container mw-60">
	<h2 class="text-center">Security and privacy</h2>
	<p class="text-justify mw-40 sicurezza__paragraph">
	IO is an open source project. This allows us to upturn the paradigm of "security through secrecy". The application codes and backend platforms are available to all, including those who choose to help by reporting malfunctions and possible bugs.</p><p class="text-justified mw-40 sicurezza__paragraph">
The code is developed by implementing OWASP best practices and tools that monitor the integrity of the requirements. However, security is a continuous process and community help is an important factor for the success of "responsible disclosure" practices.
</p><p class="text-justify mw-40 sicurezza__paragraph">
Authentication occurs safely via SPID. This ensures that IO does not directly manage passwords and any update mechanisms that are delegated to the IDPs. In addition to the SPID credentials, in order to ensure a more effective user experience, a PIN or  a biometric recognition mechanism will be requested, if the device in use supports this functionality.. Both the PIN and the data necessary for recognition (such as a fingerprint) do not leave the device nor are they shared with third parties.
	</p>
	</div>
	<div class="text-center container sicurezza__aliens">
		<img src="{{ '/assets/img/aliens.png' | relative_url }}" alt="icona alieni" class="img-fluid">
	</div>
</section>

<section class="legge__wrapper">
	<div class="container mw-60">
	<h2 class="text-center">The Law and IO</h2>
	<p class="text-center attorno-utente__subtitle">The instructions of the Digital Administration Code</p>
	<div class="row">
		<article class="col-sm-6 col-md-3">
		<h1 >The "Electronic Access Point for PA services"</h1>
		<p class="legge__paragraph">
	Article 64-bis establishes the "electronic access point activated via the Presidency of the Council of Ministers", as the channel through which all public entities must make their services usable.
</p>
		</article>
		<article class="col-sm-6 col-md-3">
		<h1 >The "Right to simple and integrated online services"</h1>
		<p class="legge__paragraph">
	Article 7 adds that all citizens have the right to use the services provided by public entities in digital form and in an integrated way, including via an electronic access point and through mobile devices.
</p>
		</article>
		<article class="col-sm-6 col-md-3">
		<h1 >The duties of the Public Administrations</h1>
		<p class="legge__paragraph">
	To enact this right, all Public Administrations must design their own digital services in order to guarantee the integration and interoperability with the IO backend, reorganizing and updating their services, setting out from the real needs of users.
</p>
		</article>
		<article class="col-sm-6 col-md-3">
		<h1 >When will the services be integrated?</h1>
		<p class=" legge__paragraph">
	The CAD update states that all citizens must be able to use this right from the date on which the "electronic access point" is activated, thus as soon as IO completes its beta phase.</p>
		</article>
	</div>
	</div>
</section>

<section class="onboard__wrapper" id="onboard" >
	<div class="container mw-60">
	<h2 class="text-center">Do you want to add your services to IO?
</h2>
	<p class="text-center onboard__subtitle">Do you want to be amongst the first PAs to use the IO functions?</p>
	<p class="text-center onboard__paragraph mw-50 mb-4">
	IO is an open project, hence any public body can participate. In the initial phase, priority will be given to citizens in the territories with the highest number of participating entities and services, and to the entities that offer services to the greatest number of citizens. Please, describe in the appropriate section of the forum the services that you would like to equip with the IO functions.
	</p>
	<div class="text-center">
	    <a href="https://forum.italia.it/c/progetto-io/proponi-un-servizio" class="btn btn-primary mt-4 mb-4" target="_blank" rel="noopener">Be part of the experiment!</a>
	</div>
	</div>
</section>

