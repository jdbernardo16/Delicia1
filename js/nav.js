$(document).ready(function() {
  
  //Use jQuery to execute a function whenever scrolling is detected in the window
  $(window).scroll(function () {
                onScrollHandle();
            });
  
  //Define what the function does
            function onScrollHandle() {
                //Switch a class when the window scrolls down 50px - the class toggles a nav bar shrink
                $(".navbar-default").toggleClass("navbar-shrink", $(this).scrollTop() > 50);
              
                //Get current scroll position
                var currentScrollPos = $(document).scrollTop();

                $(".logo-img").toggleClass("logo-img-shrink", $(this).scrollTop() > 50);
              
                var currentScrollPos = $(document).scrollTop();

              }
  
  
});




 $(document).ready(function() {
            $(".mobile-nav__burger").on("click", function() {
                  $(".mobile-nav__link-holder").css("transform", "translateX(0%)");
                  $(".mobile-nav__burger").css("display", "none");
                  $(".mobile-nav__close").css("display", "block");
            });
      });

 $(document).ready(function() {
            $(".mobile-nav__close").on("click", function() {
                  $(".mobile-nav__link-holder").css("transform", "translateX(-100%)");
                  $(".mobile-nav__burger").css("display", "block");
                  $(".mobile-nav__close").css("display", "none");
            });
      });


 $(document).ready(function() {
            $(".mobile-nav__search").on("click", function() {
                  $(".mobile-nav__search-input").css("transform", "translateX(0%)");
                  $(".mobile-nav__search").css("display", "none");
                  $(".mobile-btn-search").css("opacity", "1");
                  $(".mobile-input").css("opacity", "1");
                  $(".mobile-nav__search-close").css("display", "block");
            });
      });

  $(document).ready(function() {
            $(".mobile-nav__search-close").on("click", function() {
                  $(".mobile-nav__search-input").css("transform", "translateX(1000%)");
                  $(".mobile-nav__search").css("display", "block");
                  $(".mobile-nav__search-close").css("display", "none");
                  $(".mobile-btn-search").css("opacity", "0");
                  $(".mobile-input").css("opacity", "0");
            });
      });