$(document).ready(function() {
  // Quick forward/back fade in/out slider
  var $sectionCarousel = $('.section.section-carousel').first();
  var numSlides = $('ul.card-slider').children().length; 
  $("[data-slide]").click(function() {
    
    var dir = $(this).data("slide");
    if (dir === "next") {
      var slideid = $(".card-slider > :first-child").data('slideid') >= numSlides ? 1 : $(".card-slider > :first-child").data('slideid') + 1 ;
      $sectionCarousel.attr('data-slideid', slideid);
      $(".card-slider > :first-child")
        .fadeOut()
        .next("li")
        .fadeIn()
        .end()
        .appendTo(".card-slider");
    } else {
      var slideid = $(".card-slider > :first-child").data('slideid') > 1 ? $(".card-slider > :first-child").data('slideid') - 1 : numSlides ;
      $sectionCarousel.attr('data-slideid', slideid);
      $(".card-slider > :first-child")
        .fadeOut()
        .siblings(":last")
        .fadeIn()
        .prependTo(".card-slider");
    }
  });
});
