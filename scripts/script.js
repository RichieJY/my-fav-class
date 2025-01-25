// $ = jQ territory
// $(stuff in here) = js selector  (same as css)
// document = DOM, O is for Obj
// .ready() is a method for the document
// stuff inside the .ready parenthesis = parameter
// this stuff: function(){}...IIFE, Immediatley invoked f/n expression
//

$(document).ready(function(){
  $("p").click(function(){  <!-- NEW CODE: Kinda played with making the paragraphs disapear? idk saw it on w3 and thought it looked cool. not practical though
    $(this).hide();
  });
  $("h4").click(function(){
    $(this).hide();
  });
});