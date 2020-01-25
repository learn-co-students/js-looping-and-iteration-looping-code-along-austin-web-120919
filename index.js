function writeCards(people,event){
    let newArray = [];
    for(let i = 0; i < people.length; i++){
        newArray.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
    };
    return newArray
};


function countDown(number){
    while (number >= 0) {
        console.log(number);
        number --;
    };
};