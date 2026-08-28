

// let myDivision =10/5;
// let myMulti = 10*5;

// let myPow = 2**7;

//  //Strings

//  let myConcat = "hello" + "world";
//  //combination strings and numbers

//  let myCombination = 5.0 - 4.2;


// let myTestString = "hello   ";

// myTestString = myTestString.trim();

// console.log(myTestString.length);

// Task 1
// Create a function called "fullName" that takes two strings as parameters, concatenates them into a single string, and returns that string.

// Example: // Output: Max Mustermann console.log(fullName('Max','Mustermann'));

function fullname (firstname, lastname)
{
    let singlestring = firstname + '  '+ lastname;
    return singlestring;
}
console.log(fullname('santhosh', 'Dhanvika_kilari'));


// Task 2
// Create a function called "capitalizeLetters" that takes a string as a parameter, capitalizes each letter in it, and then returns it.

// Example: // Output: BANANA console.log(capitalizeLetters('bAnanE'));


function capitalizeLetters(text){
    let result = text.toUpperCase();
    return result;
}

console.log(capitalizeLetters('bAnanE'));

// Task 3
// Create a function called "countCharacters" that takes a string as a parameter and returns the number of characters in that string.

// Example: // Output: 6 console.log(countCharacters('banana'));


function countCharacters(input)
{
    return input.length;

}
console.log(countCharacters('Neelima'));


// Tricky task
// Create a function called "formatToCurrency" that takes a decimal number as a parameter and returns it as a currency value in the format 0.00€. Use the toFixed() method to ensure two decimal places and replace the decimal point with a comma.

// Example: // Output: "€0.50" console.log(formatToCurrency(0.5));

function formatToCurrency(input){

    let Format = input.toFixed(2).replace('.',',');
    return Format +'€';
}

console.log(formatToCurrency(0.50));
console.log(formatToCurrency(33.88857));


