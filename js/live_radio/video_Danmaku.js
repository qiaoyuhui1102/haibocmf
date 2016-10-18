//window.video_danmaku = function(){
//如果你不需要某项设置，可以直接删除，注意var flashvars的最后一个值后面不能有逗号
	var flashvars={
		f:'http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4',//视频地址
		a:'',//调用时的参数，只有当s>0的时候有效
		s:'0',//调用方式，0=普通方法（f=视频地址），1=网址形式,2=xml形式，3=swf形式(s>0时f=网址，配合a来完成对地址的组装)
		c:'0',//是否读取文本配置,0不是，1是
		x:'',//调用配置文件路径，只有在c=1时使用。默认为空调用的是ckplayer.xml
		i:'http://www.ckplayer.com/static/images/cqdw.jpg',//初始图片地址
		d:'http://www.ckplayer.com/down/pause6.1_1.swf|http://www.ckplayer.com/down/pause6.1_2.swf',//暂停时播放的广告，swf/图片,多个用竖线隔开，图片要加链接地址，没有的时候留空就行
		u:'',//暂停时如果是图片的话，加个链接地址
		l:'http://www.ckplayer.com/down/adv6.1_1.swf|http://www.ckplayer.com/down/adv6.1_2.swf',//前置广告，swf/图片/视频，多个用竖线隔开，图片和视频要加链接地址
		r:'',//前置广告的链接地址，多个用竖线隔开，没有的留空
		t:'10|10',//视频开始前播放swf/图片时的时间，多个用竖线隔开
		y:'',//这里是使用网址形式调用广告地址时使用，前提是要设置l的值为空
		z:'http://www.ckplayer.com/down/buffer.swf',//缓冲广告，只能放一个，swf格式
		e:'8',//视频结束后的动作，0是调用js函数，1是循环播放，2是暂停播放并且不调用广告，3是调用视频推荐列表的插件，4是清除视频流并调用js功能和1差不多，5是暂停播放并且调用暂停广告
		v:'80',//默认音量，0-100之间
		p:'0',//视频默认0是暂停，1是播放，2是不加载视频
		h:'0',//播放http视频流时采用何种拖动方法，=0不使用任意拖动，=1是使用按关键帧，=2是按时间点，=3是自动判断按什么(如果视频格式是.mp4就按关键帧，.flv就按关键时间)，=4也是自动判断(只要包含字符mp4就按mp4来，只要包含字符flv就按flv来)
		q:'',//视频流拖动时参考函数，默认是start
		m:'',//让该参数为一个链接地址时，单击播放器将跳转到该地址
		o:'',//当p=2时，可以设置视频的时间，单位，秒
		w:'',//当p=2时，可以设置视频的总字节数
		g:'',//视频直接g秒开始播放
		j:'',//跳过片尾功能，j>0则从播放多少时间后跳到结束，<0则总总时间-该值的绝对值时跳到结束
		k:'32|63',//提示点时间，如 30|60鼠标经过进度栏30秒，60秒会提示n指定的相应的文字
		n:'这是提示点的功能，如果不需要删除k和n的值|提示点测试60秒',//提示点文字，跟k配合使用，如 提示点1|提示点2
		wh:'',//宽高比，可以自己定义视频的宽高或宽高比如：wh:'4:3',或wh:'1080:720'
		lv:'0',//是否是直播流，=1则锁定进度栏
		loaded:'loadedHandler',//当播放器加载完成后发送该js函数loaded
		//调用播放器的所有参数列表结束
		//以下为自定义的播放器参数用来在插件里引用的
		my_title:'演示视频标题文字',
		my_url:encodeURIComponent(window.location.href)//本页面地址
		//调用自定义播放器参数结束
	};
	var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always'};//这里定义播放器的其它参数如背景色（跟flashvars中的b不同），是否支持全屏，是否支持交互
	var video=['http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4->video/mp4'];
	CKobject.embed('ckplayer/ckplayer.swf','countdown_top','ckplayer_a1','100%','100%',false,flashvars,video,params);
	var lastTime = 0;
	var num = 0;

	var data_test = [
		{
			id:1,
			time:1,
			text:"测试弹幕1"
		},
		{
			id:2,
			time:2,
			text:"测试弹幕1"
		},
		{
			id:3,
			time:3,
			text:"测试弹幕1"
		}
	];
//弹幕列表
	var list = DanmakuList(data_test);

	function ckplayer_status(str){
		var reg = /[a-z0-9.]*/g;
		if(str.match(reg)[0] == 'time'){
			for(num;num<list.length;num++){
				if(list[num].time < str.match(reg)[2] && list[num].time > lastTime){
					// drawDanmaku(list[num].text);
					DanmakuManager.addDanmaku({str:list[num].text})
				}else{
					break;
				}
			}
		}
		window.time = parseFloat(str.match(reg)[2]);
		lastTime = str.match(reg)[2];
	}


	window.danmakuSystem();
	document.getElementById('Danmaku').height = 180;
	$('.count_online').animate({scrollTop: $('.count_online > div').height()}, 800);
//}
