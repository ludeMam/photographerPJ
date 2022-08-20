$(function () {
  var offsetTop
  var elHeight
  var ty
  var tyMax
  var tx
  var txMax
  var ts
  var blur
  var opacity
  function motion() {
    /* figure--------------------------------------------------------- */
    offsetTop = $('.yj-home-section-1 .home-figure-wrap').offset().top + scrt
    elHeight = $('.yj-home-section-1 .home-figure-wrap').innerHeight()
    ty = 0 + (scrt - (offsetTop - winh * 0.5 + elHeight * 0.5)) * 0.15
    tyMax = (elHeight * 1.3 - elHeight) * 0.5
    if (ty < -tyMax) ty = -tyMax; if (ty > tyMax) ty = tyMax
    ts = 1.3
    blur = 0 + (scrt - (offsetTop - winh * 0.5 + elHeight * 0.5)) * 0.01
    if (blur > 1) blur = 1; if (blur < 0) blur = 0;
    $('.home-figure-wrap .bg').css({ 'transform': 'translateY(' + ty + 'px) scale(' + ts + ')', 'filter': 'blur(' + blur + 'px)' })
    $('.home-figure-wrap .deco').css({ 'transform': 'translateY(' + -ty * 0.5 + 'px)' })
    ts = 1.3 + (scrt - (offsetTop - winh * 0.5 + elHeight * 0.5)) * 0.001
    if (ts < 1.3) ts = 1.3;
    $('.home-figure-wrap .man').css({ 'transform': 'translateY(' + -ty + 'px) scale(' + ts + ')' })
    /* textbox--------------------------------------------------------- */
    offsetTop = $('.yj-home-section-1 .textbox').offset().top + scrt
    elHeight = $('.yj-home-section-1 .textbox').innerHeight()
    tx = 0 + (scrt - (offsetTop - winh * 0.5 + elHeight * 0.5)) * -0.1
    txMax = 100
    if (tx < 0) tx = 0; if (tx > txMax) tx = txMax
    opacity = 1 + (scrt - (offsetTop - winh * 0.5 + elHeight * 0.5)) * 0.001
    $('.yj-home-section-1 .textbox .photo').css({ 'right': tx + '%', 'opacity': opacity })
    blur = 0 + (scrt - (offsetTop - winh * 0.5 + elHeight * 0.5)) * -0.03
    if (blur > 1) blur = 1; if (blur < 0) blur = 0;
    $('.yj-home-section-1 .textbox .bg').css({ 'filter': 'blur(' + blur + 'px)' })
    ts = 1.3 + (scrt - (offsetTop - winh * 0.5 + elHeight * 0.5)) * -0.001
    if (ts < 1) ts = 1;
    $('.yj-home-section-1 .textbox .man').css({ 'transform': 'scale(' + ts + ')' })
  }//fn
  motion()
  $(window).resize(function () {
    motion()
  })
  $('main').scroll(function () {
    motion()
  })//window
})