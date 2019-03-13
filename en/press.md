---
layout: internal
full_width: true
title: Information for journalists
subtitle:
lang: en
ref: giornalisti
permalink: /en/press/
---

<section class="container mw-60">
    <div class="row">
        <div class="col-md-8">
            {% assign posts = site.posts | where: "lang", page.lang %}
            <div class="mt-0 mt-md-5">
                {% for post in posts %}
                  <div class="card-wrapper my-4">
                    <div class="card">
                      <div class="card-body">
                          <div class="head-tags">
                            <div class="d-flex justify-content-between w-100">
                              <div><span class="data">{% include date.html date=post.date %}</span></div>
                            </div>
                          </div>
                          <h5 class="card-title big-heading">{{ post.title }}</h5>
                          <p class="card-text">{{ post.excerpt }}</p>
                          <span class="card-signature">{{ post.author }}</span>
                          <a class="read-more" href="{{ site.baseurl }}{{ post.url }}">
                            <span class="">Continua a leggere</span>
                            <svg class="icon">
                              <use xlink:href="/assets/svg/sprite.svg#it-arrow-right"></use>
                            </svg>
                          </a>
                        </div>
                    </div>
                  </div>
                {% endfor %}
            </div>
        </div>
        <div class="col-md-4">
	        <aside class="mt-0 mt-md-5 pt-3 pt-md-5 pb-3 pb-md-5">
            <p class="font-weight-bold">Media downloads</p>
            <ul class="list-unstyled mt-2 mt-md-5">
                <li class="mb-2 mb-md-4 pt-2 pb-2">
                    <a class="d-flex" download="01-mockup-1-high.jpg" href="{{'/assets/download/en/01-mockup-1-high.jpg' | relative_url}}">
                        <img class="mr-3" src="{{'/assets/img/icon-download.svg' | relative_url}}" alt="download icon">
                        <span class="font-weight-bold">Photographic mock-up #1 - hi-res jpeg</span>
                    </a>
                </li>
                <li class="mb-2 mb-md-4 pt-2 pb-2">
                    <a class="d-flex" download="02-mockup-2-high.jpg" href="{{'/assets/download/en/02-mockup-2-high.jpg' | relative_url}}">
                        <img class="mr-3" src="{{'/assets/img/icon-download.svg' | relative_url}}" alt="download icon">
                        <span class="font-weight-bold">Photographic mock-up #2 - hi-res jpeg</span>
                    </a>
                </li>
                <li class="mb-2 mb-md-4 pt-2 pb-2">
                    <a class="d-flex" download="03-mockup-3-high.png" href="{{'/assets/download/en/03-mockup-3-high.png' | relative_url}}">
                        <img class="mr-3" src="{{'/assets/img/icon-download.svg' | relative_url}}" alt="download icon">
                        <span class="font-weight-bold">Transparent mock-up - hi-res png</span>
                    </a>
                </li>
                <li class="mb-2 mb-md-4 pt-2 pb-2">
                    <a class="d-flex" download="04-architectural-schema-high.png" href="{{'/assets/download/en/04-architectural-schema-high.png' | relative_url}}" >
                        <img class="mr-3" src="{{'/assets/img/icon-download.svg' | relative_url}}" alt="download icon">
                        <span  class="font-weight-bold">Architecture diagram - hi-res png</span>
                    </a>
                </li>
                <li class="mb-2 mb-md-4 pt-2 pb-2">
                    <a class="d-flex" download="05-website-cover-high.jpg" href="{{'/assets/download/en/05-website-cover-high.jpg' | relative_url}}">
                        <img class="mr-3" src="{{'/assets/img/icon-download.svg' | relative_url}}" alt="download icon">
                        <span  class="font-weight-bold">Website io.italia.it - hi-res jpeg</span>
                    </a>
                </li>
                <li class="mb-2 mb-md-4 pt-2 pb-2">
                    <a class="d-flex" download="closed-beta-preview.mp4" href="{{'/assets/video/closed-beta-preview.mp4' | relative_url}}">
                        <img class="mr-3" src="{{'/assets/img/icon-download.svg' | relative_url}}" alt="download icon">
                        <span class="font-weight-bold">Closed beta preview video - fullHD mpg4</span>
                    </a>
                </li>
                <li class="mb-2 mb-md-4 pt-2 pb-2">
                    <a class="d-flex" href="{{'/assets/download/en/io-slides.zip' | relative_url }}">
                        <img class="mr-3" src="{{'/assets/img/icon-download.svg' | relative_url}}" alt="download icon">
                        <span  class="font-weight-bold">Presentation kit - hi-res jpeg</span>
                    </a>
                </li>
                <li class="mb-2 mb-md-4 pt-2 pb-2">
                    <a class="d-flex" href="{{'/assets/video/screencast-io-fullhd.mp4' | relative_url}}">
                        <img class="mr-3" src="{{'/assets/img/icon-download.svg' | relative_url}}" alt="download icon">
                        <span  class="font-weight-bold">Prototype screencast - fullHD mpg4 - italian language</span>
                    </a>
                </li>
                <li class="mb-2 mb-md-4 pt-2 pb-2">
                    <a class="d-flex" href="{{'/assets/download/it/io-comunicato-stampa-forum-pa-2018.rtf' | relative_url }}">
                        <img class="mr-3" src="{{'/assets/img/icon-download.svg' | relative_url}}" alt="download icon">
                        <span  class="font-weight-bold">Press release ForumPA 2018 - rtf - italian language</span>
                    </a>
                </li>
            </ul>
            <p class="font-weight-bold pt-2 pt-md-4">Press office</p>
            <p>Simona Mercandalli,<br/>Ludovico Poggi<br/>Email: <a href="mailto:media.teamdigitale@governo.it">media.teamdigitale@governo.it</a></p>
            </aside>
        </div>
    </div><!--/row-->
