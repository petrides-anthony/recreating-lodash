/*
 Creates an array with all falsey values removed. 
 The values false, null, 0, "", undefined, and NaN are falsey.
*/

/* Example:
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
*/

/*
**************************
******* ATTEMPT #1 *******
**************************
*/

const sampleArray = [0, 1, false, 2, '', 3];

const compact = (myArray) => {
  return myArray.filter((element, index) => { 
    return element !== (0 || "" || undefined || NaN || false)
  })
}

console.log(compact(sampleArray));
// [ 0, 1, 2, '', 3 ]

/*
**************************
******* ATTEMPT #2 *******
**************************
*/

// Using Boolean as the array filter works because it filters
// by nature for truthy values only.
const compact2 = (myArray) => {
  return myArray.filter(Boolean);
}

console.log(compact2(sampleArray));
// [ 1, 2, 3 ]
