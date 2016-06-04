function LinkedListNode(value) {
	this.value = value;
	this.next = null;
}

function reverseTheLinkedList(headNode) {

	var prevNode = null;
	var currNode = headNode;
	var nextNode = null;

	while (currNode) {
		// Grab next node in the list
		nextNode = currNode.next;
		// Reverse the pointer to the previous node
		currNode.next = prevNode;
		// Take a step forward in the list
		prevNode = currNode;
		currNode = nextNode;
	}
	// Last node in the list gets returned as new head
	return prevNode;
}