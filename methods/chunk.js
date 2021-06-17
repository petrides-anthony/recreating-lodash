// _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
// _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

/*
**************************
******* ATTEMPT #1 *******
**************************
*/

const splitIntoChunks = (myArray, sizeOfChunks = 2) => {
  const stringifiedArray = myArray.join('');
  const chunkSplit = new RegExp(`.{1,${sizeOfChunks}}`, 'g');
  const chunkedArray = stringifiedArray.match(chunkSplit);

  console.log('stringified array: ', stringifiedArray);
  console.log('stringfied array with match and regex run on it: ', chunkedArray);
 
  return chunkedArray.map(element => element.split(''));
 }
 
 sampleArray = ['a', 'b', 'c', 'd', 'e', 'f'];
 sampleArray2 = ["a", "b", "c", "d", { name: 'Luca' }, "f"];
 
 console.log('Attempt #1:');
 console.log(splitIntoChunks(sampleArray, 4));
 // [ 'abcd', 'ef' ]
 // [ ['a','b','c','d'], ['e','f'] ]
 
 
 /*
**************************
******* ATTEMPT #2 *******
**************************
*/
 const splitIntoChunksAttempt2 = (myArray, chunkSize) => {
   if (chunkSize === 0) {
     return [];
   }
 
   const result = [];
   // result = [['a', 'b'], ['c', 'd'], []]
 
   let currentChunkLength = 0;
   // 0
 
   myArray.forEach((item, index) => {
     if (currentChunkLength === 0) {
       result.push([]);
     }
 
     const currentChunk = result[result.length - 1];
     // []
     currentChunk.push(item);
 
     currentChunkLength++;
     if (currentChunkLength === chunkSize) {
       currentChunkLength = 0;
     }
   });
 
   return result;
 }
 
 sampleArray = ['a', 'b', 'c', 'd', 'e', 'f'];
 sampleArray2 = ["a", "b", "c", "d", { name: 'Luca' }, "f"];

 console.log(splitIntoChunksAttempt2(sampleArray, 2));
 console.log(splitIntoChunksAttempt2(sampleArray2, 2));
 
/*
**************************
******* ATTEMPT #3 *******
**************************
*/

 const splitIntoChunksAttempt3 = (myArray, chunkSize) => {
   if (chunkSize === 0) {
     return [];
   }
 
   const chunksLength = Math.ceil(myArray.length / chunkSize);
   const result = new Array(chunksLength).fill(null);
 
   // [null, null, null]
   return result.map((_, index) => {
     const startIndex = index * chunkSize;
     // 0
     const endIndex = startIndex + chunkSize;
     // 2
     return myArray.slice(startIndex, endIndex);
   });
 }
 
 sampleArray = ['a', 'b', 'c', 'd', 'e', 'f'];
 sampleArray2 = ["a", "b", "c", "d", { name: 'Luca' }, "f"];

 console.log(splitIntoChunksAttempt3(sampleArray, 4));
 console.log(splitIntoChunksAttempt3(sampleArray2, 4));
 