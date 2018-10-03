$(function() {
	//slogan动画
	showSlogan();
	
	//单页fullpage
	$("#dowebok").fullpage({
		sectionsColor: ['#222', '#fafafa', '#eee', '#fafafa'],
		anchors: ['home', 'work', 'services', 'about'],
		resize: false,
		verticalCentered: false,
		'navigation': true,
		'navigationPosition': 'right',
		'navigationTooltips': ['首页', '作品', '技能', '关于']
	});	
	
	//模态框modal
	var winHeight = $(window).height();
	winHeight = winHeight - 185;
	$(".modal-body").css({"max-height": winHeight,"overflow-y":"auto"});
});


//slogan动画
var sloganTime = 2000;    //每条信息完整出现后停留时间
var TextTime = 200;    //每条信息中的字出现的间隔时间

var iSlogan = 0;
var iText = 0;
var textTimer;   //调用setInterval的返回值，用于取消对函数的周期性执行
var sloganTimer;

var slogan = new Array();    //以数组形式保存每个信息的标题

slogan[0] = "因为热爱，所以专注；因为专注，所以专业";   //显示在网页上的文字内容和对应的链接   
slogan[1] = "不求与人相比，但求不断超越自己";

function showSlogan(){
	sSlogan=slogan[iSlogan];    //通过iSlogan传递，依次显示数组中的内容
  
	if(iText>=sSlogan.length){
		clearInterval(textTimer);  //一旦超过要显示的文字长度，清除对showSlogan()的周期性调用
		clearInterval(sloganTimer); 
		iSlogan++;   //显示数组中的下一个
   
		if(iSlogan>=slogan.length){
			iSlogan = 0;  //当iSlogan大于信息标题的数量时，把iSlogan清零，重新从第一个显示
		}
		
		sloganTimer = setInterval("showSlogan()",sloganTime);   //间隔2000ms后重新调用showSlogan()
		iText = 0;  
		return;
	};

	clearInterval(textTimer);  
	$("#slogan").html(sSlogan.substring(0,iText+1));   //截取字符，从第一个字符到iText+1个字符
	 
	iText++;  //文字一个个出现
	textTimer = setInterval("showSlogan()",TextTime);   
}