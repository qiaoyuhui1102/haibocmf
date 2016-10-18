// window.onload = function() {
		//直播半屏——倒计时(聊天和排行的选项卡切换)
		var chat = $('#chat_body');
		var rank = $('#rank_body');
		var btnChat = $('#btn_chat > a');
		var btnRank = $('#btn_rank > a');
	
		window.btnChatClick = function(){
			rank.hide();
			chat.show();
			btnChat.addClass('countdown_hover');
			btnRank.removeClass('countdown_hover');
		};
		window.btnRankClick = function(){
			chat.hide();
			rank.show();
			btnChat.removeClass('countdown_hover');
			btnRank.addClass('countdown_hover');
		}

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
		
		//chat_ 砸砖
		document.getElementById("c_smashed_bricks").addEventListener('tap', function() {
			mui.openWindow({
				url: "smashed_bricks.html",
				id: "c_smashed_bricks",
				createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
				show: {
					autoShow: true, //页面loaded事件发生后自动显示，默认为true
					aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
					title: "正在加载..."
						//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
				}
			})
		});
		//chat_ 打赏
		document.getElementById("c_reward").addEventListener('tap', function() {
			mui.openWindow({
				url: "reward.html",
				id: "c_reward",
				createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
				show: {
					autoShow: true, //页面loaded事件发生后自动显示，默认为true
					aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
					title: "正在加载..."
						//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
				}
			})
		});
		//横屏
		document.getElementById("c_full_screen_live").addEventListener('tap', function() {
			mui.openWindow({
				url: "full_screen_live.html",
				id: "c_full_screen_live",
				createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
				show: {
					autoShow: true, //页面loaded事件发生后自动显示，默认为true
					aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
					title: "正在加载..."
						//				duration: "200" //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
				}
			})
		});

		//聊天框滚动到最下面
		$('.count_online').animate({scrollTop: $('.count_online > div').height()}, 800);
//}
	//点击输入框
	function inputKuang(){
		document.getElementById('cc_input').style.display = 'block';
		$('.cc_input_text').focus();
		var send_div = document.getElementById('btn_send');
		send_div.onclick = function() {

			var danmaku = {
				str:$('.cc_input_text').val()
			};
			// DanmakuManager.addDanmaku(danmaku);

			var send = document.getElementById('cc_input');
			send.style.display = "none";
			// var body = document.getElementsByClassName('count_online');
			var body = $('.count_online > div');
			var node = document.createElement("div");
			node.className = 'count_online_r';
			node.innerHTML = '<img src="../img/tou2@2x.png" class="count_touxiang"><ul class="count_title"><li class="count_name_date"><span style="color:#727171;">2016年9月7日 09:18</span>&nbsp; zhangx</li><li class="count_text">'+$('.cc_input_text').val()+'<div class="rightdirection"></div></li>						</ul>';

			body[0].appendChild(node);

			$('.count_online').animate({scrollTop: $('.count_online > div').height()}, 800);

			$('.cc_input_text').val("");
		}

		function okBtn() {
		
		}
	}

	$('.count_bottom input').click(inputKuang);

	// window.danmakuSystem();
	// window.zhuanStart();
	window.clock();


	//DanmakuManager.addDanmaku(obj)   增加弹幕
	//DanmakuManager.removeDanmaku(obj)   删除指定弹幕
	//弹幕格式
	//Danmaku{
	// 	id: id,
	//  username: username,
	//  img: path,
	// 	str: str,
	// 	time: time,
	// 	color: color
	// }
	// 倒计时:
	// window.timer(date)
	// 
// }