//  https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript

function tickets(bills) {
    let register = {
        25: 0,
        50: 0,
        100: 0
    };
    let changeDue;
    for (let i = 0; i < bills[i]; i++) {
        let currentBill = bills[i];
        changeDue = currentBill - 25;
        register[currentBill] += 1;

        while (changeDue > 0) {
            if (register[25] < 1) {
                return 'NO';
            } else {
                if (changeDue === 75 && register[50] > 0) {
                    register[50]--;
                    changeDue += -50;
                }
                if (changeDue >= 25) {
                    register[25]--;
                    changeDue += -25;
                }
            }
            
        }
    }
    return 'YES';
}

console.log(tickets([25, 25, 50, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25, 50, 25, 50]));
console.log(tickets([25, 50, 25, 100, 25, 50, 25, 100, 25, 50, 25, 100, 100, 100]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 25, 100]));
console.log(tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 50, 25, 100, 25, 50, 25, 100]));