$(function(){
  var mx
  var my
  var mRatioX
  var mRatioY
  var mRangeX
  var mRangeY
  var orgX
  var zommX
  var diffX
  var orgY
  var zommY
  var diffY
  var imgRangeX
  var imgRangeY

  $('ul.main-content li:first-child').each(function(){

  })

  $('ul.main-content li .original').mousemove(function(e){
    mx = e.pageX
    my = e.pageY
    orgX= $(this).offset().left
    orgY= $(this).offset().top
    diffX = orgX - mx
    diffY = orgY - my
    mRangeX = $(this).innerWidth()
    mRangeY = $(this).innerHeight()
    mRatioX = diffX / mRangeX
    mRatioY = diffY / mRangeY
    
  })



  $('ul.main-content  li').mouseenter(function(){
    $(this).addClass('active')
  }).mouseleave(function(){
    $(this).removeClass('active')
  })
})