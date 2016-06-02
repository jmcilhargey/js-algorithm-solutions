function MaxStack() {
  this.items = [];
  this.maxItems = [];  
}

MaxStack.prototype.push = function(item) {
  
  if (!maxItems.peek() || maxItems.peek() < item) {
    this.maxItems.push(item);
  }
  this.items.push(item);
  return item;
};

Stack.prototype.pop = function() {
  
  if (!this.items.length) {
    return null;
  }
  var poppedItem = this.items.pop();
  
  if (poppedItem === this.maxItems.peek()) {
    this.maxItems.pop();
  }
  return poppedItem;
};

Stack.prototype.peek = function() {
  
  if (!this.items.length) {
    return null;
  }
  return this.items[this.items.length -1];
};

Stack.prototype.getMax = function() {
  return this.maxItems.peek();
};