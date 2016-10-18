window.onload = function() {
	//直播——列表(弹出购买)
	var aDiv = document.getElementById('remen_title');
	var shang = document.getElementById('shang_sj');
	var xia = document.getElementById('xia_sj');
	aDiv.onclick = function() {
			var bDiv = document.getElementById('stream_menu');
			if(bDiv.style.display == 'block') {
				bDiv.style.display = "none";
				document.getElementById('xia_sj').src = "../img/18@2x.png";
			} else {
				bDiv.style.display = "block";
				document.getElementById('xia_sj').src = "../img/17@2x.png";
			}
		}
		//热门
	document.getElementById("hit").addEventListener('tap', function() {
		mui.openWindow({
			url: "hit.html",
			id: "hit",
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				title: "正在加载..."
					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		})
	});
	//个人中心
	document.getElementById("center").addEventListener('tap', function() {
		mui.openWindow({
			url: "../personal/center.html",
			id: "center",
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				title: "正在加载..."
					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		})
	});

//	$('#hit').click(function() {
//		$('.s_menu_icon').src = '../img/19--1@2x.png';
//	});
	//	$('#hit').onclick(function() {
	//		$('.s_t_icon img').src="../img/19@2x.png";
	//	});

}