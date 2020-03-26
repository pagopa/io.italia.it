var date = new Date();
var year = date.getFullYear();
var month = ("0" + (date.getMonth() + 1)).slice(-2); // to avoid months with one digit...
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
    $siblings('btn').each(function() {
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
    if (filter === "done" || filter === "next") {
      switch (filter) {
        case "done":
          $(".point-done").show();
          $(".point-next").hide();
          break;
        case "next":
          $(".point-next").show();
          $(".point-done").hide();
          break;
      }
    } else {
      $(".point-next").show();
      $(".point-done").show();
      $(".point-list[data-filter]").each(function() {
        var $point = $(this);
        var id = $point.data("filter");

        if (filter && filter !== id) {
          $point.hide();
        } else {
          $point.show();
        }
      });
    }
  });

  // Apply time class
  var firstNextStepFound = false;
  $("[data-time]").each(function() {
    var $el = $(this);
    var date = $el.data("time");
    
    if (date > now) {
      if (!firstNextStepFound) {
        firstNextStepFound = true;
        $el.attr('id','nextsteps');
      }
      $el.addClass("point-next");
      var $use = $el.find("use");
      if ($use && $use.length) {
        var href = $use.attr("xlink:href");
        $use.attr("xlink:href", href.replace("_b", "_g"));
      }
    } else {
      $el.addClass("point-done");
    }
  });
});
