window.onload = function() {
		//分享
		var aDiv = document.getElementById('fenxiang_icon');
		aDiv.onclick = function() {
			var bDiv = document.getElementById('fenxiang');
			bDiv.style.display = "block";
		}
		var yDiv = document.getElementById('fenxiang_cancel');
		yDiv.onclick = function() {
				var bDiv = document.getElementById('fenxiang');
				bDiv.style.display = "none";
			}
			//结束是弹出框
		// var aDiv = document.getElementById('');
		// aDiv.onclick = function() {
		// 	var bDiv = document.getElementById('end_kuang');
		// 	bDiv.style.display = "block";
		// }
		// var yDiv = document.getElementById('end_return');
		// yDiv.onclick = function() {
		// 		var bDiv = document.getElementById('end_kuang');
		// 		bDiv.style.display = "none";
		// 	}
			//砸砖
		document.getElementById("f_smashed_screen").addEventListener('tap', function() {
			mui.openWindow({
				url: "smashed_screen.html",
				id: "f_smashed_screen",
				createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
				show: {
					autoShow: true, //页面loaded事件发生后自动显示，默认为true
					aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
					title: "正在加载..."
						//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
				}
			})
		});
		//打赏
		document.getElementById("f_reward_screen").addEventListener('tap', function() {
			mui.openWindow({
				url: "reward_screen.html",
				id: "f_reward_screen",
				createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
				show: {
					autoShow: true, //页面loaded事件发生后自动显示，默认为true
					aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
					title: "正在加载..."
						//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
				}
			})
		});
		document.getElementById('Danmaku').height = window.innerHeight - 50;
		danmakuSystem();
		zhuanStart();

	}
	//点击输入框
function inputKuang2() {

 document.getElementById('screen_bottom').style.display='none';
 document.getElementById('danmaku_input').value = "";
 document.getElementById('fs_div').style.display = 'block';
 $('.screen_text').focus();
 }

var  sendDanmaku = function() {
	var obj = {
		str: $('#danmaku_input').val()
	};
	DanmakuManager.addDanmaku(obj);
	document.getElementById('screen_bottom').style.display='block';
	document.getElementById('fs_div').style.display = 'none';
}
$('#send_btn').click(function(){
	sendDanmaku();
});