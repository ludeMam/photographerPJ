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
    var src = $(this).find('.original img').attr('src')
    var imgCnt = 10
    for(i=1;i<=imgCnt;i++){
      $(this).find('.zoom-lg').append('<img class="zoom-lg-img-'+i+'" src="'+src+'">')
      /* resize */
      var w = $(this).find('.original img').width()
      var imgw = w + (i - 1) * (w / imgCnt) 
      var mskw = w - (i - 1) * (w / imgCnt)
      $('.zoom-lg-img-'+i).css({'width':+imgw+'px','height':imgw + 'px','clip-path':'circle('+mskw+'px)'}) 

    }//for
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