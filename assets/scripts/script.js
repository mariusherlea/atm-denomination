let sumToDenominate=185;
let billsValues = [100, 50, 20, 10, 5];

let restAfterDenomination = [];
let billsNumber = [];



function denomination(sum, billsValues) {



    printInitialValue( sumToDenominate, billsValues);

    initializeArray( sumToDenominate, billsValues);


    for (let i = 1; i <= billsValues.length; i++) {

        if (restAfterDenomination[i - 1] > 0 || restAfterDenomination < billsNumber[i]) {

            billsNumber.push(Math.floor(restAfterDenomination[i - 1] / billsValues[i]));

            console.log(`bill's number of `, billsValues[i], "=>", billsNumber[i]);

            restAfterDenomination.push(restAfterDenomination[i - 1] - (billsNumber[i] * billsValues[i]));

            // console.log('restul dupa impartirea la', valoareaBancnotelor[i], '=>', restAfterDenomination[i]);

        } else {
            console.log(`rest is less than smallest bill or equal to 0`)
            break;
        }
    }


}

function printInitialValue(amount, billsValue) {
    console.log("Denomination sumToDenominate: ", amount);

    console.log("____________");
    for (const logEntry of billsValue) {
        console.log(logEntry);
    }
    console.log("__________");
}

function initializeArray(amount, billsValues) {


    billsNumber.push(Math.floor(amount / billsValues[0]));

    console.log(`bill's number of`, billsValues[0], "=>", billsNumber[0]);

    restAfterDenomination.push(amount - (billsNumber[0] * billsValues[0]));

// console.log('restul dupa impartirea la',valoareaBancnotelor[0],'=>',restAfterDenomination[0]);
}

denomination(sumToDenominate,billsValues);



 /*   let parsed = "";
    for (let i = 0; i< billsNumber.length; i++) {
        let myObj=  billsNumber[i];
        for (let property in myObj) {
            parsed += property + ": " + myObj[property] + '\n';
        }
    }*/





$(document).ready(function(){
    $("#btn-add").click(function(){
        $("p").append(` <b>sum to denominate: ${sumToDenominate}</b>`);
 $("table").append(`<tr><th>${billsValues[0]}</th><th>${billsValues[1]}</th><th>${billsValues[2]}</th><th>${billsValues[3]}</th><th>${billsValues[4]}</th></tr>
 <tr><td>${billsNumber[0]}</td><td>${billsNumber[1]}</td><td>${billsNumber[2]}</td><td>${billsNumber[3]}</td><td>${billsNumber[4]}</td></tr>
`);
        // $("#display").val(billsNumber);
    });
});