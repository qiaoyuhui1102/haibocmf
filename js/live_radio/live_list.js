/*mui.init();*/
window.onload = function() {
	//直播——列表(弹出购买)
	var aDiv = document.getElementById('live_b_money');
	aDiv.onclick = function() {
		var bDiv = document.getElementById('model');
		bDiv.style.display = "block";
	}
	var yDiv = document.getElementById('model_cancel');
	yDiv.onclick = function() {
		var bDiv = document.getElementById('model');
		bDiv.style.display = "none";
	}

	//直播列表-----直播预告
	/*document.getElementById("l_foreshow").addEventListener('tap', function() {
		//plus.webview.close("article-comment");
		mui.openWindow({
			url: "foreshow.html",
			id: "l_foreshow",
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				title: "正在加载..."
					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		})
	});*/
	/*//直播列表-----直播
	document.getElementById("l_chat").addEventListener('tap', function() {
		mui.openWindow({
			url: "chat.html",
			/!*url: "chat-test.html",*!/
			id: "l_chat",
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				title: "正在加载..."
					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		})
	});*/
	
	//直播列表-----正在直播
//	document.getElementById("l_countdown").addEventListener('tap', function() {
//		mui.openWindow({
//			url: "countdown.html",
//			id: "l_countdown",
//			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
//			show: {
//				autoShow: true, //页面loaded事件发生后自动显示，默认为true
//				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
//				title: "正在加载..."
//					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
//			}
//		})
//	});
	/*//个人中心
	document.getElementById("l_center").addEventListener('tap', function() {
		mui.openWindow({
			url: "../personal/center.html",
			id: "l_center",
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				title: "正在加载..."
					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		})
	});*/



	/*点击弹窗*/
	document.getElementById("pay").onclick = function () {
		document.getElementById("model").style.display = "block";
	};

	document.getElementById("full-live").onclick = function () {
		window.location.href = "foreshow.html?t="+new Date().getTime();
	}

	document.getElementById("chat-test").onclick = function () {
		window.location.href = "chat-test.html?t="+new Date().getTime();
	}
};