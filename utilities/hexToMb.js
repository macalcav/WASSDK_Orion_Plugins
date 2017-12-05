function getHexToMb(hex) {
	var hexToDec= parseInt(hex, 16);
	return hex + "=" + (hexToDec/1024/1024).toFixed(2)+"MB";
}