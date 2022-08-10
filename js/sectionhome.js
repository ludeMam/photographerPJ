$(function(){
  function hScrM(){
    var textOffset = $('.textbox').offset().top + scrt
    var textInnerH = $('.textbox').innerHeight()
    var meta = 1 - (scrt - (textOffset - winh * 0.5 + textInnerH * 0.5)) * -0.002
    if (meta < 0) { meta = 0 }
    if (meta > 1) {meta = 1}
    $('.textbox').css({ 'opacity': meta })
    
    var section1imgOffset = $('.bg-slider , .smbg').offset().top +scrt //바깥밖스높이임
    var section1imginnerH = $('.bg-slider , smbg').innerHeight()
    var meta = 1 + (scrt - (section1imgOffset  - winh * 0.5 + section1imginnerH * 0.5)) * 0.0004
    if(meta < 0) {meta = 0}
    if(meta > 1) {meta = 1}
    $('.bg-slider img.lg , .smbg img.sm').css({ 'transform': 'scale(' + meta + ')' })
    
  }
  hScrM()
  $('main').bind('scroll', function(){
    hScrM()
  })
  $(window).resize(function(){
    hScrM()
  })
})
