//1st
function displayMailingLabel(name,address,city,state,zip){
    console.log(name);
    console.log(address);
    console.log(city + "," + state + " " + zip); // + concatenate - chained together
   // console.log(`${city}, ${state} ${zip}`); //back-tic template strings and ${expression}
}
displayMailingLabel("Trevor","1420 West MCdermott Dr.", "Allen", "TX", "750153");

//2nd
function addNumbers(num1, num2){
    return num1 + num2;
}

r1 = addNumbers(6,7)
r2 = addNumbers(11,22)
console.log(r1,r2)

//3rd

function displayReceipt(totalDue, amountPaid){
        const changeAmount = amountPaid - totalDue;
        console.log(`
        Total Due: $${totalDue}
        Amount Paid: $${amountPaid}
        Change Due: $${changeAmount}
    `);
}
displayReceipt(5.00, 20.00) //expect 15.00 change
displayReceipt(60.00, 100.00)
displayReceipt(25, 50.00)