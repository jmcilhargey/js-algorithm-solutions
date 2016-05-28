var TempTracker = function() {

	this.maxTemp = null;
	this.minTemp = null;

	this.totalSum = 0;
	this.totalTemps = 0;

	this.tempOccur = [];
	this.mode = null;
	this.maxOccur = 0;

	for (var i = 0; i <= 110; i++) {
		tempOccur[i] = 0;
	}
}

TempTracker.prototype.insert = function(temp) {

	if (temp > this.maxTemp || this.maxTemp === null) {
		this.maxTemp = temp;
	}

	if (temp < this.minTemp || this.minTemp === null) {
		this.minTemp = temp;
	}

	this.totalSum += temp;
	this.totalTemps++;

	this.tempOccur[temp]++;

	if (this.tempOccur[temp] > this.maxOccur) {
		this.mode = temp;
		this.maxOccur = this.tempOccur[temp];
	}

	this.temps.push(temp);
};

TempTracker.prototype.getMax = function() {
	return this.maxTemp;
};

TempTracker.prototype.getMin = function() {
	return this.minTemp;
}

TempTracker.prototype.getMean = function() {
	return this.totalSum / this.totalTemps;
}

TempTracker.prototype.getMode = function() {
	return this.mode;
}