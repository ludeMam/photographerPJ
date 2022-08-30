$(function(){


  function zoom(pageX, pageY , el){
    var pageX = pageX
    var pageY = pageY
    var el = el
    var zoomEl = el.siblings('.zoom-lg')
    var zoomElImg = zoomEl.children('img')
    var elX = el.offset().left
    var elY = el.offset().top
    var elW = el.innerWidth()
    var elH = el.innerWidth()
    var zoomElW = zoomEl.innerWidth()
    var zoomElH = zoomEl.innerHeight()
    var zoomElImgW = zoomElImg.innerWidth()
    var zoomElImgH = zoomElImg.innerHeight()
    var moveRangeX = zoomElW - zoomElImgW
    var moveRangeY = zoomElH - zoomElImgH
    var mouseX = pageX - elX
    var mouseY = pageY - elY
    var mouseRatioX = mouseX / elW
    var mouseRatioY = mouseY / elH
    var moveX = mouseRatioX * moveRangeX
    var moveY = mouseRatioY * moveRangeY
    zoomElImg.css({'left':moveX,'top':moveY})
    /* sm */

    zoomEl = el.find('div')
    var zoomElX = zoomEl.offset().left
    var zoomElY = zoomEl.offset().top
    var zoomElW = zoomEl.innerWidth()
    var zoomElH = zoomEl.innerHeight()
    var zoomImg = zoomEl.find('.img-zoom-sm')
    var zoomImgX = zoomImg.offset().left
    var zoomImgY = zoomImg.offset().top
    var zoomImgW = zoomImg.innerWidth()
    var zoomImgH = zoomImg.innerHeight()
    var maskW = zoomElW * 0.3
    moveRangeX = zoomElW - zoomImgW
    moveRangeY =  zoomElH - zoomImgH
    mouseX = pageX - zoomElX
    mouseY = pageY - zoomElY
    mouseRatioX = mouseX / zoomElW
    mouseRatioY = mouseY / zoomElH
    moveX = mouseRatioX * moveRangeX
    moveY = mouseRatioY * moveRangeY
    maskX = pageX - zoomImgX 
    maskY = pageY - zoomImgY 
    console.log(moveRangeX,moveRangeY);
    zoomImg.css({'left':moveX,'top':moveY,'clip-path': `circle(${maskW*0.5}px at ${maskX}px ${maskY}px)`})
  }//fn

  $('ul.main-content li .original').mousemove(function(e){
    zoom(e.pageX, e.pageY, $(this))
  }).bind('touchmove',function(e){
    zoom(e.originalEvent.changedTouches[0].pageX, e.originalEvent.changedTouches[0].pageY)
  })



  $('ul.main-content  li .original').mouseenter(function(){
    $(this).parent('li').addClass('active')
  }).mouseleave(function(){
    $(this).parent('li').removeClass('active')
  })
})