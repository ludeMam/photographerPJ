$(function(){

  var n = 0
  setInterval(function(){
    n ++
    if(n > 4) n = 1
    $('.section-contact-1 .contact-box .contact-img ul li').stop().fadeOut()
    $('.section-contact-1 .contact-box .contact-img ul li.img'+n).stop().fadeIn()
  },3000)

})