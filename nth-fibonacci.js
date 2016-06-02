// Recursive
function FibSequence() {
  this.memo = {};
}

FibSequence.prototype.fibonacci = function(num) {
  
  if (num < 0) {
    throw new Error("Can't calculate for negative index");
  }
  
  if (num === 0 || num === 1) {
    return num;
  }
  
  if (this.memo.hasOwnProperty(num)) {
    return this.memo[num];
  }
  
  var result = this.fibonacci(num - 1) + this.fibonacci(num - 2);
  
  this.memo[num] = result;
  
  return result;
};

var fib = new FibSequence();

// Iterative 
function iterativeFibonacci(num) {
  
  if (num < 0) {
    throw new Error("Can't calculate negative index");
  }
  
  var prevPrevNum = 0;
  var prevNum = 1;
  var currNum = 0;
  
  for (var i = 2; i <= num; i++) {
    
    currNum = prevNum + prevPrevNum;
    prevPrevNum = prevNum;
    prevNum = currNum;
    
  }
  return currNum;
}

console.log(iterativeFibonacci(10));