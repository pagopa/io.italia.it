function newsletterResponse(success) {
  var ko = $("#newsletter-ko");
  var ok = $("#newsletter-ok");

  if (success == true) {
    ko.hide();
    ok.fadeIn();
  } else {
    ok.hide();
    ko.fadeIn();
  }
  $(".js-newsletter-submit").hide();
}

function submitNewsletter(token) {
  var subscriptionUrl =
    "https://news-p-weu-core-app-fn.azurewebsites.net/api/v1/newsletters/io/lists/4/recipients";
  var email = $("#newsletteremail").val().trim();
  var groups = $("#group").val().split(",");
  var data = { recaptchaToken: token, email: email, groups: groups };
  $.ajax({
    url: subscriptionUrl,
    type: "post",
    data: JSON.stringify(data),
    success: function (data, textStatus, xhr) {
      if (xhr.status == 200 && xhr.statusText == "OK") {
        try {
          ga("send", "event", "button", "click", "Newsletter", 1);
        } finally {
          // USER DOESN'T CONSENT
        }
        newsletterResponse(true);
      } else {
        newsletterResponse(false);
      }
    },
    error: function (data, textStatus, xhr) {
      newsletterResponse(false);
    },
  });
}

function ga(
  originalEvent,
  eventName,
  eventHit,
  eventCategory,
  eventLabel,
  eventValue
) {
  // ex custom event function for G. Analytics
  try {
    _paq.push(["trackEvent", eventHit, eventCategory, eventLabel, eventValue]);
  } catch (error) {
    console.log("Problem with the pushEvent " + error);
  }
}

