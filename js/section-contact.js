$(function(){

  var n = 0
  setInterval(function(){
    n ++
    if(n > 5) n = 1
    $('.section-contact-1 .contact-box .contact-img ul li').stop().fadeOut()
    $('.section-contact-1 .contact-box .contact-img ul li.img'+n).stop().fadeIn()
    $('.section-contact-1 ul.bg-img li').stop().fadeOut()
    $('.section-contact-1 ul.bg-img li.img'+n).stop().fadeIn()
  },3000)

})