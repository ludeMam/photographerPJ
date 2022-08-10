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
    if(winw>=1000){
      textLocation = (textRange*(-scrRatio))+600
    }
    if(winw<1000 && winw>=800){
      textLocation = (textRange*(-scrRatio))+300
    }else if(winw<800 && winw>=600){
      textLocation = (textRange*(-scrRatio))+320
    }else if(winw<600 && winw>=500){
      textLocation = (textRange*(-scrRatio))+350
    }else if(winw<500 && winw>450){
      textLocation = (textRange*(-scrRatio))+370
    }else if(winw<=450){
      textLocation = (textRange*(-scrRatio))+250
    }   
    console.log(textLocation);
    $('section.yj-introduce-section div.profile-text').css({'transform':'translateY('+textLocation+'px)'})
    imgT=$('section.yj-introduce-section figure.profile-img-container img.profile-img').offset().top+scrt
    imgH=$('section.yj-introduce-section figure.profile-img-container img.profile-img').innerHeight()
    meta = 0 +(scrt-(imgT-winh*0.5+imgH*0.5)) * -0.1
    if(meta<0){meta=0}
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