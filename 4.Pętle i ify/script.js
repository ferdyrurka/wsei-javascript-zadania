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

//8

//a

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

//TODO

// c

//TODO

// d

//TODO

// e

//TODO
