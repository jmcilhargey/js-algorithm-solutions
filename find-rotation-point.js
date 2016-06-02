function findRotationPoint(arrOfWords) {
	
	var firstWord = arrOfWords[0];

	var floorIndex = 0; 
	var ceilIndex = arrOfWords.length - 1;


	while (floorIndex < ceilIndex) {

		var guessIndex = Math.floor(floorIndex + ((ceilIndex - floorIndex) / 2));

		if (words[floorIndex] > firstWord) {
			floorIndex = guessIndex;
		} else {
			ceilIndex = guessIndex;
		}

		if (floorIndex + 1 === ceilIndex) {
			break;
		}
	}
	return ceilIndex;
}

var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

console.log(findRotationPoint(words));