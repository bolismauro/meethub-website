/*jshint browser:true, laxcomma:true, eqnull:true, indent:2, unused:true, undef:true, devel:true*/
/*globals NodeList, HTMLCollection*/

window.addEventListener('DOMContentLoaded', function () {
  
  'use strict';

  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;


  //  function for using smoothscrolling vanilla script
  function _smoothScrollTo (idTarget) {
    window.smoothScroll(document.getElementById(idTarget), 1000);
  }
  /*
    action for clickable smoothscrolling elements

    example use (using jade, obv):

      % clickable element   >   a.link-scroll(href, data-where-to='unique id without hash')
      | scrolling element   >   #data-where-id (same as before!)

  */
  document.querySelectorAll('.link-scroll').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();   // prevent default action if el is a link
      _smoothScrollTo(this.getAttribute('data-where-to'));
      return false;
    });
  });




  //  read more link
  function readMore (target) {
    var _h = 0;
    var _el = target.previousSibling;

    if (_el.classList.contains('show')) {
      _h = 0;
      _el.classList.remove('show');
      target.textContent = 'Leggi il programma';
    } else {
      _h = _el.querySelector('.text').offsetHeight;
      _el.classList.add('show');
      target.textContent = 'Chiudi';
    }

    _el.style.height = _h + 'px';
  }

  document.querySelectorAll('.single-course p.read-more').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      readMore(e.target);
      return false;
    });
  });

});