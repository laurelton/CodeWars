'use strict';
/**
 * Two numbers are relatively prime if their greatest common factor is 1;
 * in other words:
 *      if they cannot be divided by any other common numbers than 1.
 *
 * 13, 16, 9, 5, and 119 are all relatively prime because they share
 * no common factors, except for 1.
 *
 * Complete the function that takes 2 arguments: a number (n), and a list of
 * numbers (arr). The function should return a list of all the numbers in arr
 * that are relatively prime to n. All numbers in will be positive integers.
 */

function relativelyPrime(n, list) {
    return list.filter(x => gcd(n, x) == 1);
}

function gcd(frst, scnd) {
    if (frst == 0) {
        return scnd;
    }

    return gcd(scnd % frst, frst);
}

console.log(relativelyPrime(8, [1, 2, 3, 4, 5, 6, 7]));
console.log(relativelyPrime(15, [72, 27, 32, 61, 77, 11, 40]));
console.log(relativelyPrime(210, [15, 100, 2222222, 6, 4, 12369, 99]));
console.log(relativelyPrime(99, []));
console.log(relativelyPrime(1, [2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Test.assertSimilar(relativelyPrime(8, [1,2,3,4,5,6,7]), [1,3,5,7]);
// Test.assertSimilar(relativelyPrime(15, [72,27,32,61,77,11,40]), [32, 61, 77, 11]);
// Test.assertSimilar(relativelyPrime(210, [15,100,2222222,6,4,12369,99]), []);
// Test.assertSimilar(relativelyPrime(99, []), []);
// Test.assertSimilar(relativelyPrime(1, [2,3,4,5,6,7,8,9,10]), [2,3,4,5,6,7,8,9,10]);
