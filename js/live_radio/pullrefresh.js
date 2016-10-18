mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		down: {
			height: 50,
            contentinit: '下拉可以刷新',
            contentdown: '下拉可以刷新',
            contentover: '释放立即刷新',
            contentrefresh: '正在刷新...',
			callback: pulldownRefresh
		},
		up: {
//			auto: true,
            offset: 0, //距离底部高度(到达该高度即触发)
            show: false,
            contentinit: '上拉显示更多',
            contentdown: '上拉显示更多',
            contentrefresh: '正在加载...',
            contentnomore: '没有更多数据了',
//			contentnomore:"",//设置为空就可以实现了
			callback: pullupRefresh
		}
	}
	
});

var page = 1;
var count = 0;
var pageCount = 0;

mui.plusReady(function(){
	// plus.nativeUI.showWaiting();

})


/**
 * 上拉加载具体业务实现
 */
function pullupRefresh() {
//	if(plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_NONE){
//		//mui('#pullrefresh').pullRefresh().endPullupToRefresh();
//		mui.toast("服务器忙!请稍后链接...");
//		return;
//	}
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPullupToRefresh();

	}, 1500);//1.5秒结束刷新
}


/**
   * 下拉刷新具体业务实现
   */
function pulldownRefresh() {	
	setTimeout(function() {
		//plus.webview.currentWebview().reload();
		mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
	}, 1500);
}