// A $( document ).ready() block.
$(document).ready(function () {
  // hidden collapse menu in small screen
  $(".nav li a").click(function (event) {
    // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called
    if (
      $(".navbar-collapse").is(":visible") &&
      $(".navbar-toggle").is(":visible")
    ) {
      $(".navbar-collapse").collapse("toggle");
    }
  });

  // Animate My Projects Section
  var mixer = mixitup("#Container");

  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

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

  // animate test on hero section

  // var typed = new Typed('.element', {
  //   // Waits 1000ms after typing "First"
  //   strings: ['Hello. ^1000',
  //     'I\'m Mohammed Abo Salem. ^500',
  //     'Front End Developer. ^1000',
  //     'Design Responsive Website ^1000',
  //     'Use HTML', 'CSS', '^1000 JavaScript', 'JQuery', 'Bootstrap 4'],
  //   stringsElement: null,
  //   typeSpeed: 40,
  //   backSpeed: 20,
  //   loop: true,
  //   loopCount: Infinity,
  //   showCursor: true,
  //   cursorChar: '|',

  // });




});
