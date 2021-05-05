var IMGREPO = "https://assets.cdn.io.italia.it/logos/organizations/";
var ENTISERVIZIJSON = "/assets/json/enti-list-webview.json";
var SERVIZIPATHJSON = "/assets/entijson/";

/* HANDLEBARS HELPERS ---*/
Handlebars.registerHelper('setImgSrc', function(obj){
    var keys = Object.keys(obj);
    var imgurl = "";
    if (keys) {
        var fc = keys[0] ;
        var imgname = fc.replace(/^0+/, "");
        imgurl = IMGREPO + imgname + ".png";
    }
    return imgurl;
  });

Handlebars.registerHelper('getName', function(obj){
    var keys = Object.keys(obj);
    return keys ? obj[ keys[0] ] : '';
  });
Handlebars.registerHelper('getFc', function(obj){
    var keys = Object.keys(obj);
    return keys ? keys[0] : '';
  });
Handlebars.registerHelper('lazy', function(index, options){
    return index < 20 ? options.inverse(this) : options.fn(this);
  });
Handlebars.registerHelper('nolazy', function(index, options){
    return index < 20 ? options.fn(this) : options.inverse(this);
  });
Handlebars.registerHelper('arriving', function(q, options){
    return q == 0 ? options.fn(this) : options.inverse(this);
  });
/* END HANDLEBARS HELPERS ---*/

/* This function render the list of services inside the items'list div */
function listServices(data, target, serviceid) {
    if (!target.classList.contains("filled")) {
        var source = document.getElementById("listservices-template").innerHTML;
        var template = Handlebars.compile(source);
        var el = document.createElement("div");
        var html = template(data);
        el.innerHTML = html;
        target.classList.add("filled");
        target.appendChild(el);
        target.classList.remove("loading");
    }
}
/* this function show errors when the retrieve of services fails */
function errorOnGetServices(serviceid) {
    var containerEl = document.querySelector('.services' + serviceid);
    containerEl.innerText = "Non riesco a caricare i servizi, riprova tra qualche minuto";
}
/* this function retrieve info about services of a org, calling a specific-org json */
function getServices(serviceid) {
    var request = new XMLHttpRequest();
    var url = SERVIZIPATHJSON + serviceid + ".json";
    var target = document.querySelector('.services' + serviceid);
    if (!target.classList.contains("filled")) {
        target.classList.add("loading");
    }
    request.open("GET", url, true);

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            var data = JSON.parse(this.response);
            listServices(data, target, serviceid);
        } else {
            errorOnGetServices(serviceid);
            target.classList.remove("loading");
        }
    };

    request.onerror = function() {
        errorOnGetServices(serviceid);
        target.classList.remove("loading");
    };

    request.send();
}
/* this function manage laxy load of orgitems' list */
function lazyload() {
        var lazyloadElements;
        if ("IntersectionObserver" in window) {
          lazyloadElements = document.querySelectorAll(".lazy");
          var elObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                var lazyel = entry.target;
                var img = lazyel.querySelector("img");
                var imgname = img.getAttribute("data-src");
                imgname = imgname.replace(/^0+/, "");
                img.setAttribute("src", IMGREPO + imgname);
                lazyel.classList.remove("lazy");
                elObserver.unobserve(lazyel);
                img.classList.add("show");
              }
            });
          });

          lazyloadElements.forEach(function(lazyel) {
            elObserver.observe(lazyel);
          });
        } else {
          lazyloadElements = document.querySelectorAll(".lazy");
          lazyloadElements.forEach(function(entry) {
              entry.classList.remove("lazy");
              var img = entry.querySelector("img");
              var imgname = img.getAttribute("data-src");
              imgname = imgname.replace(/^0+/, "");
              img.setAttribute("src", IMGREPO + imgname);
              img.classList.add("show");
          });
        }
}
/* this function send a specific event to the IOAPP when the user click a service */
function sendMessagesToRN(serviceId) {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(serviceId);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var searchstringEl = document.getElementById("entiservizi__searchstring");
    var searchform = document.getElementById("entiservizi__search");
    var searchedstringEl = document.getElementById("entiservizi__searched");
    var searchSubmitButton = document.getElementById("entiservizi__submit");
    var searchedstringDoneEl = document.querySelector(".entiservizi__search__done");
    var searchResetEl = document.getElementById("entiservizi__searchreset");
    var searchformTip = document.querySelector(".entiservizi__search__tip");
    var searchformSearchingMessage = document.querySelector(".entiservizi__searching");
    var searchformNoResults = document.querySelector(".entiservizi__noresults");
    var itemList = document.querySelector(".entiservizi__list");
    var itemListSearch = document.querySelector(".entiservizi__list__search");
    var connectionProblem = document.querySelector(".entiservizi__problem");
    var resultdata = [];

    function loadSearch() {
        searchformSearchingMessage.classList.remove("active");
    }
    /* this function search in the data retrieved by the first json */
    function search() {
        searchformNoResults.classList.remove("active");
        itemListSearch.innerHTML = "";
        var searchstring = searchstringEl.value.trim();
        var results;

        results = resultdata.filter(function(entry) {
            var key = Object.keys(entry)[0];
            return entry[key].toUpperCase().indexOf(searchstring.toUpperCase()) !== -1;
        });

        searchedstringEl.innerText = searchstring;
        searchedstringDoneEl.classList.add("active");
        window.scrollTo(0, 0);
        if (results.length > 0) {
            createList(results, itemListSearch);
        } else {
            searchformNoResults.classList.add("active");
            itemList.classList.add("d-none");
        }
        searchformSearchingMessage.classList.remove("active");
    }


    searchstringEl.addEventListener("focus", function(e) {
        searchform.classList.add("onfocus");
    });
    searchstringEl.addEventListener("focusout", function(e) {
        searchform.classList.remove("onfocus");
    });
    /* listen to the reset search results btn */
    searchResetEl.addEventListener("click", function(e) {
        e.preventDefault();

        searchedstringDoneEl.classList.remove("active");
        itemListSearch.innerHTML = "";
        window.scrollTo(0, 0);
        searchstringEl.value = "";
        itemList.classList.remove("d-none");
        searchformNoResults.classList.remove("active");
    });
    /* listen to the search submit btn */
    searchform.addEventListener("submit", function(e) {
        itemList.classList.add("d-none");
        searchformSearchingMessage.classList.add("active");
        searchedstringDoneEl.classList.remove("active");
        e.preventDefault();
        searchSubmitButton.focus();
        search();
    });
    /* this function create the main list of orgs */
    function createList(data, container) {
        var source = document.getElementById("entiservizi-template").innerHTML;
        var template = Handlebars.compile(source);
        var el = document.createElement("div");
        var html = template(data);
        el.innerHTML = html;
        container.appendChild(el);

        lazyload();
    }

    /* first of all, we call the json of all orgs */
    var request = new XMLHttpRequest();
    request.open("GET", ENTISERVIZIJSON, true);
    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            document.body.classList.remove("loading");
            resultdata = JSON.parse(this.response);
            createList(resultdata, itemList);
        } else {
            document.body.classList.remove("loading");
            connectionProblem.classList.add("active");
        }
    };
    request.onerror = function() {
        document.body.classList.remove("loading");
        connectionProblem.classList.add("active");
    };
    request.send();
});