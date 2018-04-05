/**
 *  https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
 */

function sumDigPow(a, b) {
    let arr = [];
    for (; a <= b; a++) {
        let digits = [];
        let num = a;
        while (num > 0) {
            digits.unshift(num % 10);
            num = parseInt(num / 10);
        }

        let sum = digits.reduce(
            (sum, digit, indx) => (sum += Math.pow(digit, indx + 1))
        );

        if (sum === a) {
            arr.push(a);
        }
    }
    return arr;
}

console.log(sumDigPow(1, 100));



//Other Solutions
/*
function filterFunc(n) {
  return `${n}`.split("").map((x, i) => x ** (i+1)).reduce((a, b) => a+b) == n;
}

function *range(a, b) {
  for (var i = a; i <= b; ++i) yield i;
}

function sumDigPow(a, b) {
  return Array.from(range(a, b)).filter(filterFunc);
}
*/

/*
const EUREKAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89,135, 175, 518, 598, 1306, 1676, 2427, 2646798];

const sumDigPow = (a, b) => EUREKAS.filter( (n) => a <= n && n <= b );
*/

/*
function sumDigPow(a, b) {
  var ans = [];
  while(a <= b){
    if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
      ans.push(a);
    a++;
  }
  return ans;
}
*/

/*
function sumDigPow(a, b) {
  let result = [];
  
  for (let i = a; i <=b; i++) {
    if ( i === i.toString().split('')
      .map((item,index) => {return Math.pow((+item), (index + 1))})
      .reduce((a,b) => {return a + b})) {
        result.push(i);
      }
  };
  
  return result;
}
*/

/*
function isEureka(n) {
  const nArr = n.toString().split('').map(x => parseInt(x));
  const compN = nArr.reduce((prev, curr, i) => {
    curr = i === 0 ? Math.pow(curr, i+2) : Math.pow(curr, i+1);
    return prev + curr;
  });
  return n === compN;
}

function sumDigPow(a, b) {
  const arr = [];
  
  for (let i = a; i <= b; i++) {
    if (isEureka(i)) {
      arr.push(i);
    }
  }
  
  return arr;
}
*/