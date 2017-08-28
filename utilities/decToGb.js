function getDecToGb(dec) {
	dec = dec.replace(/\,/g,'');
	dec = parseFloat(dec);
	return dec +"="+ (dec/1024/1024/1024).toFixed(2)+"GB";
}