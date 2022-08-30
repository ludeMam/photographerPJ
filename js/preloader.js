$(window).ready(function () {
  var videoTotalCnt = $('video').size()

  var videoLoadedCnt = 0
  if (videoTotalCnt != 0) {
    $('video').each(function () {
      $(this).bind('canplay', function () {
        videoLoadedCnt++ 
        if (videoTotalCnt === videoLoadedCnt) {
          setTimeout(function () {
            $('.preloader').fadeOut(1000)
            $('body').css({ 'overflow': 'auto' })
          }, 500)
        }
      })
    })//each
  }else{
    setTimeout(function () {
      $('.preloader').fadeOut(1000)
      $('body').css({ 'overflow': 'auto' })
    }, 500)
  }
})
