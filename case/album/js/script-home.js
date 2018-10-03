//倒计时跳转页面
function delayURL(url) {	
	var delay = $("#time").text();
	if(delay > 0) {
		delay--;
		$("#time").text(delay);
	} else {
		//window.top.location.href = url;
		window.open(url, '_self');
	}
	setTimeout("delayURL('" + url + "')", 1000);
}

$(function(){	
	//倒计时跳转页面
	delayURL("album.html");
	//点击跳转页面
	$("#btnEnter").click(function(){
		window.open('album.html', '_self');
	});	
});