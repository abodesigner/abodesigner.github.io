// A $( document ).ready() block.
$(document).ready(function () {





  //hide placeholder on focus
  var $place;
  $(":input").on("focus", function () {
    $place = $(this).attr("placeholder");
    $(this).attr("placeholder", "");
  });

  //blur placeholder on focus
  $(":input").on("blur", function () {
    $(this).attr("placeholder", $place);
  });

  // Get the full year
  $("#year").text(new Date().getFullYear());

  if ($(window).scroll() > 100) {
    $(".navbar").addClass("custom-nav");
  } else {
    $(".navbar").removeClass("custom-nav");
  }

  let links = document.querySelectorAll("li.nav-item");

  for(const link of links) {
    link.addEventListener("mouseenter", function(e) {
        this.classList.add("active");
    });
    link.addEventListener("mouseleave", function(e) {
        this.classList.remove("active");
    });
  }



});
