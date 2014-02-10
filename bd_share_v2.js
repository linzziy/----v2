/// 使用方法(全局设置内容): --slide:false，不显示
/// bd_share_config = {'text':'', 'desc':'', 'pic':'', 'url':'','ctext':'', 'cdesc':'', 'cpic':'', 'curl':'', 'slide': false};
///
/// 复制下列DIV到Html
///	<div class="bdsharebuttonbox">
///		<a href="#" class="bds_more" data-cmd="more"></a>
///	</div>

var bd_share = function() {
	return {
		more:function(){
			if($("a[data-cmd='more']").length > 0){
				$("a[data-cmd='more']")[0].click();
			}
		},
		init: function() {
			if (typeof bd_share_config == "undefined") {
                bd_share_config = {};
            }
			window._bd_share_config = {
				"common": {
					"bdSnsKey": {},
					"bdText": bd_share_config.text,
					"bdDesc": bd_share_config.desc,
					"bdMini": "2",
					"bdMiniList": false,
					"bdPic": bd_share_config.pic,
					"bdUrl": bd_share_config.url,
					"bdStyle": "0",
					"bdSize": "16",
					onBeforeClick:function(cmd,config){
						if(bd_share_config.ctext != undefined && bd_share_config.ctext.length > 0){
							config.bdText = bd_share_config.ctext;
							bd_share_config.ctext = '';
						}
						if(bd_share_config.cdesc != undefined && bd_share_config.cdesc.length > 0){
							config.bdDesc = bd_share_config.cdesc;
							bd_share_config.cdesc = '';
						}
						if(bd_share_config.cpic != undefined && bd_share_config.cpic.length > 0){
							config.bdPic = bd_share_config.cpic;
							bd_share_config.cpic = '';
						}
						if(bd_share_config.curl != undefined && bd_share_config.curl.length > 0){
							config.bdUrl = bd_share_config.curl;
							bd_share_config.curl = '';
						}
						if(0 < $(".bdshare_dialog_close").length){
							$(".bdshare_dialog_close")[0].click();
						}
						return config;
					}
				},
				"share": {}
			};
			if(bd_share_config.slide == undefined || bd_share_config.slide == true){
				var _slide = {"slide": {
					"type": "slide",
					"bdImg": "0",
					"bdPos": "right",
					"bdTop": "100"
				}};
				$.extend( _bd_share_config, _slide );
			}
			with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
			
			var style = document.createElement("style");
			style.type='text/css';
			style.innerHTML = '.bdshare-slide-button-box{z-index:99999}';
			
			$("head").append(style);
		}
	}
}();
onload = function(){
	bd_share.init();
}