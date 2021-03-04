var SERVICE_DETAIL_URL = "/entiservizi/";

function lazyload() {
        var lazyloadDivs;
        if ("IntersectionObserver" in window) {
          lazyloadDivs = document.querySelectorAll(".lazy");
          var divObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                var lazydiv = entry.target;
                lazydiv.classList.remove("lazy");
                divObserver.unobserve(lazydiv);
              }
            });
          });

          lazyloadDivs.forEach(function(lazydiv) {
            divObserver.observe(lazydiv);
          });
        } else {
          var lazyloadThrottleTimeout;
          lazyloadDivs = document.querySelectorAll(".lazy");
          function lazyload () {
            if (lazyloadThrottleTimeout) {
              clearTimeout(lazyloadThrottleTimeout);
            }
            lazyloadThrottleTimeout = setTimeout(function() {
              var scrollTop = window.pageYOffset;
              lazyloadDivs.forEach(function(img) {
                  if(img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    if (img.hasAttribute("data-bkgimage")) {
                        img.classList.remove("lazy");
                        img.style.backgroundImage = img.getAttribute('data-bkgimage');
                    }
                  }
              });
              if(lazyloadDivs.length == 0) {
                document.removeEventListener("scroll", lazyload());
                window.removeEventListener("resize", lazyload());
                window.removeEventListener("orientationChange", lazyload());
              }
            }, 20);
          }
          document.addEventListener("scroll", lazyload());
          window.addEventListener("resize", lazyload());
          window.addEventListener("orientationChange", lazyload());
        }
}

function loadService(el) {
    var expandend = el.classList.toggle("expanded");
    var serviceId = el.getAttribute("data-load-service");
    if (el.hasAttribute("data-loaded")) {
        return false;
    }
    el.setAttribute("data-loaded", "true");
    var url = SERVICE_DETAIL_URL + serviceId + ".html";
    var request = new XMLHttpRequest();
    request.open("GET", url, true);

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            var result = this.response;
            var elToAppend = document.createElement("div");
            elToAppend.classList.add("entiservizi__content");
            elToAppend.innerHTML = result;
            el.insertAdjacentElement("afterend", elToAppend);
        } else {
            console.log("Problemi di connessione");
        }
    };

    request.onerror = function() {
    // error
    };

    request.send();
}

document.addEventListener("DOMContentLoaded", function() {
    var searchstringEl = document.getElementById("entiservizi__searchstring");
    var searchform = document.getElementById("entiservizi__search");
    var resultdata = [];
    var resultdata_searchable = [];

    function constructSearchable(service, index) {
        var orgName = service.o.toUpperCase();
        var servicesArray = service.s.length > 0 ? service.s : [];
        var servicesNormalized = servicesArray.map(function(item){
            return Object.keys(item).map(function(singlek) {
                return item[singlek].toUpperCase();
            })
        });
        resultdata_searchable.push( index.toString() + "|" + orgName + "|" + servicesNormalized.join() );
    }

    searchform.addEventListener("submit", function(e) {
        e.preventDefault();
        var searchstring = searchstringEl.value;
        var results;
        if (searchstring.length < 2) {
            return false;
        }
        searchstring = searchstring.toUpperCase();
        results = resultdata_searchable.filter(function(entry) {
            if ( entry.indexOf(searchstring) !== -1) {
                return true;
            } else {
                return false;
            }
        });
        if (results.length > 0) {
            var items = document.getElementsByClassName("entiservizi__item");
            var results_ids = results.map(function(item) {
                return item.split("|")[0];
            });
            Array.prototype.forEach.call(items, function(item, i){
                if (results_ids.indexOf(item.getAttribute("data-index")) >= 0) {
                    item.classList.remove("d-none");
                } else {
                    item.classList.add("d-none");
                }
            });
        }

    });

    function createList(data) {
        var itemList = document.querySelector(".entiservizi__list");
        var source = document.getElementById("entiservizi-template").innerHTML;
        var template = Handlebars.compile(source);
        data.forEach(function(service, index) {
            constructSearchable(service, index);
            var el = document.createElement("div");
            el.classList.add("entiservizi__item");
            el.setAttribute("data-index", index);
            if (index > 20) {
                el.classList.add("lazy");
            }
            var html = template(service);
            el.innerHTML = html;
            itemList.appendChild(el);
        });
        lazyload();
    }

    var request = new XMLHttpRequest();
    request.open("GET", "/assets/json/servizi-ricercabili.json", true);

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            document.body.classList.remove("loading");
            resultdata = JSON.parse(this.response);
            createList(resultdata);
        } else {
            console.log("Problemi di connessione");
        }
    };

    request.onerror = function() {
    // error
    };

    request.send();
});