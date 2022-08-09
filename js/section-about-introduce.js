$(function(){
  var scrS
  var textS
  var textE
  var textRange
  var textLocation
  var imgT
  var meta
  function introTextScrMotion(){
    scrS=0
    scrE = $('section.yj-introduce-section').offset().top + scrt 
    scrRatio= (scrt-scrS)/scrE
    if(scrRatio>1){scrRatio=1}
    textS = 0
    textE = $('section.yj-introduce-section').innerHeight()*0.5
    textRange = textE-textS
    textLocation = textRange*(1-scrRatio) + textS
    $('section.yj-introduce-section div.profile-text').css({'top':textLocation})
    imgT=$('section.yj-introduce-section figure.profile-img-container img.profile-img').offset().top+scrt
    imgH=$('section.yj-introduce-section figure.profile-img-container img.profile-img').innerHeight()
    meta = 0 +(scrt-(imgT-winh*0.5+imgH*0.5)) * -0.1
    $('section.yj-introduce-section figure.profile-img-container img.profile-img').css({
      '-webkit-mask-position': 'center '+meta + 'px'
    })
  }
  introTextScrMotion()
  $('main').bind('scroll',function(){
    introTextScrMotion()
  })
  $(window).resize(function(){
    introTextScrMotion()
  })
})