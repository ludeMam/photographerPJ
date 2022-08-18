$(function(){
  var scrS
  var scrE
  var scrRange
  var scrR
  var bgScaleS
  var bgScaleT
  var bgTransS
  var bgTransT
  var manTransS
  var manTransT
  function section1Motion(){
    scrS=0
    scrE=$('figure.about-me-figure').offset().top+scrt-winh*0.5
    scrRange=scrE
    scrR=scrt/scrRange
    bgScaleS= 1.4
    bgScaleT=-0.4*scrR+bgScaleS
    if(bgScaleT<1){bgScaleT=1}
    bgTransS=12
    bgTransT=-12*scrR+bgTransS
    if(bgTransT<1){bgTransT=1}
    $('figure.about-me-figure img.bg').css({
      'transform': 'scale('+ bgScaleT+') translateY('+bgTransT+'%)'
    })
    manTransS=15
    manTransT=-15*scrR+manTransS
    if(manTransT<0){manTransT=0}
    $('figure.about-me-figure img.man').css({
      'transform' : 'translateY('+manTransT+'%)'
    })
  }
  section1Motion()
  $('main').bind('scroll', function(){
    section1Motion()
  })
  $(window).resize(function(){
    section1Motion()
  })
})