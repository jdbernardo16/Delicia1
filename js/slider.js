$(document).ready(function(){
	$('.home-frame2__slider-container').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: false
	});

	$('.exp__frame4-cont-img').slick({
   responTo: 'window',
   mobileFirst: true,
   infinite: true,
   arrows: true,
   dots: false,
   responsive: [
   {breakpoint:320,
    settings: {
         slidesToShow: 1,
       slidesToScroll: 1,
        }
    },{breakpoint:500,
    settings: {
         slidesToShow: 2,
       slidesToScroll: 1,
        }
    },
    {breakpoint:700,
    settings: {
         slidesToShow: 3,
       slidesToScroll: 1,
        }
    },
    {breakpoint:900,
    settings: {
         slidesToShow: 4,
       slidesToScroll: 2,
        }
    },{breakpoint:1200,
    settings: {
         slidesToShow: 5,
       slidesToScroll: 3,
        }
    },

   ]
  });


});



   


