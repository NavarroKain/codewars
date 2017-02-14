function findShort(s){
	var arrayOfStrings = s.split(" ");
	var minWord = 1000000;
	for ( var i=1; i<arrayOfStrings.length; i=i+1){
		var length = arrayOfStrings[i].length;
		if (minWord > length) {
			minWord = length;
		}
	}

	return minWord;
}
