$(function() {
  
  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic();
  
  // Create Animation for 02s
  var tween = TweenMax.fromTo(".home-frame2-__img-left1", 1,{x:-100},
  {x:0});
  
  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#scene',
    offset: 300 /* offset the trigger 100px below #scene's top */
  })
  .setTween(tween)
  .addTo(scrollMagicController);
  

   var tween2 = TweenMax.fromTo(".home-frame2-__img-left2", 1,{x:-100},
  {x:0});
  

  var scene2 = new ScrollScene({
    triggerElement: '#scene2',
    offset: 500 
  })
  .setTween(tween2)
  .addTo(scrollMagicController);
  
  
 
  var tween3 = TweenMax.fromTo(".home-frame2-__img-right1", 1,{x:100},
  {x:0});
  
 
  var scene3 = new ScrollScene({
    triggerElement: '#scene3',
    offset: 300 
  })
  .setTween(tween3)
  .addTo(scrollMagicController);

  
  var tween4 = TweenMax.fromTo(".home-frame2-__img-right2", 1,{x:100},
  {x:0});
  
  
  var scene4 = new ScrollScene({
    triggerElement: '#scene4',
    offset: 500 
  })
  .setTween(tween4)
  .addTo(scrollMagicController);
  

});


