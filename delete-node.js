function deleteTheNode(node) {

	var nextNode = node.next;

	if (nextNode) {

		node.value = nextNode.value;
		node.next = nextNode.next;

	} else {
		throw new Error("Can't delete node at end of list!");
	}
}