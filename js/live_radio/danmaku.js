window.danmakuSystem = function() {
			document.getElementById('Danmaku').width = window.innerWidth;
			var canvas=document.getElementById("Danmaku");
			var ctx=canvas.getContext('2d');
			//弹幕列表
			ctx.Danmaku = [
			];
			ctx.font = '900 33px Arial';
			// ctx.strokeStyle = 'black';
			//弹幕push
			ctx.addDanmaku = function(obj){
				var x = canvas.width;
				var maxY = canvas.height;
				var y = Math.random()*maxY*0.7+50;

				ctx.Danmaku.push({
					id: obj.id,
					txt: obj.str,
					time: obj.time,
					x: x,
					y: y,
					color: '#fff'
				});
			}
			//弹幕绘制
			ctx.start = setInterval(function() {
				ctx.clearRect(0,0,canvas.width, canvas.height);
				for(var i = 0;i < ctx.Danmaku.length; i++){
					ctx.font = '24px Arial';
					ctx.fillStyle = ctx.Danmaku[i].color;
					ctx.fillText(ctx.Danmaku[i].txt,ctx.Danmaku[i].x,ctx.Danmaku[i].y);
					// ctx.font = '16px Arial';
    				// ctx.strokeText(ctx.Danmaku[i].txt,ctx.Danmaku[i].x,ctx.Danmaku[i].y);
    				ctx.Danmaku[i].x -= 1;
    				if(ctx.Danmaku[i].x < -ctx.Danmaku[i].txt.length * 40){
    					ctx.Danmaku.splice(i,1);
    				}
				}
			},20);

			var addChat = function(obj) {
				var node = document.createElement("div");
					node.className = 'count_online_l';
					node.innerHTML = "<img src='"+obj.img+"' class='count_touxiang2'><ul class='count_title2'><li class='count_name_date2'>"+obj.username+"&nbsp;<span style='color:#727171;'>"+obj.time+"</span></li><li class='count_text2'>"+obj.str+"</li><div class='leftdirection'></div></ul>";
					var body = $('.count_online > div');
					body[0].appendChild(node);
					$('.count_online').animate({scrollTop: $('.count_online > div').height()}, 800);
			}



			//弹幕管理
			window.DanmakuManager = {};
			//增加弹幕
			DanmakuManager.addDanmaku = function(obj){
				ctx.addDanmaku(obj);
				obj.username?addChat(obj):false;
			}
			//删除弹幕
			DanmakuManager.removeDanmaku = function(obj) {
				for(var i = 0;i < ctx.Danmaku.length ; i++){
					if(ctx.Danmaku[i].id == obj.id && ctx.Danmaku[i].time == obj.time){
						ctx.Danmaku.splice(i,1);
						break;
					}
				}
			}
		}