$(function(){
  initialState = 'content'

  function getWinInfo(){
    scrt = $('main').scrollTop()
    scrl = $(window).scrollLeft()
    winw = $(window).width()
    winh = $(window).height()
    doch = $(document).height()
    
  }//fn getWinInfo 
   
  getWinInfo()

  $(window).resize(function(){
    getWinInfo()
  })
  $('main').scroll(function(){
    getWinInfo()
  })//window event
})//ready