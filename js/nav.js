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
