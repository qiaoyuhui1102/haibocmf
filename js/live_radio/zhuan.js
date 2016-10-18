/**
 * Created by Administrator on 2016/9/19.
 */
window.zhuanStart = function() {
	var i = 80;
	var x = 800;
	var y = 800;

	//砖头的行数
	var zhuantou = -1;

	$(".remove").click(removeObj);
	$(".buttonObj").click(objZhuan);



	//增加或者删除若干块儿砖块
	var change = function(num) {
		if(num > 0){
			for(var i = 0;i < num; i++){
				objZhuan();
			}
		}else{
			for(var i = 0;i > num; i--){
				removeObj();
			}
		}
	}
	window.zhuanManager = {
		change:change
	}

	//按照对象增加砖块
	function objZhuan() {
		var num = parseInt($('.zong').children().length+1);
		var add = function(str) {
			$(".zong").append("<div class='zhuan' style='float: left"+str+"'><img src='../img/zhuan@2x.png' width='100%' height='14px'/></div>");
		}

		// 正常方法
		// if(num % 17 >= 10){
		// 	add(";position:relative;left: 5%;");
		// }
		// else if(num % 17 <= 8){
		// 	add('');
		// }
		// else{
		// 	add(";position:absolute;left: -5%;top:"+ (zhuantou += 2) * 14 +"px")
		// }
		//bigger方法
		num % 17 >= 10 || num % 17 == 0 ? add(";position:relative;left: 7.5%;") : num % 17 <= 8 ? add('') : add(";position:absolute;left: -5%;top:"+ (zhuantou += 2) * 14 +"px");
		$('.zhuan_div').show();
		if(window.zhuan)
			clearTimeout(window.zhuan);
		window.zhuan = setTimeout("$('.zhuan_div').hide()",500);
	}
	function removeObj() {
		$(".zong").find(".zhuan:last").remove();
		$(".zong").children().length % 17 == 8 ? zhuantou -= 2 : false;
	}

	//按照相对定位添加砖块
	function fix() {
		var count = $(".zhuan").length;
		if(count >= 10 && count < 20) {
			if(i >= 80 * 10 + 80) {
				i = 80;
			}
			$(".zong").append("<div class='zhuan' style='left: " + (x - i) + "px;top: " + (y - 80 * 2) + "px;'></div>");
		} else if(count <= 10) {
			$(".zong").append("<div class='zhuan' style='left: " + (x - i) + "px;top: " + (y - 80 * 1) + "px;'></div>");
		} else if(count >= 20) {
			if(i >= 80 * 10 + 80) {
				i = 80;
			}
			$(".zong").append("<div class='zhuan' style='left: " + (x - i) + "px;top: " + (y - 80 * 3) + "px;'></div>");
		}
		i += 80;
	}





	//赏效果
	function shang() {
		$('.shang_div').show();
		setTimeout("$('.shang_div').hide()",500);
	}
	window.shangManager = {
		shang:shang
	}


}
