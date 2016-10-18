window.onload = function() {
	//观看历史
	document.getElementById("watch_record").addEventListener('touchstart', function() {
		// //plus.webview.close("article-comment");
		// mui.openWindow({
		// 	url: "watch_record.html",
		// 	id: "watch_record",
		// 	createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
		// 	show: {
		// 		autoShow: true, //页面loaded事件发生后自动显示，默认为true
		// 		aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
		// 		title: "正在加载..."
		// 			//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
		// 	}
		// })
		location.href = 'watch_record.html';

	});
	//我的账户
	document.getElementById("account").addEventListener('touchstart', function() {
		//plus.webview.close("article-comment");
		/*mui.openWindow({
			url: "account.html",
			id: "account",
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				title: "正在加载..."
					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		})*/
		location.href = 'account.html';
	});
	//摇一摇抽奖
	document.getElementById("shake").addEventListener('touchstart', function() {
		//plus.webview.close("article-comment");
	/*	mui.openWindow({
			url: "shake.html",
			id: "shake",
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				title: "正在加载..."
					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		})*/

		location.href = 'shake.html';
	});
	//弹幕上墙
	document.getElementById("tanmu").addEventListener('touchstart', function() {
		//plus.webview.close("article-comment");
	/*	mui.openWindow({
			url: "tanmu.html",
			id: "tanmu",
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				title: "正在加载..."
					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		})*/

		location.href = 'tanmu.html';
	});
	
	//设置
	document.getElementById("set").addEventListener('touchstart', function() {
		//plus.webview.close("article-comment");
	/*	mui.openWindow({
			url: "set.html",
			id: "set",
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				title: "正在加载..."
					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		})*/

		location.href = 'set.html';
	});

	$('.head_left_icon').click(function(){
		window.history.back()
	});
};


