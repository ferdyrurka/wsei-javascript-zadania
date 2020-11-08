//1
let n1 = 15,
    n2 = 6;

if(n1 > n2){
    console.log(n1);
} else {

    console.log(n2);
}

n1 > n2 ? console.log(n1) : console.log(n2);

//2

let n3 = 2,
    n4 = 4,
    n5= 5;

if(n3 > n4 && n3 > n5){
    console.log(n3 + ' jest największe');
}else if (n4 > n3 && n4 > n5) {
    console.log(n4 + 'jest najwieksze');
} else {
    console.log( n5+ 'jest')
}

//3

for (let i=0; i<10; i++) {
    console.log("I like JS");
}

//4

let result = 0;

for(let i = 0; i<=10; i++){
    result += i;
}

console.log(result);

//5

let n = 5;

for(let i = 0; i < n; i++){
    if (i % 2 === 0){
        console.log(i + " parzysta");
    }else{
        console.log(i + " nieparzysta");
    }
}

//6

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        console.log("i= " + i + ", j= " + j);
    }
}

//7

for(let i = 0; i < 100; i++){
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}

// 8

// a

let star = 5;

for(let i = 1; i <= star; i++){
    console.log("*".repeat(i));
}

let resultStar = '';

for(let i = 1; i <= star; i++){
    for(let j = 0; j < i; j++){
        resultStar += "*";
    }
    
    console.log(resultStar);
    resultStar = ""
}

// b

const starSignature = '*';

for (let i = 0; i < 5; i++) {
    let result = '';

    for (let x = 0; x < 5 - i; x++) {
        result += ' ';
    }

    for (let y = 0; y < i + 1; y++) {
        result += ' ' + starSignature;
    }

    console.log(result);
}

// c

for (let i = 0; i < 5; i++) {
    let result = '';

    for (let x = 0; x < 5 - i; x++) {
        result += ' ';
    }

    for (let y = 0; y < (2 * i + 1); y++) {
        result += starSignature;
    }

    console.log(result);
}

// d

for (let i = 0; i < 5; i++) {
    let result = '';

    for (let x = 0; x < i + 1; x++) {
        result += starSignature;
    }

    for (let y = 0; y < 5 - (i + 1); y++) {
        result += (y + 1);
    }

    console.log(result);
}

console.log('-----');

for (let i = 0; i < 5; i++) {
    let result = '';

    for (let x = 0; x < (5 - i); x++) {
        result += starSignature;
    }

    for (let y = 0; y < 5 - (5 - i); y++) {
        result += 5 - ((5 - (5 - i)) - y);
    }

    console.log(result);
}

// e

for (let i = 0; i < 5; i++) {
    let result = '';

    for (let x = 0; x < 5 - i; x++) {
        result += ' ';
    }

    for (let y = 0; y < i + 1; y++) {
        result += ' ' + starSignature;
    }

    console.log(result);
}

for (let i = 0; i < 3; i++) {
    let result = '';

    for (let x = 0; x < 5; x++) {
        result += ' ';
    }

    console.log(result + ' ' + starSignature);
}
