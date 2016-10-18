window.onload = function() {

	if(window.innerWidth > window.innerHeight){
		document.getElementById('Danmaku').height = window.innerHeight * 0.8;
	}
	else{
		document.getElementById('Danmaku').height = 170;
	}

    document.getElementById('countdown_top').style.height = window.innerHeight - 46 + 'px';
}

/*	function inputKuang() {
		document.getElementById('cc_input').style.display = 'block';
		$('.cc_input_text').focus();
		var send_div = document.getElementById('btn_send');
		send_div.onclick = function() {
			var send = document.getElementById('cc_input');
			send.style.display = "none";
		}
	}*/

//点击输入框
function inputKuang() {
	console.log('ok');
	document.getElementById('cc_input').style.display = 'block';
	$('.cc_input_text').focus();
	var send_div = document.getElementById('btn_send');
	send_div.onclick = function () {

		var danmaku = {
			str: $('.cc_input_text').val()
		};

		/*DanmakuManager.addDanmaku(danmaku);*/

		var send = document.getElementById('cc_input');
		send.style.display = "none";
		// var body = document.getElementsByClassName('count_online');
		var body = $('.count_online > div');
		var node = document.createElement("div");
		node.className = 'count_online_r';
		node.innerHTML = '<img src="../img/tou2@2x.png" class="count_touxiang"><ul class="count_title"><li class="count_name_date"><span style="color:#727171;">2016年9月7日 09:18</span>&nbsp; zhangx</li><li class="count_text">' + $('.cc_input_text').val() + '<div class="rightdirection"></div></li>						</ul>';

		body[0].appendChild(node);

		$('.count_online').animate({scrollTop: $('.count_online > div').height()}, 800);

		DanmakuManager.addDanmaku({str: $('.cc_input_text').val()});
		$('.cc_input_text').val("");

	}

		function okBtn() {

		}
	}
	var send_div = document.getElementById('send_btn');
	send_div.onclick = function () {

		var danmaku = {
			str: $('#danmaku_input').val()
		};

		/*DanmakuManager.addDanmaku(danmaku);*/

		//var send = document.getElementById('cc_input');
		//send.style.display = "none";
		// var body = document.getElementsByClassName('count_online');

		DanmakuManager.addDanmaku({str: $('#danmaku_input').val()});
		$('#danmaku_input').val("");

	};

	$('.count_bottom input').click(inputKuang);

