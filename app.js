let amount = 245;
let billsValues = [100, 50, 20, 10, 5];

let rest = [];
let billsNumber = [];

function denomination(sum, billsValues) {

    printInitialValue(sum,billsValues);

    initializeArray(sum,billsValues);

// console.log('restul dupa impartirea la',valoareaBancnotelor[0],'=>',rest[0]);


    for (let i = 1; i <= billsValues.length; i++) {

        if (rest[i - 1] > 0 || rest < billsNumber[i]) {

            billsNumber.push(Math.floor(rest[i - 1] / billsValues[i]));

            console.log(`bill's number of `, billsValues[i], "=>", billsNumber[i]);

            rest.push(rest[i - 1] - (billsNumber[i] * billsValues[i]));

            // console.log('restul dupa impartirea la', valoareaBancnotelor[i], '=>', rest[i]);

        } else {
            console.log(`rest is less than smallest bill or equal to 0`)
            break;
        }
    }


}

function printInitialValue(amount,billsValue){
    console.log("Denomination amount: ", amount);

    console.log("____________");
    for (const logEntry of billsValue) {
        console.log(logEntry);
    }
    console.log("__________");
}

function initializeArray(amount, billsValues){


    billsNumber.push(Math.floor(amount / billsValues[0]));


    console.log(`bill's number of`, billsValues[0], "=>", billsNumber[0]);

    rest.push(amount - (billsNumber[0] * billsValues[0]));


}
denomination(amount, billsValues);


