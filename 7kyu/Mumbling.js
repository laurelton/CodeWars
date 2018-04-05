//  https://www.codewars.com/kata/mumbling/train/javascript

let accum = function(s) {
    let letters = s.split('');
    let str = '';
    for (let i = 0; i < letters.length; i++) {
        str += letters[i].toUpperCase();
        str += letters[i].toLowerCase().repeat(i);
        str += i === letters.length - 1 ? '' : '-';
    }
    return str;
};

function accum2(s) {
    return s
        .split('')
        .reduce(
            (string, letter, i, rry) =>
                (string +=
                    letter.toUpperCase() +
                    letter.toLowerCase().repeat(i) +
                    (i === rry.length - 1 ? '' : '-')),
            ''
        );
}

/*
Test.describe("accum",function() {
Test.it("Basic tests",function() {    
	Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
	Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
	Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
	Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
	Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
})})
*/
console.log(accum('ZpglnRxqenU'));
console.log(accum2('ZpglnRxqenU'));
