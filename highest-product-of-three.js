function findHighestProductOfThree(arrayOfInts) {

	var highestProductOfTwo = arrayOfInts[0] * arrayOfInts[1];
	var lowestProductOfTwo = arrayOfInts[0] * arrayOfInts[1];
	var highestProductOfThree = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
	
	var lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
	var highest = Math.max(arrayOfInts[0], arrayOfInts[1]);

	for (var i = 2; i < arrayOfInts.length; i++) {

		var currentNum = arrayOfInts[i];

		highestProductOfThree = Math.max(currentNum * highestProductOfTwo, currentNum * lowestProductOfTwo, highestProductOfThree);

		highestProductOfTwo = Math.max(currentNum * highest, highestProductOfTwo);

		lowestProductOfTwo = Math.min(currentNum * lowest, lowestProductOfTwo);

		highest = Math.max(currentNum, highest);
		lowest = Math.min(currentNum, lowest);
	}
	return highestProductOfThree;
}