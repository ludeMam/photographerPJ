$(function () {
    var scrS
    var scrE
    var scrRatio
    var imgS
    var imgRange
    var imgLocation
    function mainBgMotion() {
        scrS=0
        scrE=$('section.yj-main-section').offset().top+scrt
        scrRatio=(scrt-scrS)/scrE
        if(scrRatio>1){scrRatio=1}
        imgS=-20
        imgRange=20
        imgLocation=imgRange*scrRatio +imgS
        $('section.yj-main-section figure img.mainImg2').css({
            'transform':'translateY('+imgLocation+'%)'
        })
    }



    mainBgMotion()
    $('main').bind('scroll', function () {
        mainBgMotion()
    })
    $(window).resize(function(){
        mainBgMotion()
    })
})              