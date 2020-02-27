$(document).ready(function() {
  // Quick forward/back fade in/out slider
  $("[data-slide]").click(function() {
    var dir = $(this).data("slide");
    if (dir === "next") {
      $(".card-slider > :first-child")
        .fadeOut()
        .next("li")
        .fadeIn()
        .end()
        .appendTo(".card-slider");
    } else {
      $(".card-slider > :first-child")
        .fadeOut()
        .siblings(":last")
        .fadeIn()
        .prependTo(".card-slider");
    }
  });
});
