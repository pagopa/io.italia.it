var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var now = Number(String(year) + String(month));

$(document).ready(function() {
  $(".filter-buttons button").click(function() {
    var $btn = $(this);
    var $siblings = $btn.siblings();
    var filter = $btn.data("click");

    // switch on clicked button
    $btn.removeClass("btn-outline-primary").addClass("btn-primary");
    var $use = $btn.find("use");
    if ($use && $use.length) {
      var href = $use.attr("xlink:href");
      $use.attr("xlink:href", href.replace("_b", "_w"));
    }

    // switch off sibiling buttons
    $siblings.each(function() {
      var $sibling = $(this);
      $sibling.removeClass("btn-primary").addClass("btn-outline-primary");

      var $sibUse = $sibling.find("use");
      if ($sibUse && $sibUse.length) {
        var sibHref = $sibUse.attr("xlink:href");
        if (sibHref) {
          $sibUse.attr("xlink:href", sibHref.replace("_w", "_b"));
        }
      }
    });

    // apply filter for each element
    $(".point-list[data-filter]").each(function() {
      var $point = $(this);
      var id = $point.data("filter");
      if (filter && filter !== id) {
        $point.hide();
      } else {
        $point.show();
      }
    });
  });

  // Apply time class
  $("[data-time]").each(function() {
    var $el = $(this);
    var date = $el.data("time");
    if (date > now) {
      $el.addClass("point-future");
      var $use = $el.find("use");
      if ($use && $use.length) {
        var href = $use.attr("xlink:href");
        $use.attr("xlink:href", href.replace("_b", "_g"));
      }
    }
  });
});
