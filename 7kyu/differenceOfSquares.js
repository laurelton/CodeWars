'use strict';

function differenceOfSquares(number) {
    let range = Array.from(new Array(number), (value, index) => index + 1);
    let sum = range.reduce((total, val) => (total += val));
    let squares = range.map(x => x * x);

    return sum * sum - squares.reduce((total, val) => (total += val));
}

console.log(differenceOfSquares(10));
