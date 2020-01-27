// Code your solutions in this file
function writeCards(names, event){
    let thankYou = [];
    for (let counter = 0; counter < names.length; counter++){
        thankYou.push(`Thank you, ${names[counter]}, for the wonderful ${event} gift!`);
    }
    return thankYou;
}

function countDown(startingNumber){
    while (startingNumber >= 0){
        console.log(startingNumber);
        startingNumber --;
    }
}