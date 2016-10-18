window.onload = function() {
	//成功绑定电话
	document.getElementById("phone_success").addEventListener('touchstart', function() {
		//plus.webview.close("article-comment");
		/*mui.openWindow({
			url: "phone_success.html",
			id: "phone_success",
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				title: "正在加载..."
					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		})*/

		location.href = 'phone_success.html';
	});
};