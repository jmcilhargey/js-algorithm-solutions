function Stack() = {
	this.items = [];
}

Stack.prototype.push = function(item) {
	this.items.push(item);
};

Stack.prototype.pop = function() {
	if (!this.items.length) { return null; }
	return this.items.pop();
};

Stack.prototype.peek = function() {
	if (!this.items.length) { return null; }
	return this.items[this.items.length - 1];
};


function MaxStack() {
	this.stack = new Stack();
	this.maxStack = new Stack();
}

MaxStack.prototype.push = function(item) {
	this.stack.push(item);

	if (this.maxStack.peek() <= item || !this.maxStack.peek()) {
		this.maxStack.push(item);
	}
};

MaxStack.prototype.pop = function() {
	var item = this.stack.pop();

	if (item === this.stack.peek()) {
		this.maxStack.pop();
	}
	return item;
};

Maxstack.prototype.getMax = function() {
	return this.maxStack.peek();
};