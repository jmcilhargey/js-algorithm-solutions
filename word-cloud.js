function WordCloud(message) {

	this.listOfWords = new Map();
	this.getWordsFromString(message);
}

WordCloud.prototype.getWordsFromString = function(message) {

	var currentWord = "";

	for (var i = 0; i < message.length; i++) {

		var currentChar = message[i];

		if (this.isLetter(currentChar) || currentChar === "\'" || currentChar === "-") {
			currentWord += currentChar;
		} else if (currentChar === " " || currentChar === ".") {
			this.addWordToCloud(currentWord);
			currentWord = "";
		}

	}

};

WordCloud.prototype.addWordToCloud = function(nextWord) {

	var count;
	var word = this.toLowerCase(nextWord);

	if (this.listOfWords.has(word)) {
		count = this.listOfWords.get(word);
		this.listOfWords.set(word, count += 1);
	} else {
		this.listOfWords.set(word, 1);
	}

};

WordCloud.prototype.isLetter = function(char) {
	return /[a-zA-Z]/.test(char);
};

WordCloud.prototype.toLowerCase = function(word) {
	return word.charAt(0).toLowerCase() + word.slice(1);
};



