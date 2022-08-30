$(function () {
  var offsetTop
  var h
  var ty
  var start
  var end
  var scrollRatio
  var dashOffset
  function motion() {
    offsetTop = $('.section-svg-camera').offset().top + scrt
    h = $('.section-svg-camera').innerHeight()
    start = offsetTop - winh * 0.5 + h * 0.5
    end = offsetTop + h + $('.ha-section-about-1').innerHeight() - winh
    if (scrt >= start && scrt < end) {
      ty = scrt - start
    } else if (scrt <= start) {
      ty = 0
    } else if (scrt >= end) {
      ty = end - start
    }
    $('.section-svg-camera div').css({ 'transform': `translateY(${ty}px)` })
    scrollRatio = (scrt - start) / (end - start)
    if (scrollRatio < 0) scrollRatio = 0; if (scrollRatio > 1) scrollRatio = 1
    dashOffset = 1 - scrollRatio
    $('.section-svg-camera div .svg-camera2 path').css({'stroke-dashoffset':`${dashOffset}px`})
    requestAnimationFrame(motion)
  }//fn

  requestAnimationFrame(motion)
})