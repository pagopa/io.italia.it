$(document).ready(function() {
  $(".filter-tool button").click(function() {
    var $btn = $(this);
    console.log($btn.data("click"));
  });
});
