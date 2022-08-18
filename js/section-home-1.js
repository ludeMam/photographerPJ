$(function(){
  function hScrM(){
    var textOffset = $('.ha-Homesection-1 .center .textbox').offset().top + scrt
    var textInnerH = $('.ha-Homesection-1 .center .textbox').innerHeight()
    var meta = 1 - (scrt - (textOffset - winh * 0.5 + textInnerH * 0.5)) * -0.002
    if (meta < 0) { meta = 0 }
    if (meta > 1) {meta = 1}
    $('.ha-Homesection-1 .center .textbox').css({ 'opacity': meta })
    
    var section1imgOffset = $('.ha-Homesection-1 .bg-slider , .ha-Homesection-1 .smbg').offset().top +scrt //바깥밖스높이임
    var section1imginnerH = $('.ha-Homesection-1 .bg-slider , .ha-Homesection-1 .smbg').innerHeight()
    var meta = 0 + Math.abs(scrt - (section1imgOffset  - winh * 0.5 + section1imginnerH * 0.5)) * 0.008
    if(meta < 0) {meta = 0}
    if(meta > 5) {meta = 5}
    $('.ha-Homesection-1>.bg-slider>img.lg , .ha-Homesection-1>figure.smbg>img.sm').css({ 'filter': 'blur(' + meta + 'px'+')' })
    
  }
  hScrM()
  $('main').bind('scroll', function(){
    hScrM()
  })
  $(window).resize(function(){
    hScrM()
  })
})
