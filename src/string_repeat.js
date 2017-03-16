function repeatStr (n, s) {
  var result = s;
	for (i=0; i<n-1; i++){
	  result += s;
	}
	return result;
}
