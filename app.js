

let amount = 136;

let billsValues = [100, 50, 20, 10, 5, 1];

let billsNumber = [];

let rest=[];

console.log('Denomination amount: ',amount);
console.log('____________');
for (const logEntry of billsValues) {
    console.log(logEntry);
}
console.log('__________');

billsNumber.push(Math.floor(amount / billsValues[0]));

console.log(`bill's number`,billsValues[0],'=>',billsNumber[0]);

rest.push(amount-(billsNumber[0]*billsValues[0]));

// console.log('restul dupa impartirea la',valoareaBancnotelor[0],'=>',rest[0]);



for (let i=1;i<=billsValues.length;i++) {

    if (rest[i - 1] > 0 || rest<billsNumber[i]) {

        billsNumber.push(Math.floor(rest[i - 1] / billsValues[i]));

        console.log(`bill's number`, billsValues[i], '=>', billsNumber[i]);

        rest.push(rest[i - 1] - (billsNumber[i] * billsValues[i]));

        // console.log('restul dupa impartirea la', valoareaBancnotelor[i], '=>', rest[i]);

    } else break;
}






