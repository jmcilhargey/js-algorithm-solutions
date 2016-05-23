function stockPricesYesterday(dailyStockPrices) {

	// Check for at least 2 prices
	if (dailyStockPrices.length < 2) {
		throw new Error("Need at least 2 prices to calculate max profit");
	}
	// Initialize variables to get 1st price and 1st possible profit
	var minPrice = dailyStockPrices[0];
	var maxProfit = dailyStockPrices[1] - dailyStockPrices[0];

	// Start at index 1 for first opportunity to sell after buy. 
	for (var i = 1; i < dailyStockPrices.length; i++) {
		var currentPrice = dailyStockPrices[i];
		// Calculate profit if bought at lowest price and sold at current price
		var potentialProfit = currentPrice - minPrice;
		// Update max profit if profit is larger
		maxProfit = Math.max(maxProfit, currentProfit);
		// Update min price if lowest seen
		minPrice = Math.min(minPrice, currentPrice);
	}
	return maxProfit;
}