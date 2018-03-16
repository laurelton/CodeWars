'use strict';

function getSize(width, height, depth) {
    return [
        2 * (width * depth + height * depth + height * width),
        width * height * depth
    ];
}

// Test.assertEquals(getSize(4, 2, 6)[1], 48);
// Test.assertSimilar(getSize(10, 10, 10), [600, 1000]);
// Test.assertEquals(getSize(4, 2, 6)[0], 88);
// Test.assertEquals(getSize(4, 2, 6)[1], 48);
