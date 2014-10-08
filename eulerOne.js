// If we list all the natural numbers below 10 that are multiples 
// of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

var eulerOne = function(num){
  // declare an array to push values into
  var multiples = [];
  for ( var i = 1; i < num; i ++ ) {
    // find whole numbers below "num" that are multiples of 3 OR 5
    if ( i%3 == 0 || i%5 == 0 ) {
      // add them to the end of the array
      multiples = multiples.concat(i);
    };
  };
  // Array.prototype.reduce() method, similar to Ruby "inject"
  var sol = multiples.reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  });

  return sol;
};

// eulerOne(1000); #=> 233168