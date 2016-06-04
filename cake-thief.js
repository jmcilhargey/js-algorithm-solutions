function getMaximumValue(arrOfCakes, maxWeight) {
	
	var maxValuesAtEachWeight = [];

	for (var i = 0; i <= maxWeight; i++) {
		maxValuesAtEachWeight[i] = 0;
	}

	for (var currWeight = 0; currWeight <= maxWeight; currWeight++) {

		var maxValueSoFar = 0;

		for (var j = 0; j < arrOfCakes.length; j++) {

			var currCake = arrOfCakes[j];

			if (currCake.weight === 0 && currCake.value > 0) {
				return Infinity;
			}

			if (currCake.weight <= currWeight) {
				var HighestValueWithCake = currCake.value + maxValuesAtEachWeight[currWeight - currCake.weight];

				maxValueSoFar = Math.max(HighestValueWithCake, maxValueSoFar);
			}
		}
		maxValuesAtEachWeight[currWeight] = maxValueSoFar;
	}
	return maxValuesAtEachWeight[maxWeight];
}

console.log(getMaximumValue([{value: 40, weight: 3}, {value: 70, weight: 5}], 9));


