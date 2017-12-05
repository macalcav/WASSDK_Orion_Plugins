function getMsToTime (ms) {
	ms = parseFloat(ms);
	var s = parseFloat((ms / 1000) % 60).toFixed(2);
	var m = parseFloat((ms / (1000 * 60)) % 60).toFixed(0);
	var h = parseFloat((ms / (1000 * 60 * 60)) % 24).toFixed(0);
    return "("+h+"h:"+m+"m:"+s+"s) "+ String(ms);
}

		