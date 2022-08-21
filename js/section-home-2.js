$(function () {
  var offsetTop
  var offsetTopNext
  var offsetLeft
  var offsetLeftNext
  var elHeight
  var elWidth
  var ty
  var tyMax
  var tx
  var txMax
  var ts
  var ty
  var blur
  var opacity
  var cosAngle
  var cosRadius
  var cosCenter
  var cosRadian
  var diffX
  var diffY
  var atan2Radian
  var atan2Angle
  var lengthC
  var scrollStart
  var scrollEnd
  var scrollRange
  var scrollRatio
  var bgMoveRange
  var imgNumStart = 1
  var imgNumEnd = 10
  var imgNumRange = imgNumEnd - imgNumStart
  var imgNum
  function requestAnimationFrameCallBack() {
    /* figure---------------------------------------------------------------------------------------- */
    offsetTop = $('.camera-gallery').offset().top + scrt
    elHeight = $('.camera-gallery').innerHeight()
    scrollStart = offsetTop - winh * 0.5 + elHeight * 0.5
    scrollEnd = ($('.yj-home-section-2').offset().top + scrt) + $('.yj-home-section-2').innerHeight() - winh
    scrollRange = scrollEnd - scrollStart
    scrollRatio = (scrt - scrollStart) / scrollRange
    if (scrollRatio < 0) scrollRatio = 0; if (scrollRatio > 1) scrollRatio = 1
    imgNum = parseInt(imgNumStart + scrollRatio * imgNumRange)
    if (scrt >= scrollStart && scrt <= scrollEnd) {
      ty = scrt - scrollStart
    } else if (scrt < scrollStart) {
      ty = 0
    } else if (scrt > scrollEnd) {
      ty = scrollEnd - scrollStart
    }
    $('.camera-gallery .camera-gallery-inner').css({ 'transform': 'translateY(' + ty + 'px)' })
    $('.camera-gallery .img-back-container img, .camera-gallery .img-lenz-container img').removeClass('active')
    $('.camera-gallery .img-back-container .img-back-' + imgNum + ', .camera-gallery .img-lenz-' + imgNum).addClass('active')
    console.log(scrollRatio);
    /* textbox move motion ------------------------------------------------------------------------- */
    $('.yj-home-section-2 .textbox').each(function () {
      offsetTop = $(this).offset().top + scrt
      elHeight = $(this).innerHeight()
      cosCenter = 0
      cosRadius = winw * 0.3
      cosAngle = 90 + (scrt - (offsetTop - winh * 0.9 + elHeight)) * 0.3
      cosRadian = cosAngle / 180 * Math.PI
      tx = cosCenter + cosRadius * Math.cos(cosRadian)
      $(this).css({ 'transform': 'translateX(' + tx + 'px)' })
    })//each
    /* textbox line motion ---------------------------------------------------------------------------------- */
    $('.yj-home-section-2 .textbox').not($('.yj-home-section-2 .textbox').last()).each(function () {
      elHeight = $(this).innerHeight()
      offsetTop = $(this).offset().top + scrt + elHeight
      offsetTopNext = $(this).next().offset().top + scrt
      diffY = offsetTopNext - offsetTop
      elWidth = $(this).innerWidth()
      offsetLeft = $(this).offset().left + elWidth * 0.5
      offsetLeftNext = $(this).next().offset().left + $(this).next().innerWidth() * 0.5
      diffX = offsetLeftNext - offsetLeft
      atan2Radian = Math.atan2(diffY, diffX)
      atan2Angle = atan2Radian * 180 / Math.PI
      lengthC = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))
      $(this).find('.line').css({ 'width': lengthC, 'transform': 'rotate(' + atan2Angle + 'deg)' })
    })//each
    /* bg prallax ---------------------------------------------------------------------------------- */
    $('.yj-home-section-2 .section-bg').each(function () {
      scrollStart = ($('.yj-home-section-2').offset().top + scrt) - winh
      scrollEnd = ($('.yj-home-section-2').offset().top + scrt) + $('.yj-home-section-2').innerHeight() - winh
      scrollRange = scrollEnd - scrollStart
      scrollRatio = (scrt - scrollStart) / scrollRange
      if (scrollRatio < 0) scrollRatio = 0; if (scrollRatio > 1) scrollRatio = 1
      bgMoveRange = $('.yj-home-section-2').innerHeight() - $(this).innerHeight()
      ty = scrollRatio * bgMoveRange
      $(this).css({ 'transform': 'translateY(' + ty + 'px)' })
    })//each

    requestAnimationFrame(requestAnimationFrameCallBack)
  }//fn
  requestAnimationFrame(requestAnimationFrameCallBack)
})