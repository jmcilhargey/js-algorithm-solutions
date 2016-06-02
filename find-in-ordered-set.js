function binarySearch(sortedArr, searchVal) {
    
  // Checking to see if value present in sorted array

  // Define walls around our array to check all possible positions
  var floorIndex = -1;
  var ceilIndex = sortedArr.length;
    
    // Needs to be at least 1 distance between floor and ceil or we've run out of guesses
	while (floorIndex + 1 < ceilIndex) {
        // Find the distance between floor and ceiling and divide by 2 and round down to get whole number to add to floor
		var distance = ceilIndex - floorIndex;
		var halfDistance = Math.floor(distance / 2);
		var guessIndex = floorIndex + halfDistance;

		var guessValue = sortedArr[guessIndex];

		if (guessValue === searchVal) return true;
        // Target value is to the left so move ceiling to middle point
		if (guessValue > searchVal) {
			ceilIndex = guessIndex;
		} else {
        // Target value is to the right, so move floor to middle point
			floorIndex = guessIndex;
		}
	}
	return false;
}

console.log(binarySearch([1, 4, 8, 9, 14, 19, 23, 29, 43, 85, 103, 156], 19)); 