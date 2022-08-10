$(function(){
  var scrS
  var scrE
  var scrRatio
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
    if(winh>999){
      textLocation = textRange*(0.9-scrRatio) + textS
    }else if(winh<1000 && winh>600){
      textLocation = textRange*(0.8-scrRatio) + textS
    }else{
      textLocation = textRange*(0.7-scrRatio) + textS
    }

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