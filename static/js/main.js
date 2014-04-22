/*jshint browser:true, indent:2, laxcomma:true, loopfunc: true */
/*global NodeList, HTMLCollection */

$(function () {
  'use strict';

  var scrollOffsets = [0, 850, 1200, 1550, 3000]
    , scrollIdx = 0
    , isScrolling = false
    , first = true;
    ;

  $(window).scroll(function() {
    var s = $(window).scrollTop()
      , height = 1800//$('.container').height() * 5
      , opacityVal = Math.max(0, 1 - (s / height));

    $('.blur').css('opacity', opacityVal);
  });


  $('.imagine').delay(500).fadeIn(800);

  var s = skrollr.init();

  
  $(window).mousewheel(function(event) {

    if (first) {first = false; return; };
    if (isScrolling) { console.log('already scrolling'); return; }

    var isScrollingDown = event.deltaY > 0 ? false : true;
    
    if (isScrollingDown && (scrollIdx === scrollOffsets.lenght - 1) ) { console.log('down limit reached'); return; }
    if (!isScrollingDown && scrollIdx === 0 ) { console.log('up limit reached'); return; }

    isScrolling = true;
    
    if (isScrollingDown) {
      scrollIdx = scrollIdx + 1;
    
    } else {
      scrollIdx = scrollIdx  - 1;
    }

    $('body').scrollTo(scrollOffsets[scrollIdx], 800, {
      onAfter: function () { console.log('scroll end'); isScrolling = false; }
    });
  });
});
