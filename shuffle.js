function uniformShuffle(inputArray) {
  
  var endIndex = inputArray.length - 1;
  var swapIndex;
  var tempValue;
	
  for (var currIndex = 0; currIndex < endIndex; currIndex++) {
    
    swapIndex = getRandom(currIndex, endIndex);
    
    tempValue = inputArray[currIndex];
    inputArray[currIndex] = inputArray[swapIndex];
    inputArray[swapIndex] = tempValue;
  }
  return inputArray;
}

function getRandom(floor, ceiling) {
	return Math.floor(Math.random() * (ceiling - floor + 1) + floor);
}