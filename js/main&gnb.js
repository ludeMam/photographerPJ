
$(function(){
  var url 
  var section
  var sectionNumber
  function urlMatch(){
    url = location.href
    if(url.match('home')){
      section = ".section-home";sectionNumber=1
    }else if(url.match('about')){
      section = ".section-about";sectionNumber=2
    }else if(url.match('photo1')){
      section = ".section-photo1";sectionNumber=3
    }else if(url.match('photo2')){
      section = ".section-photo2";sectionNumber=4
    }else if(url.match('contact')){
      section = ".section-contact";sectionNumber=5
    }
    $('.section-container').css({'display':'block'})
    $(section).css({'animation':'active'+sectionNumber+' 0s both'})
    $('.section-container:not('+section+')').each(function(){
      var sectionNumber = $(this).attr('data-section-number')
      $(this).css({'animation':'de-active'+sectionNumber+' 0s both'})
    })
    $('main').css({'overflow-y':'scroll'})
  }//fn

  urlMatch()

  window.addEventListener('hashchange', function(){
    urlMatch()
  })

  $('.btn-menu').click(function(){
    $(this).stop().fadeOut()
    initialState = "menu"
    var intervalID = setInterval(function(){
      scrt += (0 - scrt)  * 0.4
      if(scrt < 1){
        scrt = 0
        clearInterval(intervalID)
        $('main').css({'overflow-y':'hidden'})
        $('.section-container').css({'animation':'none'})
        $('.section-container').css('animation')
        $(section).css({'animation':'active'+sectionNumber+' 2s both reverse'})
        $('.section-container:not('+section+')').each(function(){
          var sectionNumber = $(this).attr('data-section-number')
          $(this).css({'animation':'de-active'+sectionNumber+' 2s both reverse'})
        })
      }
      $('main')[0].scrollTo({
        top: scrt,
      })
    },50)
  })

  $('a.btn-page').click(function(e){
    e.preventDefault()
    var urlParam= $(this).attr('href')
    section = $(this).attr('data-section')
    sectionNumber = $(this).attr('data-section-number')
    $('main').css({'overflow-y':'scroll'})
    $('.section-container').css({'animation':'none'})
    $('.section-container').css('animation')
    $(section).css({'animation':'active'+sectionNumber+' 2s both'})
    $('.section-container:not('+section+')').each(function(){
      var sectionNumber = $(this).attr('data-section-number')
      $(this).css({'animation':'de-active'+sectionNumber+' 2s both'})
    })
    setTimeout(function(){
      $('.btn-menu').stop().fadeIn()
      history.pushState(null,null,'/'+urlParam)
    },2000)
  })

  /*video ----------------------------------------------- */
  function changeYoutubeSize(){
    var youtubeW = $('.youtube-size-img').width()
    var youtubeH = $('.youtube-size-img').height()
    $('.section-video-intro iframe').width(youtubeW)
    $('.section-video-intro iframe').height(youtubeH)
  }
  changeYoutubeSize()
  $(window).load(function(){
    changeYoutubeSize()
  }).resize(function(){
    changeYoutubeSize()
  })
})