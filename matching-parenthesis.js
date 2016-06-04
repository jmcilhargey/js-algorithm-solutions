function findMatchingParenthesis(sentence, posOfParen) {

	var openParens = 1;

	for (var i = posOfParen + 1; i < sentence.length; i++) {
		if (sentence.charAt(i) === "(") {
			openParens++;
		
		} else if (sentence.charAt(i) === ")") {
			openParens--;
			if (openParens === 0) {
				return i;
			}
		}
	}
	return -1;
}

console.log(findMatchingParenthesis("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."));