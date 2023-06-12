// MATOMO
var _paq = (window._paq = window._paq || []);

_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
(function () {
  var u = "https://pagopa.matomo.cloud/";
  _paq.push(["setTrackerUrl", u + "matomo.php"]);
  _paq.push(["setSiteId", "4"]);
  var d = document,
    g = d.createElement("script"),
    s = d.getElementsByTagName("script")[0];
  g.async = true;
  g.src = "/assets/js/matomo.js";
  s.parentNode.insertBefore(g, s);
})();
// this function removes the "old" google analytics cookies
document.addEventListener("DOMContentLoaded", function () {
  var cookies = Cookies.get();
  var gaCookies = Object.keys(cookies).filter((k) => k.startsWith("_ga"));
  for (var gc in gaCookies) {
    Cookies.remove(gaCookies[gc], { path: "" });
  }
});
