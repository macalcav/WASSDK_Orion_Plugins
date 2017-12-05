function getKbToGb(kb) {
	kb = kb.replace(/\,/g,'');
	kb = parseFloat(kb);
    return kb +"="+ (kb/1024/1024).toFixed(2)+"GB";
}