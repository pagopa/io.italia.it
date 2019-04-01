---
layout: internal
title: Information for developers
subtitle:
lang: en
ref: sviluppatori
permalink: /en/developers/
---

## Introduction
The open and collaborative development, along with being one of the key points of <a href="https://developers.italia.it/en" target="_blank">the new means of creating software</a> in the Italian Public Administration, perfectly aligns with this initiative that aims to facilitate the relationship between citizens and the Public Administration (PA) through the creation of a platform comprised of reusable components that can render digital services more effective.

The components are public, hence any service provider can integrate them or suggest improvements. Each module can then be reused by administrations that provide digital services in order to guarantee a coherent user experience as well as to save on the expenditure required for the simple implementation of such across-the-board technologies.

The interface is created in accordance with the method proposed by <a href="https://designers.italia.it" target="_blank">the guidelines for the design of public services</a> and using Designers Italia kits, so as to trial and test the prototyping tools in-field together with the other kits that the other Public Administration will be able to use in turn.

## Reference implementation
The app and its back end are aimed to set an example for Public Administrations to follow in addressing similar problems and contexts.

The IO project is intended to be a point of reference in achieving integration with the platforms envisaged under the <a href="https://pianotriennale-ict.italia.it/en/" target="_blank">PA digital transformation plan</a>:

* <a href="https://developers.italia.it/en/spid" target="_blank">SPID</a>, being the Public Digital Identity System
* <a href="https://developers.italia.it/en/pagopa" target="_blank">PagoPA</a>, the payment system for all Public Administrations
* <a href="https://developers.italia.it/en/anpr" target="_blank">ANPR</a>, being the National Resident Population Register
* The <a href="https://pianotriennale-ict.italia.it/en/enabling-platforms/" target="_blank">courtesy notification and alert system</a>

## Agile approach
Both in the design and implementation phases, an "agile" approach has been chosen, as it fits well with the dynamic context of the project. All of the requirements and characteristics cannot (and should not) be defined as being completely up-front.

Analysis and design are thus executed with the aid of tools now consolidated in the private sector, but that until recently have served little purpose in the Public Administration, such as weekly sprints, stand-up meetings, collaboration tools that facilitate communication amongst the members of the "widespread" team.

## Workflow management tools
The entire process of designing and developing the application occurs in an open way. Anyone can monitor the development process. The tools that support the design and development of the application are:

* **<a href="https://github.com/teamdigitale/io/blob/master/CONTRIBUTING.it.md#repository-github" target="_blank">Github</a>**  
All of the application's source code and documentation, as well as most of the code needed for the infrastructure on which the application is based, are available on GitHub, the largest code-sharing platform in existence.
* **<a href="https://github.com/teamdigitale/io/blob/master/CONTRIBUTING.it.md#pianificazione-delle-attivit%C3%A0-pivotal-tracker-ita" target="_blank">Pivotal Tracker</a>**  
To plan activities and track their progress, the IO team uses Pivotal Tracker, defining the features of the application and the back end using the method of user stories grouped into epics. This technique means that service features can be easily designed without ever losing sight of the real impact of each activity on the overall user experience. 
* **<a href="https://github.com/teamdigitale/io/blob/master/CONTRIBUTING.it.md#google-drive-ita" target="_blank">Google Documents</a>**  
Good documentation is the basis of any open project. The collaborative writing tool offered free of charge by Google permits working on the same document, simply updating it to track the evolution of the project and easily allowing new employees to be included.
* **<a href="https://github.com/teamdigitale/io/blob/master/CONTRIBUTING.it.md#slack" target="_blank">Slack channel</a>**  
Slack is the most efficient and versatile tool currently available for working remotely. Every conversation concerning the digital citizenship project takes place within public Slack channels. This means that anyone wanting to participate in the conversation or understand how certain project decisions have been made can enter, even as an observer, and read past and present conversations and even participate in future ones at any time.

## Infrastructure and Cloud
As far as possible, choices regarding infrastructure have been made based on open source technologies, which reduce blockages due to suppliers and facilitate the migration to PaaS services provided by different suppliers in Cloud or for which on-premise installation is possible. The entire infrastructure is "coded", documented and reproduced following a script by anyone with an Azure account. Activities are planned to generalize infrastructural choices, allowing the entire platform to be migrated to a fully open-source cloud provider.

## Contributors
Every single person who participates in the project does so in first person, under his or her own name, guaranteed to receive recognition for their work, as is tradition in the open source world, be they a private citizen who works for a company or a public institution.

Active participation in the project provides the opportunity to benefit from a working methodology and culture of a common team, offering the chance to work with professionals in the sector, thus fostering personal and professional growth.

Contributing to public coding that is visible to all is often synonymous with a better quality of the code itself. Working in an "open" manner increases the transparency and solidity of the choices made, giving everyone the opportunity to share their skills and suggest improvements in the process and development.

Contributing to IO means having a concrete impact on the relationship with the PA of millions of citizens, thus simplifying the daily life of family and friends.

## Find out more and take part

To follow the development of IO and to participate, you can read the documentation file that illustrates in detail how to participate.  If you simply want to integrate with IO’s API, the address of the developer portal is: <a href="https://developer.io.italia.it/" target="_blank">developer.io.italia.it</a>.

<p class="text-center">
<a class="m-2 btn btn-outline-primary" href="https://developer.io.italia.it/openapi.html">OpenAPI specs</a>
<a class="m-2 btn btn-primary" href="https://github.com/teamdigitale/io/blob/master/CONTRIBUTING.it.md">How to participate</a>
</p>

You can also join the <a href="https://developersitalia.slack.com/messages/CA70BM37X" target="_blank">#io-devel</a> channel on <a href="https://slack.developers.italia.it/" target="_blank">Developers Italia's Slack</a>!
