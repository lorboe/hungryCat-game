$("#intructiontext").hide("slow");

function goToPage(link) {
  $("[data-page]").each(function() {
    var page = $(this).data("page");
    if (page === link) $(this).show();
  });
  $("li.nav-item").each(function() {
    var href = $(this)
      .find("a.nav-link")
      .attr("href");
    console.log(href);
    if (href === link) $(this).addClass("active");
    else $(this).removeClass("active");
  });
}

goToPage("home");

$("a").click(function(event) {
  event.preventDefault();
  var href = $(this).attr("href");
  goToPage(href);
});

$(document).ready(function() {
  $("#instructions").click(function() {
    $("canvas").hide("slow");
    $("#intructiontext").toggle("slow");
    $("#start-game").html("Play");
  });
});
