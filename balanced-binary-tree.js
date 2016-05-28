function isBalancedTree(rootNode) {

	var depthsSeen = [];

	var nodes = [];
	nodes.push([rootNode, 0]);

	while (nodes.length) {

		var currNode = nodes.pop();
		var node = currNode[0];
		var nodeDepth = currNode[1];

		if (!node.left && !node.right) {
			if (depthsSeen.indexOf(nodeDepth) < 0) {
				depthsSeen.push(nodeDepth);
			}

			if (depthsSeen.length > 2 || depthsSeen[1] - depthsSeen[0] > 1) {
				return false;
			}
		} else {

			if (node.left) {
				nodes.push(node.left, nodeDepth + 1);
			}
			if (node.right) {
				nodes.push(node.left, nodeDepth + 1);
			}
		}
	}
	return true;
}

var BinaryTreeNode = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
};

BinaryTreeNode.prototype.insertLeft = function(value) {
	this.left = new BinaryTreeNode(value);
	return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
	this.right = new BinaryTreeNode(value);
	return this.right;
};
