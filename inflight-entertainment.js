function findTwoMovies(movieLengths, flightTime) {
	
	var movieLengthsSeen = new Set();

	for (var i = 0; i < movieLengths.length; i++) {

		var firstMovieLength = movieLengths[i];
		var matchingSecondLength = flightTime - firstMovieLength;

		if (movieLengthsSeen.has(matchingSecondLength)) {
			return true;
		}

		movieLengthsSeen.add(firstMovieLength);
	}
	return false;
}

console.log(findTwoMovies([100, 120, 150, 135, 210, 115, 95, 100, 115], 310));