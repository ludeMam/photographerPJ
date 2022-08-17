$(function(){
	var scrS
  var scrR
	var scrE
	var imgS
	var imgR
	var imgL
  function ysboxMotion(e){
  scrS = 0
	scrE = $(e).offset().top+scrt
  scrR = (scrt - scrS)/scrE
  if (scrR > 1){scrR = 1}
  imgS = -20
  imgR = 20
  imgL = imgR * scrR + imgS
  $(e).children('img').css({'transform':'scale(1.3) translateY('+imgL+'%)'})
  }

  ysboxMotion('.ys-imgcontainer1 li')
	$('main').bind('scroll',function(){ysboxMotion('.ys-imgcontainer1 li')})
	$(window).resize(function(){ysboxMotion('.ys-imgcontainer1 li')})

  ysboxMotion('.ys-imgcontainer2 li')
	$('main').bind('scroll',function(){ysboxMotion('.ys-imgcontainer2 li')})
	$(window).resize(function(){ysboxMotion('.ys-imgcontainer2 li')})
})