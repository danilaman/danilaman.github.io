$(document).ready(function()
{
	if($(window).width()>1024)
	{
		$(".typeJob").hover(function()
		{
			$(this).find(".hoverMenu").toggle()
		},
		function()
		{
			$(this).find(".hoverMenu").toggle()
		})
	}

	function dots()
	{
		$(".aboutCustomer").each(function(i)
		{
			var wdt = $(this).width()-(122+($(this).find(".customerName").width()));
			$(this).find(".orderDots").css("width", wdt + "px");
		})
	}
	setTimeout(dots, 500);
	
	if($(window).width()>1024)
		$("#pageNav").width($(".navNum").length*62);

	$(window).resize(function()
	{
		if($(window).width()>1024)
			$("#pageNav").width($(".navNum").length*62);
	})

	function smallDots()
	{
		$(".smallCast").each(function(i)
		{
			var wdt = 415-(($(this).find(".customerNameSmall").width()));
			$(this).find(".dotsSmall").css("width", wdt + "px");
		})
	}
	setTimeout(smallDots, 500);

	function roomsAligment()
	{
		$(".workOne").each(function(i)
		{
			if($(this).find(".roomPhoto").width()>$(this).find(".roomPhoto").height())
			{
				$(this).find(".roomPhoto").height($(this).height())
				$(this).find(".roomPhoto").css({"left":($(this).width()-$(this).find(".roomPhoto").width())/2,
					"top":"0",
					"width": ($(this).find(".roomPhoto").width()),
					"transition": "0.5s"})
			}
			else
			{
				$(this).find(".roomPhoto").width($(this).width())
				$(this).find(".roomPhoto").css({"top":($(this).height()-$(this).find(".roomPhoto").height())/2,
					"left":"0",
					"height": ($(this).find(".roomPhoto").height()),
					"transition": "0.5s"})
			}
			$(this).find(".roomPhoto").show();
		})
	}


	$(".workOne").hover(function()
	{
		if( $(this).find(".roomPhoto").css("display") != "none" )
		{
			var realData = [$(this).find(".roomPhoto").width(),$(this).find(".roomPhoto").height(),$(this).find(".roomPhoto").css("left"),$(this).find(".roomPhoto").css("top"), $(this).find(".roomPhoto").index(".roomPhoto")];
			window.realData = realData
			console.log(realData)
			animis = true
			var percentW = ($(this).find(".roomPhoto").width())*0.1
			var percentH = ($(this).find(".roomPhoto").height())*0.1
			$(this).find(".roomPhoto").css({"width":"+="+percentW+"px",
				"left": ($(this).width()-($(this).find(".roomPhoto").width()+percentW))/2,
				"height":"+="+percentH+"px",
				"top": ($(this).height()-($(this).find(".roomPhoto").height()+percentW))/2
			})
			$(this).find(".greenPhoto").css({"background": "rgba(89, 175, 137, 0.9)", "transition":"0.8s"})
		}
	},
	function()
	{
		if( $(this).find(".roomPhoto").css("display") != "none" )
		{
			$(this).find(".roomPhoto").css({"width": realData[0]+"px",
				"left": realData[2],
				"height": realData[1],
				"top": realData[3]
			})

			$(this).find(".greenPhoto").css({"background": "rgba(99, 195, 153, 0.9)", "transition":"0.8s"})
		}
	})

	$(".workString").each(function(i)
	{
		var e = 1

		$(this).find(".workOne").each(function()
		{
			if(e == 2)
			{
				if($(window).width()>1024)
				{
					$(this).css({"marginLeft":"56px",
						"marginRight":"56px"})
				}
			}
			else if(e = 3)
			{
				e = 1
			}
			e++
		})
	})

	setTimeout(roomsAligment, 500)

	function PhAligm()
	{
		$(".masterPhoto").each(function()
		{
			if( $(this).find("img").width() >= $(this).find("img").height() )
			{
				$(this).find("img").height( $(this).height() )
				$(this).find("img").css("left", ( $(this).width() - $(this).find("img").width() )/2 )
			}
			else
			{
				$(this).find("img").width( $(this).width() )
				$(this).find("img").css("top", ( $(this).height() - $(this).find("img").height() )/2 )
			}
		})
	}

	setTimeout(PhAligm, 500)

	$(".bars").click(function()
	{
		if($("#navlist").height() == 0)
		{
			$("#navlist").height("480px")
		}
		else
		{
			$("#navlist").height("0")
		}
	})
})