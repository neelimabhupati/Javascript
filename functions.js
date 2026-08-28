


console.log(logCalculatePrice(50,300));


function logCalculatePrice(discount, price){
    let value= (price - discount - discount)* 1.19;

    console.log("vor return");
    return value;

    console.log("nach return");
}


