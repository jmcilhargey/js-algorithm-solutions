function findValidBrackets(listOfBrackets) {

	var bracketStack = [];

	var bracketKey = {
		"(" : ")",
		"{" : "}",
		"[" : "]",
	};

	for (var i = 0; i < listOfBrackets.length; i++) {

		var currBracket = listOfBrackets[i];

		if (bracketKey.hasOwnProperty(currBracket)) {
			bracketStack.push(currBracket);
		} else {
			if (bracketKey[bracketStack.pop()] !== currBracket) {
				return false;
			}
		}
	}
	return true;
}

console.log(findValidBrackets("(()(){[]})"));