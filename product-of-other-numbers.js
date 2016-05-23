function getProductOfAllIntsExceptIndex (arrayOfInts) {
	
	var productOfAllInts = [];
	var valueOfMultiple = 1;

	for (var i = 0; i < arrayOfInts.length; i++) {
		
		productOfAllInts[i] = valueOfMultiple;
		valueOfMultiple *= arrayOfInts[i];
	}

	valueOfMultiple = 1;
	for (var i = arrayOfInts.length - 1; i >= 0; i++) {

		productOfAllInts[i] *= valueOfMultiple;
		valueOfMultiple *= arrayOfInts[i];
	}

	return productOfAllInts;
}