</section>

<section class="giornalisti__slides pt-3 pt-md-4 pb-3 pb-md-4">
    <div class="container mw-60">
        <h2>Slides gallery</h2>
    </div>
    <div class="container giornalisti__slides-container mt-2 mt-md-5">
        <div class="d-flex flex-row flex-wrap giornalisti__slides-content">
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/en/slide-01-cover@2x.jpg' | relative_url}}"><img src="{{'/assets/img/slides/en/small/slide-01-cover.jpg' | relative_url}}" alt="io.italia.it - cover"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/en/slide-02-messages@2x.png' | relative_url}}"><img src="{{'/assets/img/slides/en/small/slide-02-messages.png' | relative_url}}" alt="io.italia.it - messages"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/en/slide-03-payments@2x.png' | relative_url}}"><img src="{{'/assets/img/slides/en/small/slide-03-payments.png' | relative_url}}" alt="io.italia.it - payments"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/en/slide-04-documents@2x.png' | relative_url}}"><img src="{{'/assets/img/slides/en/small/slide-04-documents.png' | relative_url}}" alt="io.italia.it - documents"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/en/slide-05-preferences@2x.png' | relative_url}}"><img src="{{'/assets/img/slides/en/small/slide-05-preferences.png' | relative_url}}" alt="io.italia.it - preferences"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/en/slide-06-profile@2x.png' | relative_url}}"><img src="{{'/assets/img/slides/en/small/slide-06-profile.png' | relative_url}}" alt="io.italia.it - profile"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/en/slide-07-service-map@2x.png' | relative_url}}"><img src="{{'/assets/img/slides/en/small/slide-07-service-map.png' | relative_url}}" alt="io.italia.it - service map"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/en/slide-08-architecture-01@2x.png' | relative_url}}"><img src="{{'/assets/img/slides/en/small/slide-08-architecture-01.png' | relative_url}}" alt="io.italia.it - architecture 01"></a>
            <a class="giornalisti__slides-item" href="{{'/assets/img/slides/en/slide-09-architecture-02@2x.png' | relative_url}}"><img src="{{'/assets/img/slides/en/small/slide-08-architecture-01.png' | relative_url}}" alt="io.italia.it - architecture 02"></a>
        </div>
    </div>
</section>
