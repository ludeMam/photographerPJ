$(function () {
	var scrS
	var scrE
	var scrRatio
	var imgS
	var imgRange
	var imgLocation
	var scaleRange
	var scaleT
	function visualBgMotion() {
		scrS = 0
		scrE = $('section.yj-visual-section').offset().top + scrt
		scrRatio = (scrt - scrS) / scrE
		if (scrRatio > 1) { scrRatio = 1 }
		imgS = -20
		imgRange = 20
		imgLocation = imgRange * scrRatio + imgS
		$('section.yj-visual-section figure img.visualImg2').css({
			'transform': 'translateY(' + imgLocation + '%)'
		})
		scrE=scrE-winh*0.5
		scrRatio=(scrt-scrS)/scrE
		if (scrRatio > 1) { scrRatio = 1 }
		scaleRange=43
		scaleT=scaleRange*scrRatio+50
		$('section.yj-visual-section figure img.visualImg1').css({
			'-webkit-mask-size': scaleT+'% '+(scaleT+3)+'%'
		})
	}
	visualBgMotion()
	$('main').bind('scroll', function () {
		visualBgMotion()
	})
	$(window).resize(function () {
		visualBgMotion()
	})
})              