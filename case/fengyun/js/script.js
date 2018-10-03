$(function() {	
	//全局-输入框不要记忆
	$("input:text").attr("autocomplete","off");
	//全局-换肤
	$("#skinBlack").click(function(){
		$(this).addClass("active").siblings(".active").removeClass("active");
		$("#skinCss").attr("href","css/skin-black.css");
		$.cookie("mystyle","css/skin-black.css",{expires:30});
	});
	$("#skinWhite").click(function(){
		$(this).addClass("active").siblings(".active").removeClass("active");
		$("#skinCss").attr("href","css/skin-white.css");
		$.cookie("mystyle","css/skin-white.css",{expires:30});
	});
	$("#skinCyan").click(function(){
		$(this).addClass("active").siblings(".active").removeClass("active");
		$("#skinCss").attr("href","css/skin-cyan.css");
		$.cookie("mystyle","css/skin-cyan.css",{expires:30});
	});
	$("#skinBlue").click(function(){
		$(this).addClass("active").siblings(".active").removeClass("active");
		$("#skinCss").attr("href","css/skin-blue.css");
		$.cookie("mystyle","css/skin-blue.css",{expires:30});
	});
	$("#skinGreen").click(function(){
		$(this).addClass("active").siblings(".active").removeClass("active");
		$("#skinCss").attr("href","css/skin-green.css");
		$.cookie("mystyle","css/skin-green.css",{expires:30});
	});
	$("#skinRed").click(function(){
		$(this).addClass("active").siblings(".active").removeClass("active");
		$("#skinCss").attr("href","css/skin-red.css");
		$.cookie("mystyle","css/skin-red.css",{expires:30});
	});
	//全局-换肤cookie
	var cookieStyle = $.cookie("mystyle"); 
	$("#skinCss").attr("href",cookieStyle);
	if(cookieStyle=="css/skin-white.css"){
		$("#skinWhite").addClass("active").siblings(".active").removeClass("active");
	}else if(cookieStyle=="css/skin-cyan.css"){
		$("#skinCyan").addClass("active").siblings(".active").removeClass("active");
	}else if(cookieStyle=="css/skin-blue.css"){
		$("#skinBlue").addClass("active").siblings(".active").removeClass("active");
	}else if(cookieStyle=="css/skin-green.css"){
		$("#skinGreen").addClass("active").siblings(".active").removeClass("active");
	}else if(cookieStyle=="css/skin-red.css"){
		$("#skinRed").addClass("active").siblings(".active").removeClass("active");
	}
	//全局-左导航
	$("#aside .aside-arrow").click(function(){
		$(this).children(".glyphicon").toggleClass("glyphicon-menu-right").parents("#aside").toggleClass("aside-xs").next("#nav").toggleClass("nav-md nav-lg").next("#article").toggleClass("article-md article-lg");
	});
	$("#aside .sidebar>li>a").click(function(){
		$(this).children(".glyphicon").toggleClass("glyphicon-minus-sign").parent("a").next("ul").slideToggle();
	});
	$("#aside .sidebar>li>ul>li>a").click(function(){
		$(this).children(".glyphicon").toggleClass("glyphicon-minus").parent("a").next("ul").slideToggle();
	});
	//全局-主导航
	$("#nav ul.nav-list>li").hover(function(){
		$(this).addClass("menu_current").children("ul").stop().fadeIn(300);
	},function(){
		$(this).removeClass("menu_current").children("ul").stop().fadeOut(100);
	});	
	//全局-响应面板加“+-”号
	$(".panel-title>a").click(function(){
		$(this).toggleClass("minus").parents(".panel").siblings(".panel").find(".minus").removeClass("minus");
	});	
	//全局-模态框
	var winHeight = $(window).height();
	winHeight = winHeight - 190;
	$(".modal-body").css({"max-height": winHeight,"overflow":"auto"});		
});

//全局-滚动条////////////////////////////////////////////////////
(function($){
	$(window).load(function(){
		$("#aside").mCustomScrollbar({
			theme:"3d",
			axis:"y"
		});
		$("#aside").mCustomScrollbar("scrollTo","#aside a.active");
		$("#article,#fanCon").mCustomScrollbar({
			theme:"3d",
			axis:"yx"
		});		
	});
})(jQuery);

//联动式左内容右面板////////////////////////////////////////////////////
function resRightPanel(chartName,heightValue){
	//设置图表高度
	var winHeight = $(window).height();
	$("#resChart").css({height: winHeight-129}); //左侧高度
	$(chartName).css({height: winHeight+heightValue}); //左侧图表高度
	
	if($("#resPanel > .panel-heading > .glyphicon").is(".glyphicon-resize-small")){
		$("#resPanel").css({height: winHeight-129});
	}
	$("#resPanel > .panel-body").css({"height": winHeight - 165});
	
	//右栏可伸缩面板		
	$("#resPanel > .panel-heading > span.glyphicon").click(function(){		
		$(this).toggleClass("glyphicon-resize-small");		
		$("#resChart").removeClass("res-chart-xl").toggleClass("res-chart-lg");			
		$("#resPanel").toggleClass("res-panel-xs");		
	});	
	//右栏可伸缩面板-列表伸缩
	$("#resPanel .res-dl:not(.open) > dd").hide();
	$("#resPanel .res-dl > dt").click(function(){
		$(this).nextAll("dd").slideToggle(100).parents("dl").toggleClass("open");
	});	
}

//改变窗口大小刷新页面////////////////////////////////////////////////////
function resizeFresh(){
	$(window).resize(function(){
		window.location.href=window.location.href; 
	});
}
