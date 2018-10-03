mui.init();
	
//clipboard
var clipboard = new Clipboard('#btnEmail');
clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
	console.log("复制成功");
    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

document.getElementById("btnEmail").addEventListener('tap', function() {
	mui.toast('邮箱地址复制成功');
});