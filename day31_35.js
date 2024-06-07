"use strict";
//// Day 31
Object.defineProperty(exports, "__esModule", { value: true });
/// Question # 91
let fav_fruit = ['apple', 'mango', 'banana'];
fav_fruit.push('watermelon');
console.log(fav_fruit);
//// Question # 92
function removeelement(element) {
    return element.pop();
}
const remo_ele = ['jug', 'mug', 'cup'];
console.log(removeelement(remo_ele));
console.log(remo_ele);
/// Question # 93
function replaceBananaWithMango(fruits) {
    const index = fruits.indexOf("banana");
    if (index !== -1)
        fruits[index] = "mango";
}
const fruits = ['apple', "banana", 'cherry'];
console.log(replaceBananaWithMango(fruits));
console.log(fruits);
/// Day 32
//// Question 94
const language = ['hallow', 'world', 'typesccript', 'javascript'];
const lenghts = language.map(word => word.length);
console.log(lenghts);
/// Question # 95
function greateravalue(numbersz) {
    return numbersz.filter(number => number > 10);
}
const numbersz = [2, 5, 8, 64, 24, 1, 140,];
console.log(greateravalue(numbersz));
/// Question # 96
// This function calculates the sum of all numbers in an array
function calculateSum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers)); // Outputs: 15
/// Day 33
/// Question # 97
// This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0'); // Ensures the day is two digits
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Adds 1 because months are 0-indexed
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted()); // Outputs the current date in DD-MM-YYYY format
// Shows today's date, neatly formatted.
