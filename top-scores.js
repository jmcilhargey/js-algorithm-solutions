function orderGameScore(unsortedScores, highestPossibleScore) {

	var possibleGameScores = [];

	for (var i = 0; i <= highestPossibleScore; i++) {
		possibleGameScores[i] = 0;
	}

	unsortedScores.forEach(function(score) {
		possibleGameScores[score]++;
	});

	var orderedScores = [];

	possibleGameScores.forEach(function(count, score) {
		if (count > 0) {
			for (var i = 0; i < count; i++) {
				orderedScores.push(score);
			}
		} 
	});
	return orderedScores;
}

console.log(orderGameScore([15, 45, 20, 55, 90, 75, 0, 5, 100, 15], 100));