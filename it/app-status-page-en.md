---
title: IO Status
subtitle:
layout: self
ref: app-status
permalink: /app-content/status/en.html
index: no-index
assets:
  js: ""
  css: "/assets/status-page.css"
---

{% assign statusapp = site.data.statusapp %}

<div class="statuslist">
  {% for status in statusapp.messages  %}
  <div class="statuslist__item status-{{status.level}}">
    <div class="statuslist__date">{{status.date | date: '%d/%m/%Y %H:%M' }}</div>
    <div class="statuslist__titlewrap">
      <svg class="icon critical"><use xlink:href="/assets/svg/sprite.svg#it-warning-circle"></use></svg>
      <svg class="icon warning"><use xlink:href="/assets/svg/sprite.svg#it-info-circle"></use></svg>
      <svg class="icon normal"><use xlink:href="/assets/svg/sprite.svg#it-check-circle"></use></svg>
      <div class="statuslist__title">{{status.title.en}}</div>
    </div>
    <div class="statuslist__text">{{status.message.en}}</div>
  </div>
  {%endfor%}
</div>
