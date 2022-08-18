$(function () {
  var scrStart//스크롤 범위의 시작위치
  var scrEnd//스크롤비율 시작위치
  //현재 스크롤 위치 (window.js에서 구해놧음)
  var scrRange//스크롤범위
  var scrollRatio //스크롤비율 0~1
  var strokeOffset //선이보이는위치

  function svgLineDrawing(){
    scrStart = parseInt($('.ha-Homesection-2').offset().top) + scrt
    scrEnd = parseInt($('.ha-Homesection-3').offset().top + scrt) - winh
    scrRange = scrEnd - scrStart
    scrollRatio= 2*(scrt-scrStart) / scrRange
    if(scrollRatio<0){scrollRatio = 0}
    if(scrollRatio>1){scrollRatio = 1}
    if(winw < 900){scrollRatio = 1}
    strokeOffset = 1 - scrollRatio
    $('.ha-Homesection-2 .svg1 path').css({'stroke-dashoffset':strokeOffset})
  }//fn

  svgLineDrawing()
  $('main').bind('scroll', function(){
    svgLineDrawing()
  })
  $(window).resize(function(){
    svgLineDrawing()
  })
})