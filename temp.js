//alert("JS FILE LOADED");


// Aufgabenstellung 1: includes
// Implementiere eine Funktion namens containsElement(array, element), die true zurückgibt, wenn element im array enthalten ist, andernfalls false.

// Test:

// console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Ben')); // true
// console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Daniel')); // false

let myList = [12, "Banana", 1];

let fruits = ["Banana", "Orange", "Apple", "Mango"];


function containsElement(array, element) {
    return fruits.includes("Banana", 0)
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


let NumberList = [10, 20, 30, 40];

function findElementIndex(array, element) {

    return NumberList.indexOf(element);

}

function initArrays() {
    console.log(findElementIndex(NumberList, 30));
    console.log(findElementIndex(NumberList, 50));
}


//=========================================================================================================


// Aufgabenstellung 3: shift
// Implementiere eine Funktion namens removeFirstElement(array), die das erste Element aus dem array entfernt und das neue Array zurückgibt.

// Test:

// console.log(([10, 20, 30, 40])); // [20, 30, 40]

// console.log(removeFirstElement(['a', 'b', 'c', 'd'])); // ['b', 'c', 'd']


let Num_array = [10, 20, 30, 40];
let Alpha_array = ['a', 'b', 'c', 'd'];
let final_array;
function removeFirstElement(array) {

    final_array = array.shift();
    return array;
}

function initArrays() {
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

function addElementToStart(array, element) {

    array.unshift(element);
    return array;
}

function initArrays() {
    console.log(addElementToStart(Numbers_array, 1));
    console.log(addElementToStart(Alpha_array1, 'a'));
}


//=================================================================

// Aufgabenstellung 5: slice
// Implementiere eine Funktion namens getSubArray(array, start, end), die ein neues Array zurückgibt, das die Elemente von start bis end (nicht eingeschlossen) enthält.

// Test:

// console.log(getSubArray([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]

// console.log(getSubArray(['a', 'b', 'c', 'd', 'e'], 0, 3)); // ['a', 'b', 'c']


let Slice_num_Array = [1, 2, 3, 4, 5];
let Slice_Alpha_Array = ['a', 'b', 'c', 'd', 'e'];


function getSubArray(array, start, end) {
    return array.slice(start, end);

}

function initArrays() {

    console.log(getSubArray(Slice_num_Array, 1, 4));
    console.log(getSubArray(Slice_Alpha_Array, 0, 3));
}


//=====================================================================================================

// Aufgabenstellung 6: join
// Implementiere eine Funktion namens joinArray(array, separator), die eine Zeichenkette zurückgibt, die aus den Elementen des array besteht, getrennt durch den separator.

// Test:

// console.log(joinArray(['apple', 'banana', 'cherry'], ', ')); // "apple, banana, cherry"

// console.log(joinArray([1, 2, 3, 4], ' - ')); // "1 - 2 - 3 - 4"


let JoinFruit_Array = ['apple', 'banana', 'cherry'];
let JoinNum_Array = [1, 2, 3, 4];
let The_JoinArray;
function joinArray(array, separator) {

    The_JoinArray = array.join(separator);
    return The_JoinArray;
}


function initArrays() {
    console.log(joinArray(JoinFruit_Array, ','));
    console.log(joinArray(JoinNum_Array, '-'));
}


function initArrays() {

    for (let indexFruits = 0; indexFruits < 6; indexFruits += 2) {
        console.log(indexFruits);
    }


}

function initArrays() {
    for (let indexFruits = 5; indexFruits >= 0; indexFruits--) {
        console.log(indexFruits);
    }
}

//

function initArrays() {

    let contentRef = document.getElementById('my_content');
    for (let indexFruits = 5; indexFruits < 7; indexFruits++) {

        contentRef.innerHTML += "asd";
        console.log(indexFruits);
    }
}


//===============================================================================================
let singletestVar = "asd";

function containsElement(array, element) {
    return array.includes(element);
}

function initArrays() {
    let contentRef = document.getElementById('my_content');
    contentRef.innerHTML = "";

    for (let indexFruits = 0; indexFruits < fruits.length; indexFruits++) {
        contentRef.innerHTML += `<p> ${fruits[indexFruits]}</p>`;
    }
}

//=========================================================================================


function sumArray(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum = sum + array[index];
    }
    return sum;
}


console.log(sumArray([3,7,1,4]));