$(function () {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  function managePageOffset() {
    if ($(window).scrollTop() > $(".section__1").height() - 50) {
      $("body").addClass("is-scrolled");
      if (parallaxInstance) parallaxInstance.disable();
    } else {
      $("body").removeClass("is-scrolled");
      if (parallaxInstance) parallaxInstance.enable();
    }
  }

  if ($("body").hasClass("layout--home")) {
    var smallDevice = window.innerWidth < 992;

    var carillonPathArray = [];

    var parallaxInstance;

    var deviceContainer = $(".device");

    $(".preload")
      .fadeOut(400)
      .promise()
      .done(function (el) {
        el.remove();
      });

    // Sfondo in parallasse
    if (window.Parallax && $(".galaxy").length)
      parallaxInstance = new Parallax($(".galaxy")[0]);

    // ScrollMagic
    if (window.ScrollMagic) {
      var controller = new ScrollMagic.Controller();

      // Sezioni 2, 3, 4,
      for (var _i = 2; _i < 5; _i++) {
        (function (i) {
          new ScrollMagic.Scene({
            triggerElement: ".section__" + i,
            duration: window.innerHeight - 0, // window.innerHeight - header height
          })
            .on("enter", function () {
              if (i !== 1) {
                if (!smallDevice) {
                  $(".section__" + i).addClass("active");
                  $(".device__content--" + i).addClass("device__content--in");
                  deviceContainer.addClass("show");
                }
              }
            })
            .on("leave", function () {
              if (!smallDevice) {
                $(".section__" + i).removeClass("active");
                $(".device__content--" + i).removeClass("device__content--in");
                if ($(".section.overflow-x--hidden.active").length == 0) {
                  deviceContainer.removeClass("show");
                }
              }
            })
            .addTo(controller);
        })(_i);
      }
    }

    var greenDotAnimation = function () {
      var el = $(".italia__dot");
      el.fadeTo(200, 0)
        .promise()
        .done(function () {
          el.css({
            backgroundPositionX: Math.floor(Math.random() * el.width()) + "px",
            backgroundPositionY: Math.floor(Math.random() * el.height()) + "px",
          }).fadeTo(200, 1);
        });
    };

    (function loopingFunction() {
      setTimeout(loopingFunction, 1500);
    })();

    var lastTime = 0;

    $(window).on("scroll load", function () {
      managePageOffset();
    });

    $(window).on("resize", function () {
      smallDevice = window.innerWidth < 992;
    });

    managePageOffset();
  }

  // Off canvas menu
  $('[data-toggle="offcanvas"]').on("click", function () {
    $(".offcanvas-collapse").toggleClass("open");
  });

  // Smooth internal links
  $("a[href!='#']").on("click", function (event) {
    if (this.hash !== "" && $(this.hash).offset()) {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 76,
        },
        2000,
        function () {
          if (history && "pushState" in history) {
            history.pushState(
              {},
              document.title,
              window.location.pathname + hash
            );
            return false;
          }
        }
      );
    }
  });

  if (window.baguetteBox)
    window.baguetteBox.run(".giornalisti__slides-content");

  if (
    "-ms-scroll-limit" in document.documentElement.style &&
    "-ms-ime-align" in document.documentElement.style
  )
    //IE11
    stickybits(".vademecum .it-navscroll-wrapper");

  function isEmail(email) {
    return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
      email
    );
  }

  // URL params
  function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
  }

  // Newsletter groups
  function onFieldsChange() {
    var groupOtionsChecked = [];
    $(".js-nl-groups .js-nl-group-option").each(function (el) {
      if ($(this).is(":checked"))
        groupOtionsChecked.push($(this).data("value"));
    });

    // Sets the #group element value to a comma-separated list of ids as per
    // http://help.mailup.com/display/mailupapi/HTTP+API+Specifications#HTTPAPISpecifications-Groups
    if (document.getElementById("group") != null)
      document.getElementById("group").value = groupOtionsChecked.toString();

    // Enables submit button when at least one option is selected and the input field is filled with an actual email
    $(".js-newsletter-submit").prop(
      "disabled",
      groupOtionsChecked.length == 0 ||
        !isEmail($(".js-newsletter-email").val())
    );
  }

  var UrlParameterEmail = getUrlParameter("email");

  // If ?email=email@example.com, pre-populates email input field
  // TODO pre-populate entire user data
  if (UrlParameterEmail && isEmail(UrlParameterEmail)) {
    $(".js-newsletter-email")[0].value = UrlParameterEmail;
    onFieldsChange();
  }

  $(".js-newsletter-email").on("input", onFieldsChange);
  $(".js-nl-groups .js-nl-group-option").on("change", onFieldsChange);

  $(".playvideo").click(function (e) {
    e.preventDefault();
    var src = $(this).attr("data-url");
    var replace = $(this).attr("data-replace");
    var $elVideoWrapper = $(this).siblings(".videoWrapper");
    var $button = $(this);

    if (replace) {
      var elToReplace = $(replace);
      $elVideoWrapper.children("iframe").attr("src", src);
      elToReplace.fadeOut(1000, function () {
        $button.hide();
        $elVideoWrapper.removeClass("d-none");
      });
    } else {
      $(".overlay-video").show();
      $("#player").attr("src", src);
      setTimeout(function () {
        $(".overlay-video").addClass("o1");
      }, 100);
    }
  });

  $(".overlay-video").click(function (event) {
    if (!$(event.target).closest(".videoWrapperExt").length) {
      var PlayingVideoSrc = $("#player").attr("src").replace("&autoplay=1", "");
      $("#player").attr("src", PlayingVideoSrc);
      $(".overlay-video").removeClass("o1");
      setTimeout(function () {
        $(".overlay-video").hide();
      }, 600);
    }
  });

  $(".videoWrapper__close").click(function (event) {
    var PlayingVideoSrc = $("#player").attr("src").replace("&autoplay=1", "");
    $("#player").attr("src", PlayingVideoSrc);
    $(".overlay-video").removeClass("o1");
    setTimeout(function () {
      $(".overlay-video").hide();
    }, 600);
  });

  $(".read-more").click(function (event) {
    event.preventDefault();
    var $target = $(this).siblings(".read-more-target");
    var $altButton = $(this).siblings(".read-more");
    $(this).hide();
    $target.toggle("slow");
    $altButton.show();
  });
});

$(window).on("load", function () {
  var $posts = $(".post-load-image");
  var $navigationitems = $(".navigation-item.withDropdown");

  $navigationitems.on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("on");
    $(this).parent().siblings().children().removeClass("on");
  });

  $posts.each(function (el) {
    var source = $(this).attr("data-src");
    $(this).attr("src", source);
  });

  $(".playusevideoplaceholder").on("click", function (e) {
    $(this).siblings(".playusevideo").trigger("click");
  });

  $(".playusevideo").on("click", function (e) {
    var target = $(this).attr("rel");
    var $target = $(target);
    $(this).parent().addClass("d-none");
    $target.fadeIn("fast");
  });
});
