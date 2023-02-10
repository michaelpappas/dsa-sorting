"use strict";
/** Sorts 2 sorted arrays
 * Returns: a sorted array
 */
function merge(arr1, arr2) {
  let arr1Counter = 0;
  let arr2Counter = 0;

  let finalArray = [];

  /* let arr1Val = arr1[arr1Counter];
  let arr2Val = arr2[arr2Counter]; */

  while (arr1Counter <= arr1.length - 1 && arr2Counter <= arr2.length - 1) {

    if (arr1[arr1Counter] < arr2[arr2Counter]) {
      finalArray.push(arr1[arr1Counter]);
      arr1Counter++;
    } else {
      finalArray.push(arr2[arr2Counter]);
      arr2Counter++;
    }
  }

  // if arr1 runs out, push all of remaining arr2
  while (arr2Counter <= arr2.length - 1) {
    finalArray.push(arr2[arr2Counter]);
    arr2Counter++;
  }

  while (arr1Counter <= arr1.length - 1) {
    finalArray.push(arr1[arr1Counter]);
    arr1Counter++;
  }

  return finalArray;
}

function mergeSort() {}

module.exports = { merge, mergeSort };
