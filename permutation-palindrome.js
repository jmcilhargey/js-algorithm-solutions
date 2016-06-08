function checkIfPermutationIsPalindrome(string) {

	var listOfUnpairedChars = new Set();

	for (var i = 0; i < string.length; i++) {

		var currChar = string.charAt(i);

		if (listOfUnpairedChars.has(currChar)) {
			listOfUnpairedChars.delete(currChar);
		} else {
			listOfUnpairedChars.add(currChar);
		}
	}
  
    for (var [key, value] of listOfUnpairedChars) {
      console.log("key: " + key + ", value: " + value);
    }

	return listOfUnpairedChars.size;
}

console.log(checkIfPermutationIsPalindrome("racecar"));
