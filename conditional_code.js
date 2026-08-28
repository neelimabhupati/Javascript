let myCondition = true;

myCondition = !myCondition // not operator

myCondition = false || true;  // - true-  or Operator

myCondition = true && false; // - flase -and operator


myCondition = 45 == "45"; // == testet ob exact gleich, ohne Type -> True
myCondition = 45 === "45"; // === testet ob exact gleich, mit Type -> False

myCondition = 45 < 123; // größer abfrage

myCondition = 45 != 47; // größergleich abfrage
myCondition = 45 !== "45"; // == testet ob exakt gleich , mit Type - flase
myCondition = 45 !== 47; // == testet ob exakt gleich , mit Type


let myIfCondition = false;
let myIfSecondIfCondition = true;

if(myIfCondition || myIfSecondIfCondition){
    console.log("hello world! if teil");
}else {
    console.log("hello world! else teil");
}


