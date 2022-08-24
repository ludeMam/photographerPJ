$(function(){
  var figureT
  var figureH
  var figureMeta
  var scrS
  var scrE
  var scrScope
  var scrR
  var opcT
  function contentContainer(){
    $('.yj-section-photo1-2 .main-content figure').each(function(){
      figureT=$(this).offset().top + scrt
      figureH=$(this).innerHeight()
      figureMeta = 0 + (scrt-(figureT-winh*0.5+figureH*0.5))*0.15 
      $(this).children('div').children('img').css({
        'transform' : `translate(-5%,calc(-5%+${figureMeta}))`
      })
    })
  }
  function photo1_2imgOpc(){
    $('.yj-section-photo1-2 .main-content .content-container').each(function(){
      scrS=$(this).offset().top+scrt-winh
      scrE=$(this).offset().top+scrt-winh*0.5
      scrScope=scrE-scrS
      scrR=(scrt-scrS)/scrScope
      opcT = (1*scrR)
      sclT = (0.2*scrR)+1
      if(opcT<0){opcT=0}
      if(opcT>1){opcT=1}
      if(sclT>1.2){sclT=1.2}
      if(winw<801){
        $(this).children('figure').children('div').children('img').css({
          'opacity':`${opcT}`,
          'transform' : `scale(${sclT})`
        })
      }
    })
  }
  function photo1_2imgMotion(){
    if(winw>=801){
      $('.yj-section-photo1-2 .main-content figure div').mouseenter(function(){
        $(this).children('img').css({
          'opacity' : '1'
        })
        $(this).parent().children('figcaption').children().css({
          'background-color': '#211E18',
          'color': 'white',
          'padding' : '10px'
        })
      }).mouseleave(function(){
        $(this).children('img').css({
          'opacity' : '.7'
        })
        $(this).parent().children('figcaption').children().css({
          'background-color': 'inherit',
          'color': '#403A2F',
          'padding' : '0px'
          })
      })
    }
  }
  contentContainer()
  photo1_2imgOpc()
  photo1_2imgMotion()
  $('main').bind('wheel', function(){
    contentContainer()
    photo1_2imgOpc()
    photo1_2imgMotion()
  })
  $(window).resize(function(){
    contentContainer()
    photo1_2imgOpc()
    photo1_2imgMotion()
  })

  var h = $('.yj-section-photo1-2 .main-content li.content-container').innerWidth()
  $('.yj-section-photo1-2 .main-content li.content-container').height(h)




/*   $('.yj-section-photo1-2 .main-content figure').mouseenter(function(){
    $(this).children('div').children('img').css({
      'opacity' : '1'
    })
  }).mouseleave(function(){
    $(this).children('div').children('img').css({
      'opacity' : '.7'
    })
  }) */

/*   var mainHeight = $('section.yj-section-photo1-2').innerHeight() */
/* 
  var scrS
  var scrE
  var scrScope
  var scrR
  var mainH
  var mainHeight
  function contentContainer(){
  scrS = winh*0.5
  scrE = $('.yj-section-photo1-2').offset().top+scrt+$('.yj-section-photo1-2').innerHeight()-winh*0.5
  scrScope = scrE - scrS
  scrR = (scrt-scrS)/scrScope
  mainH = $('.main-content').innerHeight()*0.8
  mainHeight = (-1*mainH) * scrR + mainH
  console.log(mainHeight);
  $('div.main-content-bg').height(mainHeight)
  } 
*/
})