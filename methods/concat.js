/*
 Creates a new array concatenating array with any additional arrays and/or values.
*/

/* Example:
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
*/

/*
**************************
******* ATTEMPT #1 *******
**************************
*/

const testingAgain = (tonyArray, ...args) => {
  tonyArray.push(args);
  return tonyArray;
}

let tonyArray = [32, 18];

console.log(testingAgain(tonyArray, 77, 69));