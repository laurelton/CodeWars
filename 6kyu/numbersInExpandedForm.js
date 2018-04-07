/**
 *  http://www.codewars.com/kata/write-number-in-expanded-form
 */

function expandedForm(num) {
    let numbers = [];
    let divisor = 1;
    while (num > 0) {
        divisor *= 10;
        let remainder = num % divisor;
        if (remainder > 0) {
            numbers.unshift(remainder);
        }
        num -= remainder;
    }

    return numbers.length > 1
        ? numbers.reduce((str, num) => str + ' + ' + num)
        : numbers[0].toString();
}

// Test.assertEquals(expandedForm(12), '10 + 2');
// Test.assertEquals(expandedForm(42), '40 + 2');
// Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');

// console.log(expandedForm(2));
// console.log(expandedForm(9000000));

/*

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

function expandedForm(num) {
  return String(num)
          .split("")
          .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
          .filter((num) => Number(num) != 0)
          .join(" + ")
}

var expandedForm = (num) => {
  var arr = num.toString().split('').reverse();
  var result = [];
  for(var i = 0; i < arr.length; i++){
    arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
  }
  return result.reverse().join(' + ')
}

function expandedForm(num) {
  let zeros = '';
  
  return `${num}`
    .split('')
    .reduceRight((s, d) => {
      +d && s.push(d + zeros);
      zeros += 0;
      return s;
    }, [])
    .reverse()
    .join(' + ');
}

const expandedForm = num => (''+num)
                            .split``
                            .map((e,i,arr)=> e != 0 ? e + '0'.repeat(arr.length-i-1) : '')
                            .filter(e=>e)
                            .join` + ` ;

expandedForm = n => [...String(n)].reverse().map((x,i) => x == '0' ? '' : x + '0'.repeat(i)).filter(x => x != '').reverse().join(' + ');

function expandedForm(num) {
  return num.toString().split('')
  .map( el => parseInt(el))
  .map( 
  (el, index, array) =>  el * Math.pow(10, array.length - index - 1))
  .filter( el => (el !== 0) )
  .join(' + ');
}
*/
