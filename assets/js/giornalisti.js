$(document).ready(function() {


  $("[data-click=show-more]").click(function() {
    $('.media-press .media.d-none').removeClass('d-none');
    $(this).parent().hide();
  });
});
