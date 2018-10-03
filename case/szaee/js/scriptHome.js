$(function(){
	//焦点图
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 30,
		loop: true,
		autoplay : 5000,
		autoplayDisableOnInteraction : false
	});
	//重要通知
	$(".notice-list").slideUp();
	//图片新闻
	$(".piclist td img").each(function(){
		var imgHeight = $(this).width()*.75;
	});
	//地图
	$(".home-map-img>li").mouseover(function(){
			var theName = $(this).attr("class");
			$("#"+theName).show().siblings().hide();
		}
	);	
})