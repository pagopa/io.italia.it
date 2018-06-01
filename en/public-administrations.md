---
layout: internal
full_width: true
title: Advantages for the PA
subtitle: Common functions available to all public services
lang: en
ref: pubbliche-amministrazioni
permalink: /en/public-administrations/
---

<section class="container mw-60">
	<div class="row">
	<div class="col-md-8 internal-page__bodytable">
	<p>The <b>IO</b> project sets out from the analysis of the needs of the citizens, being an advantage for all public entities that provide digital services. In fact, it provides the main functions necessary for interaction between the Public Administration and citizens, also thanks to the integration with the enabling platforms pagoPA, ANPR and SPID.</p>
	<p>Organizations participating in the project will benefit from the open API (Application Programming Interface) of the <b>IO</b> platform for sending notifications and messages to citizens, completing economic transactions, sending and requesting user documents and managing general preferences.</p>
	<p>Citizens will no longer need to provide and update their email address, mobile telephone number, bank details, preferred contact method, language spoken, etc., on each and every site.</p>
	<p>To use the service, the institution (which must be explicitly taking part in the IO project), will need to avail of the tax code of the citizen, and obviously be authorized to utilize it. This can be done by an effective institutional mandate and/or because the citizen has actually signed the specific terms of use with regards to the institution.</p>
		<a href="#onboard" class="font-weight-bold " >Do you represent a PA and want to add your services to <b>IO</b>?</a>
	</div>
	<div class="col-md-4" >
	<aside>
	<b>io</b> facilitates all Public Administrations:
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
<section class=" pa-schema__wrapper" >
<h2 class="text-center">The components of the project and the subjects who use them</h2>
<div class="pa-schema__inner">
	<img class="pa-schema" src="{{ '/assets/img/schema@2x.png' | relative_url }}" alt="Schema dell'architettura">
</div>
</section>


<section class="privacy__wrapper">
	<div class="container mw-60">
	<h2>Privacy and personal data</h2>
	<p class="privacy__subtitle"></p>
	<div class="row">
	<div class="col-md-8">
	<p class="privacy__paragraph">
	IO is configured as a channel that the Public Administrations can utilize in the provision of certain components (functions) of their digital services. It is in some respects similar to the use of electronic mail as a means of communication with citizens, with the user’s personal data being stored by the entities that manage the services.
</p>
<p class="privacy__paragraph">
IO has been conceived and developed by taking into account the provisions of the current legislation, including the recent directives of the new privacy regulation (GDPR), in accordance with the principle of "privacy by design".
</p>
<p class="privacy__paragraph">
IO is configured as the data processor responsible for the data it carries. The data controllers remain the providers of the respective services. IO uses part of the anonymized data for the sole purpose of improving the quality of the service offered to citizens.
</p><p class="privacy__paragraph">
Documents and messages are stored in a database spread across European data centers that utilize "encryption at rest". The content is present in the provider's systems exclusively for the time necessary to ensure the transmission. Data relating to transactions and payment methods are processed by a certified PCI provider.
</p><p class="privacy__paragraph">
The citizen remains the owner of his or her data. At any time, they can choose to download all the data concerning themselves or cancel their subscription to the service with the removal of the stored data.
	</p>
	</div>
	<div class="col-md-4 text-center">
	<div class="col__device__privacy">
	<img src="{{ '/assets/img/screen-privacy.png' | relative_url }}" class="w-100" alt="Privacy view">
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
	It is sufficient for PAs to have a user's <b>tax code</b><br> in order to utilize IO's functions
	</p>
	<p class="text-justify mw-40 attorno-utente__paragraph">
	Today, it is difficult for many public entities to determine the contact details or other personal information of the user, often involving considerable effort and lengthy timeframes.<br>The same applies to citizens, who are forced to complete their profile and provide their personal data on the website of each institution whose services they wish to utilize.<br>
IO solves this problem by allowing any entity in possession of a citizen's tax code to use IO's APIs to contact the user, send them documents or notices, or to read the preferences that the citizen has chosen to set.<br>
The certainty of communicating directly with the citizen is guaranteed by the authentication process based on SPID. If the citizen has not yet activated the app, IO will ensure to deliver the message through the traditional channel, or will notify the service that the citizen is not yet on board.
	</p>
	</div>
</section>

<section class="sicurezza__wrapper">
	<img src="{{ '/assets/img/alien.gif' | relative_url }}" width="176" alt="alien icon" class="sicurezza__alien">
	<div class="container mw-60">
	<h2 class="text-center">Security and privacy</h2>
	<p class="text-justify mw-40 sicurezza__paragraph">
	IO is an open source project. This allows us to upturn the paradigm of "security through secrecy". The application codes and backend platforms are, in fact, available to all, including those who choose to help out by reporting malfunctions and possible bugs.</p><p class="text-justified mw-40 sicurezza__paragraph">
The code is developed by implementing OWASP best practices and tools that monitor the integrity of the requirements. However, to ensure security is a continuous process, community help is an important factor for the success of "responsible disclosure" practices.
</p><p class="text-justify mw-40 sicurezza__paragraph">
Authentication occurs safely via SPID. This ensures that IO does not directly manage passwords and any update mechanisms that are delegated to the IDPs. In addition to the SPID credentials, in order to ensure a more effective user experience, the setting of a PIN will be requested and, if the device used supports the functionality, a biometric recognition mechanism. Both the PIN and the data necessary for recognition (such as a fingerprint) do not leave the device nor are they shared with third parties.
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
	IO is an open project, hence any public body can participate in the experiment. In the initial phase, priority will be given to citizens in the territories in which the concentration of participating entities and services is highest, and to the entities that offer services to the greatest number of citizens. Describe in the appropriate section of the forum the services that you would like to equip with the IO functions.
	</p>
	<div class="text-center">
	    <a href="https://forum.italia.it/c/progetto-io/proponi-un-servizio" class="btn btn-primary mt-4 mb-4" target="_blank" rel="noopener">Take part in the experiment!</a>
	</div>
	</div>
</section>

