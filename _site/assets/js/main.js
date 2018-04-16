$(function () {

    let smallDevice = window.innerWidth < 992;

    let carillonPathArray = [];

    // Per ogni Path SVG esiste un'animazione senza autoplay
    $('.carillon__path').each(function (index) {

        let pathID = $(this).data('index');
        let soundID = $(this).data('sound');
        let pathName = $(this).data('name');
        let path = anime.path('[data-index="' + pathID + '"] path');

        let animeTimeline = anime.timeline({
            targets: '[data-index="' + pathID + '"] .carillon__note',
            easing: 'easeInOutQuart',
            autoplay: false,
            begin: function (anim) {
                $('.ball--' + pathName).addClass('ball--burst');
                $('[data-index="' + pathID + '"] .carillon__note').removeClass('carillon__note--burst');
            },
            complete: function () {
                $('.ball--' + pathName).removeClass('ball--burst');
                $('[data-index="' + pathID + '"] .carillon__note').addClass('carillon__note--burst').fadeTo("slow", 0);
                document.getElementById('sound-0' + soundID).play();
            }
        });

        animeTimeline.add({
            opacity: 1,
            duration: 1000,
            delay: $(this).data('delay')
        }).add({
            opacity: 1,
            translateX: path('x'),
            translateY: path('y'),
            duration: 1000
        });

        carillonPathArray.push(animeTimeline);
    });

    // Sfondo in parallasse
    let parallaxInstance = new Parallax($('.galaxy')[0]);

    // ScrollMagic
    let controller = new ScrollMagic.Controller();

    // Sezioni 2, 3, 4, 5, 6
    for (let _i = 2; _i < 7; _i++) {
        (function (i) {
            new ScrollMagic.Scene({
                triggerElement: "#section_" + i,
                duration: window.innerHeight - 100 // TODO da rivedere
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

    let greenDotAnimation = function () {
        let el = $('.italia__dot');
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

        setTimeout(loopingFunction, 1000);
    })();

    let lastTime = 0;

    let animate = function (currentTime) {
        if (currentTime >= lastTime + 1000) {
            // one second has passed, run some code here
            if (!smallDevice) {
                if (!$('body').hasClass('is-scrolled')) {
                    // prende un Path SVG casuale nel carillon e ri-avvia l'animazione
                    carillonPathArray[Math.floor(Math.random() * carillonPathArray.length)].restart();
                } else {
                    // Imposta una posizione casuale la notifica "dot" verde
                    greenDotAnimation();
                }
            }
            lastTime = currentTime;
        }
        requestAnimationFrame(animate);
    };

    animate(0);

    $(window).on('load scroll', function (event) {
        if ($(window).scrollTop() > $('.section__1').height() - 50) {
            $('body').addClass('is-scrolled');
            parallaxInstance.disable();
        } else {
            $('body').removeClass('is-scrolled');
            parallaxInstance.enable();
        }
    });

    $(window).on('resize', function (event) {
        smallDevice = window.innerWidth < 992;
    });

});