"use strict";
/** takes in an input array and returns a sorted array */
function bubbleSort(inputArray) {
  for (let i = inputArray.length - 1; i > 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (inputArray[j] > inputArray[i]) {
        let temp = inputArray[j];
        inputArray[j] = inputArray[i];
        inputArray[i] = temp;
      }
    }
  }
  return inputArray;
}



module.exports = bubbleSort;