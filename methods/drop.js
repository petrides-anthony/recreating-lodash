/* Lodash Drop
  Creates a slice of array with n elements dropped from the beginning.

Arguments
  - array (Array): The array to query.
  - [n=1] (number): The number of elements to drop.
Returns
  - (Array): Returns the slice of array.

Example
  _.drop([1, 2, 3]);
  // => [2, 3]
 
  _.drop([1, 2, 3], 2);
  // => [3]
 
  _.drop([1, 2, 3], 5);
  // => []
 
  _.drop([1, 2, 3], 0);
  // => [1, 2, 3]
*/

const drop = (array, numToDrop = 1) => array.slice(numToDrop);

const myArray = [0, 2, 4, 5, 6, 7];
const myArray2 = [0, "two", "iiiii2", 5, 6, 7];

console.log(drop(myArray2, 1));