window.onload = function() {
	//更换头像
	var aDiv = document.getElementById('touxiang');
	aDiv.onclick = function() {
		var bDiv = document.getElementById('set_head');
		bDiv.style.display = "block";
	}
	var yDiv = document.getElementById('set_head_quxiao');
	yDiv.onclick = function() {
		var bDiv = document.getElementById('set_head');
		bDiv.style.display = "none";
	}
	//更换男女
	var aDiv = document.getElementById('set_sex');
	aDiv.onclick = function() {
		var bDiv = document.getElementById('set_sex_model');
		bDiv.style.display = "block";
	}
	var yDiv = document.getElementById('set_sex_quxiao');
	yDiv.onclick = function() {
		var bDiv = document.getElementById('set_sex_model');
		bDiv.style.display = "none";
	}
	
	//绑定电话
	document.getElementById("phone").addEventListener('touchstart', function() {
		//plus.webview.close("article-comment");
		/*mui.openWindow({
			url: "phone.html",
			id: "phone",
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				title: "正在加载..."
					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		})*/
		location.href = 'phone.html';
	});
	
	//意见反馈
	document.getElementById("feedback").addEventListener('touchstart', function() {
		//plus.webview.close("article-comment");
		/*mui.openWindow({
			url: "feedback.html",
			id: "feedback",
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				title: "正在加载..."
					//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		})*/
		location.href = 'feedback.html';
	});
//	function fanKui(){
//		$('.textarea_fb').focus();
//	}
//	function inputKuang() {
//			document.getElementById('cc_input').style.display = 'block';
//			
//			var send_div = document.getElementById('btn_send');
//			send_div.onclick = function() {
//				var send = document.getElementById('cc_input');
//				send.style.display = "none";
//			}
//		}
};
