function inOrderTraversal(node) {

	if (node) {
		inOrderTraversal(node.left);
		console.log(node.value);
		inOrderTraversal(node.right);
	}
}

var NodeTree = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

NodeTree.prototype.insertLeft = function(value) {
	this.left = new NodeTree(value);
	return this.left;
}

NodeTree.prototype.insertRight = function(value) {
	this.right = new NodeTree(value);
	return this.right;
}

var ourNodeTree = new NodeTree(50);

var rightBranch = ourNodeTree.insertRight(60);
var leftBranch = ourNodeTree.insertLeft(40);

leftBranch.insertLeft(30);
leftBranch.insertRight(45);

rightBranch.insertLeft(55);
rightBranch.insertRight(75);

function getHighestValue(rootNode) {

	var node = rootNode;

	while (node) {

		if (node.right) {
			node = node.right;
		}
	}
	return node;
}

function getSecondLargest(rootNode) {

	if (!rootNode.left && !rootNode.right) {
		throw new Error("Must have at least 2 nodes!");
	}

	var currNode = rootNode;

	while (currNode) {

		if (currNode.left && !currNode.right) {
			return getHighestValue(currNode.left);
		}

		if (currNode.right && !currNode.right.right && !currNode.right.left) {
			return currNode.value;
		}

		currNode = currNode.right;
	}
}

getSecondLargest(ourNodeTree);
