var DanmakuList = function(data){
	var Danmaku = data;
	// var Danmaku = obj;

	Danmaku.sort(function(a,b){
		return a.time - b.time;
	})

	return Danmaku;	
}

