function mergeTwoArrays (array1, array2) {

	// Input arrays are sorted in advance

	var mergedArray = [];

	var array1Index = 0;
	var array2Index = 0;
    var mergedArrayIndex = 0;

    while (array1.length + array2.length > mergedArrayIndex) {
      
      if ((array1Index <= array1.length - 1 && array1[array1Index] <= array2[array2Index]) || array2Index > array2.length - 1) {
        mergedArray[mergedArrayIndex] = array1[array1Index];
        array1Index++;
      } else if ((array2Index <= array2.length - 1 && array2[array2Index] < array1[array1Index]) || array1Index > array1.length - 1) {
        mergedArray[mergedArrayIndex] = array2[array2Index];
        array2Index++;
      }
      mergedArrayIndex++;
    }
	return mergedArray;
}