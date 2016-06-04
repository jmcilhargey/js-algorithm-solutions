function reverseStringInPlace(string) {

	var strArray = string.split("");

	var firstIndex = 0;
	var lastIndex = string.length - 1;

	while (firstIndex < lastIndex) {
		var tempChar = strArray[firstIndex];
		strArray[firstIndex] = strArray[lastIndex];
		strArray[lastIndex] = tempChar;
		firstIndex++;
		lastIndex--;
	}
	return strArray.join("");
}

console.log(reverseStringInPlace("yellow submarine"));