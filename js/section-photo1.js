$(function(){
  var h
  function contentContainer(){
    h = $('.yj-section-photo1-2 .main-content li.content-container').innerWidth()
    $('.yj-section-photo1-2 .main-content li.content-container').height(h)  
  }
  $('.yj-section-photo1-2 .main-content figure.original div').mouseenter(function(){
    if(winw>801){
      $(this).parent().children('figcaption').children().css({
        'background-color': '#211E18',
        'color': 'white',  
        'padding' : '5px'
      })//text
    }
    $(this).parent().children('figcaption').addClass('active')
    $(this).parent().siblings('.dummy-figure').children('img').addClass('active')//img
  }).mouseleave(function(){
    if(winw>801){
      $(this).parent().children('figcaption').children().css({
        'background-color': 'inherit',
        'color': '#403A2F',
        'padding' : '0px'
      })
    }
    $(this).parent().children('figcaption').removeClass('active')
    $(this).parent().siblings('.dummy-figure').children('img').removeClass('active')//img
  })//mouse hover

  $('.yj-section-photo1-2 .main-content figure.original div').mousemove(function(e){
    var mouseX=e.pageX
    var mouseY=e.pageY
    var zImgOffT=$(this).parent().siblings('.dummy-figure').children('.circle-zoom').offset().top
    var zImgOffL=$(this).parent().siblings('.dummy-figure').children('.circle-zoom').offset().left
    var maskSize=250
    var maskX=mouseX-zImgOffL-maskSize*0.5
    var maskY=mouseY-zImgOffT-maskSize*0.5
    var mouseSrtX=$(this).offset().left
    var mouseSrtY=$(this).offset().top
    var mouseXrange=$(this).innerWidth()
    var mouseYrange=$(this).innerHeight()
    var zImgOffW=$(this).parent().siblings('.dummy-figure').children('.circle-zoom').innerWidth()
    var zImgOffH=$(this).parent().siblings('.dummy-figure').children('.circle-zoom').innerHeight()
    var mouseRatioX=(mouseX-mouseSrtX)/mouseXrange
    var mouseRatioY=(mouseY-mouseSrtY)/mouseYrange
    var zImgMoveRangeX=$(this).innerWidth()-zImgOffW
    var zImgMoveRangeY=$(this).innerHeight()-zImgOffH
    var zoomX=mouseRatioX*zImgMoveRangeX
    var zoomY=mouseRatioY*zImgMoveRangeY
    $(this).parent().siblings('.dummy-figure').children('.circle-zoom').css({
      'top':zoomY,
      'left':zoomX,
      '-webkit-mask-position':`${maskX}px ${maskY}px`
    })
  })
  contentContainer()
  $('main').bind('wheel', function(){
    contentContainer()
  })
  $(window).resize(function(){
    contentContainer()
  })



  /* 
      var figureT
      var figureH
      var figureMeta
      var scrS
      var scrE
      var scrScope
      var scrR
      $('.yj-section-photo1-2 .main-content .content-container').each(function(){
      figureT=$(this).offset().top + scrt
      figureH=$(this).innerHeight()
      figureMeta = 0 + (scrt-(figureT-winh*0.5+figureH*0.5))*0.15 
      $(this).children('div').children('img.originImg').css({
        'transform' : `translate(-5%,calc(-5%+${figureMeta}))`
      })
      scrS=$(this).offset().top+scrt-winh
      scrE=$(this).offset().top+scrt-winh*0.5
      scrScope=scrE-scrS
      scrR=(scrt-scrS)/scrScope
      sclT = (0.2*scrR)+1
      if(sclT<0){sclT=0}
      if(sclT>1.2){sclT=1.2}
      if(winw<801){
        $(this).children('figure').children('div').children('img.originImg').css({
          'transform' : `translate(-5%,calc(-5%+${figureMeta})) scale(${sclT})`
        })
      }
    }) */



/*   $('.yj-section-photo1-2 .main-content figure').mouseenter(function(){
    $(this).children('div').children('img').css({
      'opacity' : '1'
    })
  }).mouseleave(function(){
    $(this).children('div').children('img').css({
      'opacity' : '.7'
    })
  }) */

/*   var mainHeight = $('section.yj-section-photo1-2').innerHeight() */
/* 
  var scrS
  var scrE
  var scrScope
  var scrR
  var mainH
  var mainHeight
  function contentContainer(){
  scrS = winh*0.5
  scrE = $('.yj-section-photo1-2').offset().top+scrt+$('.yj-section-photo1-2').innerHeight()-winh*0.5
  scrScope = scrE - scrS
  scrR = (scrt-scrS)/scrScope
  mainH = $('.main-content').innerHeight()*0.8
  mainHeight = (-1*mainH) * scrR + mainH
  console.log(mainHeight);
  $('div.main-content-bg').height(mainHeight)
  } 
*/
})