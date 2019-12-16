$(document).ready(function() {
  var loopPress = function(limit) {
    $(".media-press > .media").each(function(i) {
      var $media = $(this);
      if (limit && limit > i) $media.css("display", "flex");
      if (!limit) $media.css("display", "flex");
    });
  };
  loopPress(4);

  $("[data-click=show-more]").click(function() {
    loopPress();
    $(this).hide();
  });
});
