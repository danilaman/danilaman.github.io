$(document).ready(function()
{
	$("#navbar").css({"height": $(window).height()*0.15})
	$("#navlogo").css({"height": $(window).height()*0.15})
	$("#navItems a").css({"height": $(window).height()*0.1})
	$("#navItems a li").css({"fontSize": $(window).height()*0.06})
	$("#navlogo img").css("margin", ($("#navlogo").height()-$("#navlogo img").height())/2 + "px 0px 0px 2%" )

	$("#navlogo i").click(function()
	{
		if($("#navbar").height() != $("#navlogo").height())
		{
			$("#navbar").css({"height": $(window).height()*0.15})
		}
		else
		{
			$("#navbar").css({"height": "auto"})
		}
	})

	$("#navlogo i").css({"fontSize":$("#navlogo img").height(), "margin": ($("#navlogo").height()-$("#navlogo i").height())/4 + "px 4% 0px 0px"})
})