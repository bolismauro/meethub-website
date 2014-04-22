/*jshint browser:true, indent:2, laxcomma:true, loopfunc: true */
/*global NodeList, HTMLCollection */

$(function () {
  'use strict';

  $(window).scroll(function() {
    var s = $(window).scrollTop()
      , height = 1800//$('.container').height() * 5
      , opacityVal = Math.max(0, 1 - (s / height));

    $('.blur').css('opacity', opacityVal);
    console.log(opacityVal);
  });


  $('.imagine').delay(500).fadeIn(800);



  var s = skrollr.init();
});
