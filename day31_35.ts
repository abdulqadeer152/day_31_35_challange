//// Day 31

import { log } from "console";

/// Question # 91

let fav_fruit: string[]= ['apple', 'mango', 'banana']

fav_fruit.push('watermelon');

console.log(fav_fruit);


//// Question # 92

function removeelement(element:string[]){
    return element.pop();
}

const remo_ele=['jug', 'mug', 'cup'];

console.log(removeelement(remo_ele));

console.log(remo_ele);


/// Question # 93

function replaceBananaWithMango (fruits:string[]){
    const index =fruits.indexOf("banana");
    if(index !== -1) fruits[index] = "mango";
}

const fruits= ['apple', "banana", 'cherry'];

console.log(replaceBananaWithMango(fruits));
console.log(fruits);

/// Day 32

//// Question 94

const language: string[]= ['hallow', 'world', 'typesccript', 'javascript'];

const lenghts :number [] = language.map(word => word.length);

console.log(lenghts);


/// Question # 95

function greateravalue(numbersz:number[]) {
    return numbersz.filter(number => number> 10)
}
const numbersz: number[]= [2,5,8,64,24,1,140,]

console.log(greateravalue(numbersz));


/// Question # 96

// This function calculates the sum of all numbers in an array
function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

const numbers: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers)); // Outputs: 15


/// Day 33

/// Question # 97

// This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0'); // Ensures the day is two digits
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Adds 1 because months are 0-indexed
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}

console.log(getCurrentDateFormatted()); // Outputs the current date in DD-MM-YYYY format



/// Question # 98


// Calculates how many days are left until New Year's Day
function daysUntilNewYear(): number {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
    const diff = newYear.getTime() - today.getTime(); // Difference in milliseconds
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days
    return days;
}

console.log(daysUntilNewYear() + " days until New Year.");


/// Question # 99

 
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month: number, day: number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); // Months are 0-indexed
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}

// Replace with your birth month and day
const nextBirthday = getNextBirthday(12, 25); // Example: December 25th
console.log("Next birthday on:", nextBirthday.toLocaleDateString());



// day 34
//// Question # 100

// Finds the square root of 144 using Math.sqrt()
let squareroot : number = Math.sqrt(144);

console.log(squareroot);


/// Question # 101

// Generates a random integer between 1 and 10
function getrandomintg() {
    return Math.floor(Math.random()*10)+1
}

console.log(getrandomintg());

/// Question  # 102

const differences:number = Math.abs(-5 - 5);

console.log(differences);


//// Day  35

/// Question # 103

function getrandomboolen(): boolean{
    return Math.random() > 0.5;
}
console.log(getrandomboolen());


/// Question # 104

// This function generates a random hexadecimal color code
function getRandomHexColor(): string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color; // Returns the random color code
}

console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.


/// Question # 105

// This function simulates rolling a dice and returns a number between 1 and 6
function reDill(){
    return Math.floor(Math.random()* 5)+ 1
}
console.log(reDill());
