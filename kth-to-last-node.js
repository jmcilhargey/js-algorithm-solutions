function kthToLastNode(headNode, k) {

	var listLength = 0;

	var currNode = headNode;

	while (currNode) {
		listLength++;
		currNode = node.next;
	}

	if (k > listLength) {
		throw new Error("Can't get node larger than length of list");
	}

	var nodesToWalk = listLength - k;
	currNode = headNode;

	for (var i = 1; i <= nodesToWalk; i++) {
		currNode = currNode.next;
	}
	return currNode;
}

function kthToLastNode2ndMethod(headNode, k) {

	var currNode = headNode;

	for (var i = 1; i <= k; i++) {

		if (currNode === null) {
			throw new Error("List is shorter than k nodes");
		}

		currNode = currNode.next;
	}
	
	var kthNodeFromEnd = headNode;

	while (currNode) {
		currNode = currNode.next;
		kthNodeFromEnd = kthNodeFromEnd.next;
	}
	return kthNodeFromEnd;
}