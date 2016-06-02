function findMissingDrone(arrayOfIds) {
	
	var listDroneIds = {};

	for (var i = 0; i < arrayOfIds.length; i++) {

		if (listDroneIds.hasOwnProperty(arrayOfIds[i])) {
			listDroneIds[arrayOfIds[i]]++;
		} else {
			listDroneIds[arrayOfIds[i]] = 1;
		}
	}

	for (var id in listDroneIds) {
		if (listDroneIds[id] === 1) {
			return id;
		}
	}
	return "No single ID found";
}

// Bitwise solution using XOR to find the 1 value without a pair

function findUniqueId(arrayOfIds) {
	 
	var uniqueId = 0;

	arrayOfIds.forEach(function(id) {
		uniqueId ^= id;
	});
	return uniqueId;
}

console.log(findUniqueId([123, 345, 567, 678, 456, 345, 123, 567, 456]));