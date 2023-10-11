/**
 * Returns the sum of integers in an array whose index is between start and end
 * returns {Number}
 */

function sumOfInteger(array, start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += array[i];
  }
  return sum;
}
