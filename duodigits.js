/**
 *  check if a given number do contain les than two different digits, 
 * that are called duodigits
 * For example :
 * 12 , 110 , -33333 : are all duodigits , 
 * since they have no more than two different digits 
 * 102 : is not a duodigit since his digits ; 
 * 1 and 0 and 2 are three different digits
 */

/**
 * Checks if a number is a duodigit.
 * @param {number} num 
 * @returns {boolean}
 */
function isDuodigit(num) {
    return new Set(Math.abs(num).toString()).size <= 2;
  }