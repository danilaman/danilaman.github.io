$(document).ready(function()
{
	$("body").css("width", $(window).width())
	$("#navbar").css("height", $(window).height()*0.14)
	$("#mainlogo").css({
		"width": $(window).width()*0.7,
		"margin": $(window).height()*0.02 +"px "+ $(window).width()*0.01 +"px"
})
})