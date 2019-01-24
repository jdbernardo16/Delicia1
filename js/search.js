$(document).ready(function() {
  
  //Use jQuery to execute a function whenever scrolling is detected in the window
  $(window).scroll(function () {
                onScrollHandle();
            });
  
  //Define what the function does
            function onScrollHandle() {
    
                var scrollt = $(document).scrollTop();
                if (scrollt > 50) {
                	 $("input").css("padding", "10px 0px 10px 10px");
                }
                else {
                	$("input").css("padding", "20px 0px 20px 20px");
                }

                var scrollt = $(document).scrollTop();
                if (scrollt > 50) {
                	 $(".btn-search").css("top", "30px");
                }
                else {
                	$(".btn-search").css("top", "40px");
                }

            
              }
  
});




