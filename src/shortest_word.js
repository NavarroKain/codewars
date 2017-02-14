function findShort(s){
	var arrayOfStrings = s.split(" ");
	var minWord = arrayOfStrings[0].length;;
	for ( var i=0; i<arrayOfStrings.length; i=i+1){
		var length = arrayOfStrings[i].length;
		if (length > 0 && minWord > length) {
			minWord = length;
		}
	}

	return minWord;
}
