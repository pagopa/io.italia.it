---
title: IO Status
subtitle:
layout: self
ref: app-status
permalink: /status/
index: no-index
assets:
  js: ""
  css: "/assets/status-page.css"
---

{% assign statusapp = site.data.statusapp %}
{% assign messages = statusapp.messages | sort: "date" | reverse %}

<div class="logo">
  <a href="/" title="Home">
  <img src="{{site.imagesurl}}/assets/img/io-it-logo-blue.svg" alt="Logo IO app" class="io__icon">
  </a>
</div>

<div class="statuslist">
  {% for status in messages %}
  <a name="{{status.date | date: '%y%m%d%H%M' }}"></a>
  <div class="statuslist__item status-{{status.level}}">
    <div class="statuslist__date">{{status.date | date: '%d/%m/%Y %H:%M' }}</div>
    <div class="statuslist__titlewrap">
      <svg class="icon critical"><use xlink:href="/assets/svg/sprite.svg#it-warning-circle"></use></svg>
      <svg class="icon warning"><use xlink:href="/assets/svg/sprite.svg#it-info-circle"></use></svg>
      <svg class="icon normal"><use xlink:href="/assets/svg/sprite.svg#it-check-circle"></use></svg>
      <div class="statuslist__title">{{status.title.it}}</div>
    </div>
    <div class="statuslist__text">{{status.message.it}}</div>
  </div>
  {%endfor%}
</div>
