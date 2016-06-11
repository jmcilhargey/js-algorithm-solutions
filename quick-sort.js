function swap(array, firstIndex, lastIndex) {
	// Swap two values
	var temp = array[firstIndex];
	array[firstIndex] = array[lastIndex];
	array[lastIndex] = temp;
}

function partition(array, left, right) {
	// Grab middle value as pivot to compare
	var pivotValue = array[Math.floor((left + right) / 2)];
	var leftIndex = left;
	var rightIndex = right;
	// Keep looping as long as left and right pointers don't pass each other
	while (leftIndex <= rightIndex) {
		// Keep going while value is less than pivot
		while (array[leftIndex] < pivotValue) {
			leftIndex++;
		}
		// Keep going while value is more than pivot
		while (array[rightIndex] > pivotValue) {
			rightIndex--;
		}
		// As long as we haven't crossed pointers, swap values and increment
		if (leftIndex <= rightIndex) {
			swap(array, leftIndex, rightIndex);
			leftIndex++;
			rightIndex--;
		}
	}
	// Return the left pointer as the start / end point for next function call
	return leftIndex;
}

function quickSort(array, left, right) {

	var currentIndex;

	if (array.length > 1) {
		// Sort the segment and get the position of left pointer
		currentIndex = partition(array, left, right);
		// If it's to the right of the left (floor) index, set it as the right (ceil) index
		if (left < currentIndex - 1) {
			quickSort(array, left, currentIndex - 1);
		}
		// If it's to the left, set it as the left index
		if (right > currentIndex) {
			quickSort(array, currentIndex, right);
		}
	}
	// No recursive call, pointers converged, return sorted array
	return array;
}

var testArray = [13, 18, 14, 9, 5, 10, 6, 2, 16, 11, 4, 20, 17, 19, 7, 8, 12, 3, 1, 15];
console.log(quickSort(testArray, 0, testArray.length - 1));