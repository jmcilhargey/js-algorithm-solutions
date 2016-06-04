function LinkedListNode(value) {
	this.value = value;
	this.next = null;
}

function findIfLoopInList(headNode) {

	var slowRunner = headNode;
	var fastRunner = headNode.next;

	while(fastRunner) {

		if (slowRunner === fastRunner) {
			return true;
		}
		slowRunner = slowRunner.next;
		fastRunner = fastRunner.next.next;
	}
	return false;
}