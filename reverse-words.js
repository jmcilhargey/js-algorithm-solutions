function reverseWords(message) {

	var messageArray = message.split("");
	
	reverseCharacters(messageArray, 0, messageArray.length - 1);
	
	var firstIndex = 0;

	for (var i = 0; i <= messageArray.length; i++) {

		if (messageArray[i] === " " || i === messageArray.length) {
			reverseCharacters(messageArray, firstIndex, i - 1);
			firstIndex = i + 1;
		}
	}
	return messageArray.join("");
}

function reverseCharacters(messageArray, startIndex, endIndex) {

	while (startIndex < endIndex) {

		var tempChar = messageArray[startIndex];

		messageArray[startIndex] = messageArray[endIndex];
		messageArray[endIndex] = tempChar;

		startIndex++;
		endIndex--;
	}
}

console.log(reverseWords("Blackbird singing in the dead of night"));