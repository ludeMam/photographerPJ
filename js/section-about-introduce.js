$(function(){
  var textS
  var textE
  var textRange
  function introTextScrMotion(){
    textS = $('.yj-introduce-section .profile-text').offset().top + scrt+300
    textE = $('.yj-introduce-section').offset().top+scrt+$('.yj-introduce-section').innerHeight()
    textRange = textE-textS
    textRatio= (scrt-textS)/textRange
    if(textRatio>1){textRatio=1}
    if(textRatio<0){textRatio=0}
    console.log(textRatio);
  }
  introTextScrMotion()
  $(window).scroll(function(){
    introTextScrMotion()
  }).resize(function(){
    introTextScrMotion()
  })

})