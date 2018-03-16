'use strict';

function gcd(frst, scnd) {
    if (frst == 0) {
        return scnd;
    }

    return gcd(scnd % frst, frst);
}

console.log(gcd(45, 210));
console.log(gcd(270, 192));
console.log(gcd(31, 17));
