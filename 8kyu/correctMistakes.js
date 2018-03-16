'use strict';
/**
 * Character recognition software is widely used to digitise printed texts.
 * Thus the texts can be edited, searched and stored on a computer.
 *
 * When documents (especially pretty old ones written with a typewriter),
 * are digitised character recognition softwares often make mistakes.
 *
 * Your task is correct the errors in the digitised text.
 *
 * You only have to handle the following mistakes:
 *
 * S is misinterpreted as 5
 * O is misinterpreted as 0
 * I is misinterpreted as 1
 */

// function correct(string) {
//     let regExes = {
//         O: /0/g,
//         I: /1/g,
//         S: /5/g
//     };

//     Object.keys(regExes).forEach(
//         re => (string = string.replace(regExes[re], re))
//     );

//     return string;
// }

function correct(string) {
    return string
        .replace(/0/g, 'O')
        .replace(/5/g, 'S')
        .replace(/1/g, 'I');
}

console.log(correct('L0ND0N'));
console.log(correct('DUBL1N'));
console.log(correct('51NGAP0RE'));
console.log(correct('BUDAPE5T'));
console.log(correct('PAR15'));

// Test.assertEquals(correct("L0ND0N"),"LONDON");
// Test.assertEquals(correct("DUBL1N"),"DUBLIN");
// Test.assertEquals(correct("51NGAP0RE"),"SINGAPORE");
// Test.assertEquals(correct("BUDAPE5T"),"BUDAPEST");
// Test.assertEquals(correct("PAR15"),"PARIS");
