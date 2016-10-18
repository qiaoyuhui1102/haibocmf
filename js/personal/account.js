// 定义菜单栏离页面顶部的距离，默认为200    
var divOffsetTop = 255;
//滚动事件    
window.onscroll = function() {
	var divs = document.getElementById("divId");
	// 计算页面滚动了多少（需要区分不同浏览器）    
	var topVal = 0;
	if(window.pageYOffset) { //这一条滤去了大部分， 只留了IE678    
		topVal = window.pageYOffset;
	} else if(document.documentElement.scrollTop) { //IE678 的非quirk模式    
		topVal = document.documentElement.scrollTop;
	} else if(document.body.scrolltop) { //IE678 的quirk模式    
		topVal = document.body.scrolltop;
	}
	if(topVal <= divOffsetTop) {
		divs.style.position = "";
	} else {
		divs.style.position = "fixed";
	}
};
   

window.onload = function() {
	// 页面加载完之后，计算菜单栏到页面顶部的实际距离 
	var divs = document.getElementById("divId");
	divOffsetTop = divs.offsetTop;
	
	//我的账单
	document.getElementById("my_bill").addEventListener('touchstart', function() {
		//plus.webview.close("article-comment");
		/*mui.openWindow({
			url: "my_bill.html",
			id: "my_bill",
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				title: "正在加载..."
					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		})*/
		location.href = 'my_bill.html';
	});

	// 获奖记录
	document.getElementById("get_prize").addEventListener('touchstart', function() {
		//plus.webview.close("article-comment");
		/*mui.openWindow({
			url: "get_prize.html",
			id: "get_prize",
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				title: "正在加载..."
					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		})*/

		location.href = 'get_prize.html';
	});
};
