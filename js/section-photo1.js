$(function(){
  function contentContainer(){
    var h = $('.yj-section-photo1-2 .main-content li.content-container').innerWidth()
    $('.yj-section-photo1-2 .main-content li.content-container').height(h)
  }
  contentContainer()
  $('main').bind('wheel', function(){
    contentContainer()
  })
  $(window).resize(function(){
    contentContainer()
  })
})