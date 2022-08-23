$(function(){
  var scrS
  var scrE
  var scrScope
  var scrR
  var mainH
  var mainHeight
  function contentContainer(){
  }
  contentContainer()
  $('main').bind('wheel', function(){
    contentContainer()
  })
  $(window).resize(function(){
    contentContainer()
  })

  var h = $('.yj-section-photo1-2 .main-content li.content-container').innerWidth()
  $('.yj-section-photo1-2 .main-content li.content-container').height(h)
/*   var mainHeight = $('section.yj-section-photo1-2').innerHeight() */

/* function contentContainer(){
  scrS = winh*0.5
  scrE = $('.yj-section-photo1-2').offset().top+scrt+$('.yj-section-photo1-2').innerHeight()-winh*0.5
  scrScope = scrE - scrS
  scrR = (scrt-scrS)/scrScope
  mainH = $('.main-content').innerHeight()*0.8
  mainHeight = (-1*mainH) * scrR + mainH
  console.log(mainHeight);
  $('div.main-content-bg').height(mainHeight)
} */
})