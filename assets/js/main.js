$(function () {

    function managePageOffset() {
        if ($(window).scrollTop() > $('.section__1').height() - 50) {
            $('body').addClass('is-scrolled');
            if (parallaxInstance)
                parallaxInstance.disable();
        } else {
            $('body').removeClass('is-scrolled');
            if (parallaxInstance)
                parallaxInstance.enable();
        }
    }

    if ($('body').hasClass('layout--home')) {

        var smallDevice = window.innerWidth < 992;

        var carillonPathArray = [];

        var parallaxInstance;

        $('.preload').fadeOut(400).promise().done(function (el) {
            el.remove();
        });

        // Sfondo in parallasse
        if (window.Parallax && $('.galaxy').length)
            parallaxInstance = new Parallax($('.galaxy')[0]);

        // ScrollMagic
        if (window.ScrollMagic) {
            var controller = new ScrollMagic.Controller();

            // Sezioni 2, 3, 4, 5, 6
            for (var _i = 2; _i < 7; _i++) {
                (function (i) {
                    new ScrollMagic.Scene({
                        triggerElement: ".section__" + i,
                        duration: window.innerHeight - 50 // window.innerHeight - header height
                    })
                        .on("enter", function () {
                            if (i !== 1) {
                                if (!smallDevice) {
                                    $(".section__" + i).addClass("active");
                                    $(".device__content--" + i).addClass("device__content--in");
                                }
                            }
                        })
                        .on("leave", function () {
                            if (!smallDevice) {
                                $(".section__" + i).removeClass("active");
                                $(".device__content--" + i).removeClass("device__content--in");
                            }
                        }).addTo(controller);
                })(_i);
            }
        }

        var greenDotAnimation = function () {
            var el = $('.italia__dot');
            el.fadeTo(200, 0)
                .promise()
                .done(function () {
                    el.css({
                        backgroundPositionX: Math.floor((Math.random() * el.width())) + 'px',
                        backgroundPositionY: Math.floor((Math.random() * el.height())) + 'px'
                    }).fadeTo(200, 1);
                });
        };

        (function loopingFunction() {
            setTimeout(loopingFunction, 1500);
        })();

        var lastTime = 0;


        $(window).on('scroll load', function () {
            managePageOffset();
        });

        $(window).on('resize', function () {
            smallDevice = window.innerWidth < 992;
        });


        managePageOffset();
    }

    // Off canvas menu
    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open');
    });

    // Smooth internal links
    $("a[href!='#']").on('click', function (event) {
        if (this.hash !== "" && $(this.hash).offset()) {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });

    if (window.baguetteBox)
        window.baguetteBox.run('.giornalisti__slides-content');

    if ('-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style) //IE11
        stickybits('.vademecum .it-navscroll-wrapper');

    function isEmail(email) {
        return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
    }

    // URL params
    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };

    // Newsletter groups
    function onFieldsChange() {
        var groupOtionsChecked = [];
        $('.js-nl-groups .js-nl-group-option').each(function (el) {
            if ($(this).is(":checked"))
                groupOtionsChecked.push($(this).data('value'));
        });

        // Sets the #group element value to a comma-separated list of ids as per
        // http://help.mailup.com/display/mailupapi/HTTP+API+Specifications#HTTPAPISpecifications-Groups
        if (document.getElementById('group') != null)
            document.getElementById('group').value = groupOtionsChecked.toString();

        // Enables submit button when at least one option is selected and the input field is filled with an actual email
        $('.js-newsletter-submit')
            .prop('disabled', (groupOtionsChecked.length == 0) || (!isEmail($('.js-newsletter-email').val())));
    }

    var UrlParameterEmail = getUrlParameter('email');

    // If ?email=email@example.com, pre-populates email input field
    // TODO pre-populate entire user data
    if (UrlParameterEmail && isEmail(UrlParameterEmail)) {
        $('.js-newsletter-email')[0].value = UrlParameterEmail;
        onFieldsChange();
    }

    $('.js-newsletter-email')
        .on('input', onFieldsChange);
    $('.js-nl-groups .js-nl-group-option')
        .on('change', onFieldsChange);

    // HOMEPLAYER
    $("#playvideo").click( function(e) {
        e.preventDefault();
        var src = $(this).attr("data-url");
        $(".overlay-video").show();
        $("#player").attr("src", src);
        setTimeout(function() {
            $(".overlay-video").addClass("o1");
            
        }, 100);
    });
    
    $(".overlay-video").click(function(event) {
        if (!$(event.target).closest(".videoWrapperExt").length) {
            var PlayingVideoSrc = $("#player").attr("src").replace("&autoplay=1", "");
            $("#player").attr("src", PlayingVideoSrc);
            $(".overlay-video").removeClass("o1");
            setTimeout(function() {
                $(".overlay-video").hide();
            }, 600);
        }
    });
    
    $(".videoWrapper__close").click(function(event) {
            var PlayingVideoSrc = $("#player").attr("src").replace("&autoplay=1", "");
            $("#player").attr("src", PlayingVideoSrc);
            $(".overlay-video").removeClass("o1");
            setTimeout(function() {
                $(".overlay-video").hide();
            }, 600);
    
    });

});




