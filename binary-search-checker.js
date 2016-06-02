var BinaryTreeNode = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

function checkBalancedBinaryTree(rootNode) {

	var nodeStack = [];
	nodeStack.push({node: rootNode, upperBound: Infinity, lowerBound: -Infinity});

	while (nodeStack.length) {

		var currNode = nodeStack.pop();
		var node = currNode.node;
		var upperBound = currNode.upperBound;
		var lowerBound = currNode.lowerBound;

		if (node.value < lowerBound || node.value > upperBound) {
			return false;
		}

		if (node.left) {
			nodeStack.push(node: node.left, upperBound: node.value, lowerBound: lowerBound);
		}

		if (node.right) {
			nodeStack.push(node: node.right, upperBound: upperBound, lowerBound: node.value);
		}
	}
	return true;
}

function balancedBinaryTreeRecursive(node, upperBound, lowerBound) {

	if (!node) {
		return true;
	}

	var upperBound =  upperBound || Infinity;
	var lowerBound =  lowerBound || -Infinity;

	if (node.value < lowerBound || node.value > upperBound) {
		return false;
	}

	if (node.right) {
		balancedBinaryTreeRecursive(node.right, upperBound, node.value);
	}
	if (node.left) {
		balancedBinaryTreeRecursive(node.left, node.value, lowerBound);
	}
}

/*    return bstCheckerRecursive(treeRoot.left, lowerBound, treeRoot.value) &&
           bstCheckerRecursive(treeRoot.right, treeRoot.value, upperBound);

*/ 

