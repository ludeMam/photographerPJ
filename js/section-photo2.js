$(function(){
	var scrS
  var scrR
	var scrE
	var imgS
	var imgR
	var imgL
  function ysboxMotion(){
  scrS = 0
	scrE = $('.ys-imgcontainer1 li').offset().top+scrt
  scrR = (scrt - scrS)/scrE
  if (scrR > 1){scrR = 1}
  imgS = -20
  imgR = 20
  imgL = imgR * scrR + imgS
  $('.ys-imgcontainer1 li').children('img').css({'transform':'scale(1.3) translateY('+imgL+'%)'})
  }
  ysboxMotion()
	$('main').bind('scroll',function(){ysboxMotion()})
	$(window).resize(function(){ysboxMotion()})
})