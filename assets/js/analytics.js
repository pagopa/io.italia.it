var targCookiesGroup = "C0002";
var checkValue = targCookiesGroup + '%3A1';
var OTCookieValue = document.cookie;


function ga_init() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-162375189-1', {
        'cookieExpires': 60 * 60 * 24 * 28 * 6 // meno di 6 mesi
    });
    ga('set', 'anonymizeIp', true);
    ga('send', 'pageview');
}

function OptanonWrapper() {
    /* wrapping in OneTrust callback function */
    OneTrust.OnConsentChanged(function () {
        var activeGroups = OnetrustActiveGroups;
        if (activeGroups.indexOf(targCookiesGroup) > -1) {
            ga_init();
        }
      });

}

if (OTCookieValue.indexOf(checkValue) > -1) {
    ga_init();
}