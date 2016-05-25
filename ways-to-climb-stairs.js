function waysToClimbStairs(numOfStairs) {
	
	if (numOfStairs <= 1) {
		return 1;
	} else {
		return waysToClimbStairs(numOfStairs - 1) + waysToClimbStairs(numOfStairs - 2);
	}
}

waysToClimbStairs(5);