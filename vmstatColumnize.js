/**
 * http://usejsdoc.org/
 */

//var columnify = require('columnify');
/*globals columnify */
function makeVmstatKeyValuePairs (textToColumnize) {
	var lines = textToColumnize.split("\n");
	var numLines = lines.length;
	var key;
	var keyValuePairs= [];
	for (var i = 0; i < numLines; i++) {
		lines[i]=lines[i].replace(/^\s+|\s+$/gm,'');//remove white space from both ends
		lines[i]=lines[i].replace(/\s\s+/g, ' ');//remove multiple spaces
		if (lines[i].indexOf("r b ")>-1){//"r  b   avm   fre  ...
			key=lines[i].split(" ");
		}
		else if (typeof key !== 'undefined'){//the key is already created
			var values = lines[i].split(" ");
			if (!isNaN(parseFloat(values[0])) && isFinite(values[0])){
			//if (isFinite(values[0])){
				var keyValue = [];
				for (var j = 0; j < values.length; j++) {
					keyValue[ key[j] ] = parseInt(values[j]);
				}	
				keyValuePairs.push(keyValue);
			}
		}
	}
	
	return keyValuePairs;
}

	
function vmstatColumnize(text){
	columnify(makeVmstatKeyValuePairs(text), {align: 'right'});
};
