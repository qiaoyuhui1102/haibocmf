/**
 * Created by 北京 on 2016/8/17.
 * http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8
 */
var flashvars = {
	f: 'ckplayer/m3u8.swf',
	a: 'http://hitlive.ott.cibntv.net/hls/vCIBNvWXZBYY2/1800/vCIBNvWXZBYY2.m3u8?k=5bcc9eaff097f9cd72c3037f9bc9a748&channel=xlmediawatch&t=1473744719&ttl=86400',
	s: 4,
	c: 0
};
var params = {
	bgcolor: '#FFF',
	allowFullScreen: true,
	allowScriptAccess: 'always',
	wmode: 'transparent'
};
var video = ['http://hitlive.ott.cibntv.net/hls/vCIBNvWXZBYY2/1800/vCIBNvWXZBYY2.m3u8?k=5bcc9eaff097f9cd72c3037f9bc9a748&channel=xlmediawatch&t=1473744719&ttl=86400'];
CKobject.embed('ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', 400 ','
		250 px ',false,flashvars,video,params);

