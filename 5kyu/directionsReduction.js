let pairs = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST'
};

function dirReduc(arr) {
    // ...
    for (let i = 0; i < arr.length - 1; i++) {
        if (matching(arr)) {
            arr.shift();
            arr.shift();
            dirReduc(arr);
        }
    }
}

function matching(arr) {
    return pairs[arr[0]] === arr[1];
}

// Test.assertSimilar(
//     dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']),
//     ['WEST']
// );
// Test.assertSimilar(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), [
//     'NORTH',
//     'WEST',
//     'SOUTH',
//     'EAST'
// ]);
// Test.assertSimilar(
//     dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']),
//     []
// );

console.log(
    dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
);

// console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']));
