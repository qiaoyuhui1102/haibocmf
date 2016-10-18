//倒计时
window.clock = function(){
	var nowTime;
	var playTime = new Date();
	// playTime.setTime(new Date().getTime() + 1000000);
	var myHref;
	var t;
	//转化为人类语言
	var toString = function(){
		nowTime = new Date();
		var count = playTime - nowTime;
		var str = "";

		if(count > 1000*60*60*24){
			str = str + parseInt(count/(1000*60*60*24)) + '天';
			count -= parseInt(count/(1000*60*60*24)) * 1000*60*60*24;
		}
		if(count > 1000*60*60){
			str = str + parseInt(count/(1000*60*60)) + '时';
			count -= parseInt(count/(1000*60*60))*1000*60*60;
		}
		if(count > 1000*60){
			str = str + parseInt(count/(1000*60)) + "分";
			count -= parseInt(count/(1000*60)) * 1000*60;
		}
		if(count > 1000){
			str = str + parseInt(count/(1000)) + "秒";
			count -= parseInt(count/(1000)) * 1000;
		}
		if(str==''){
			clearTimeout(t);
			$('.c_t_mf').text('ok');
			window.location.href = myHref;
		}
		return str;
	}

	window.toDraw = function() {
		$('.c_t_mf').text(toString());
	}

	window.timer = function(obj,href) {
		playTime.setTime(obj.getTime())
		myHref = href;
		t = setInterval("window.toDraw()",1000);
	}

}