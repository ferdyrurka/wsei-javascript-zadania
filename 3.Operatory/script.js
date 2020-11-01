// 1

const a = true;
const b = false;

console.log(a === b);

// 2

const numOne = 10;
const numTwo = 3;

let moduloResult = 0;
moduloResult = numOne % numTwo;
console.log(moduloResult); //1

// 3

let stringsResult = '',
    stringA = 'test',
    stringB = ' foo';

stringsResult = stringA + stringB;
console.log(stringsResult);

// 4

var someNumber = 425;
var someString = "425";

console.log(someNumber == someString);
console.log(someNumber === someString);

// 5

let counter = 30;

console.log(counter); //30

counter++;
console.log(counter); // 31

counter--;
console.log(counter); // 29

// 6

let aNumber = 1,
    bNumber = 2,
    result = null;

result = aNumber > bNumber;

console.log(result);
