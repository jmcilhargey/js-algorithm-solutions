function mergeSort(array) {
    // Base case: If no pair value to compare, will 
	if (array.length < 2) {
		return array;
	}
    // Get middle index and grab left and right sides of array
	var midPoint = Math.floor(array.length / 2);
	var leftSide = array.slice(0, midPoint);
	var rightSide = array.slice(midPoint);
    // Pass into merge function
    // mergeSort is recursively called, making two function calls itself until we hit the base case
	return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(left, right) {

	var resultArray = [];
	var leftIndex = 0;
	var rightIndex = 0;
    // Keep making comparisons as long as there are values to compare on both the left and right side
    // Note in this case, there will only be two values at most to compare due to recursive base case in mergeSort
	while (leftIndex < left.length && rightIndex < right.length) {

		if (left[leftIndex] < right[rightIndex]) {
            // If the left value is left, then push to the array and increment left pointer
			resultArray.push(left[leftIndex++]);
		} else {
            // Otherwise push the right value and increment
			resultArray.push(right[rightIndex++]);
		}
	}
    // Any extra 'tail' values not compared are appended to the end of the results array
	return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([4, 7, 2, 3, 9, 4, 1, 2, 5, 7]));
console.log([4, 7, 2, 3, 9, 4, 1, 2, 5, 7].sort());