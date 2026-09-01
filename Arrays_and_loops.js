// Aufgabenstellung 1: includes
// Implementiere eine Funktion namens containsElement(array, element), die true zurückgibt, wenn element im array enthalten ist, andernfalls false.

// Test:

// console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Ben')); // true
// console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Daniel')); // false

let myList = [12, "Banana", 1];

let fruits = ["Banana", "Orange", "Apple", "Mango"];


function containsElement(array, element) {
    return fruits.includes("Banana",0)
}

function initArrays() {
    console.log(containsElement());
}



//===================================================

// Aufgabenstellung 2: indexOf
// Implementiere eine Funktion namens findElementIndex(array, element), die den Index des ersten Vorkommens von element im array zurückgibt oder -1, wenn es nicht gefunden wird.

// Test:

// console.log(findElementIndex([10, 20, 30, 40], 30)); // 2

// console.log(findElementIndex([10, 20, 30, 40], 50)); // -1


let NumberList =[10, 20, 30, 40];

function findElementIndex(array, element){

    return NumberList.indexOf(element);

}

function initArrays(){
    console.log(findElementIndex(NumberList,30));
    console.log(findElementIndex(NumberList,50));
}


//=========================================================================================================


// Aufgabenstellung 3: shift
// Implementiere eine Funktion namens removeFirstElement(array), die das erste Element aus dem array entfernt und das neue Array zurückgibt.

// Test:

// console.log(([10, 20, 30, 40])); // [20, 30, 40]

// console.log(removeFirstElement(['a', 'b', 'c', 'd'])); // ['b', 'c', 'd']


let Num_array= [10, 20, 30, 40];
let Alpha_array = ['a', 'b', 'c', 'd'];
let final_array;
function removeFirstElement( array){
    
    final_array= array.shift();
    return array;
}

function initArrays(){
    console.log(removeFirstElement(Num_array));
    console.log(removeFirstElement(Alpha_array));
   
}

//=============================================================================================

// Aufgabenstellung 4: unshift
// Implementiere eine Funktion namens addElementToStart(array, element), die das element am Anfang des array hinzufügt und das neue Array zurückgibt.

// Test:

// console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]

// console.log(addElementToStart(['b', 'c', 'd'], 'a')); // ['a', 'b', 'c', 'd']


let Numbers_array = [2, 3, 4];
let Alpha_array1 = ['b', 'c', 'd'];

function addElementToStart(array, element){

    array.unshift(element);
    return array;
}

function initArrays(){
    console.log(addElementToStart(Numbers_array, 1));
    console.log(addElementToStart(Alpha_array1, 'a'));
}
