'use strict';
/**
 * Complete the function which converts hex number (given as a string)
 * to a decimal number.
 */

function hexToDec(hexString) {
    return Number.parseInt(Number.parseInt(hexString, 16), 10);
}
