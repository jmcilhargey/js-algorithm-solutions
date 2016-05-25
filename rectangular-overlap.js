function findRangeOverlap(point1, length1, point2, length2) {

	var highestStartPoint = Math.max(point1, point2);
	var lowestEndPoint = Math.min(point1 + length1, point2 + length2);

	if (highestStartPoint >= lowestEndPoint) {
		return { startPoint: null, width: null };
	}

	var overlapWidth = highestStartPoint - lowestEndPoint;

	return { startPoint: highestStartPoint, width: overlapWidth };

}