$(document).ready(function()
{
	$('.oneService').hover(function(){
	var bw = $(this).find(".serviceimg").css("backgroundImage")
	var cl = $(this).find(".serviceimg").attr("servicePhoto")

	window.bw = bw
	window.cl = cl

		$(this).find(".serviceimg").css({"background": "url(./images/"+cl+") no-repeat center center", "transition": "0.5s", "-moz-background-size": "cover",
	"background-size": "cover", "wudth": "200px", "height": "200px"
		})

		$(this).find(".examplesGreen").slideToggle(300)
	},
	function()
	{
		$(this).find(".serviceimg").css({"background": bw + "no-repeat center center", "transition": "0.5s", "-moz-background-size": "cover",
	"background-size": "cover", "wudth": "170px", "height": "170px"
	})
		$(this).find(".examplesGreen").slideToggle(300)
})

	
	$('.reviewsString').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
	nextArrow: "",
	autoplaySpeed: 3000,
	autoplay: true,
});
})