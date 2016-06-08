function getPermutationsRecursive(string) {
  
  if (string.length <= 1) {
    return new Set(string);
  }
  
  var remainingChars = string.slice(0, -1);
  var lastChar = string[string.length - 1];
  
  var listOfAllFragments = getPermutationsRecursive(remainingChars);
  
  var permutationSet = new Set();
  
  listOfAllFragments.forEach(function(currentFragment) {
    
    for (var i = 0; i <= currentFragment.length; i++) {
      var permutation = currentFragment.substr(0, i) + lastChar + currentFragment.substr(i);
      permutationSet.add(permutation);
    }
  });
  return permutationSet;
}

var ourSet = getPermutationsRecursive("abcd");

for (var permutation of ourSet) {
  console.log(permutation);
}