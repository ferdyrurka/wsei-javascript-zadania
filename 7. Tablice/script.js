// 1

const tab = ["example", "foo", "bar", 1, 2];
console.log(tab[0]);
console.log(tab[1]);
console.log(tab[2]);

// 2

console.log( tab[0] );
console.log( tab[1] );

console.log(tab[tab.length - 1]);

for(let i=0;i<tab.length;i++)
{
    console.log(tab[i]);
}
for(let i=0;i<tab.length;i+=2)
{
    console.log(tab[i]);
}

tab.forEach(el => {
    if(typeof(el) === 'string'){
        console.log(el);
    }
});

tab.forEach(el => {
    if(typeof(el) === 'number'){
        console.log(el);
    }
});


// 3

const numberArray = [1, 2, 3, 4, 10];

const sum = numberArray.reduce((acc, number) => (acc + number));
console.log(sum)

const dif = numberArray.reduce((acc, number) => (acc - number));
console.log(dif)

console.log(sum / numberArray.length);

numberArray.forEach((value) => {
    if (value % 2 === 0) {
        console.log(value);
    }
})

numberArray.forEach((value) => {
    if (value % 2 !== 0) {
        console.log(value);
    }
})

console.log(Math.max(numberArray));

console.log(Math.min(numberArray));

for (const value of numberArray.reverse()) {
    console.log(value);
}

// 4

const sumArray = arr => arr.reduce((a,b)=>a+b);
console.log(sumArray([1, 3, 5, 7, 9]));

// 5

const calcArray = (arr) => {
    const avg = arr.reduce((acc, number) => (acc + number)) / arr.length;

    arr.map(value => console.log(value * avg))
};

calcArray([1, 3, 5, 7, 9]);

// 6

const sumEven = (arr) => {
    const evenArray = [];

    arr.forEach((value) => {
        if (value % 2 === 0) {
            evenArray.push(value);
        }
    })

    return evenArray.reduce((acc, number) => (acc + number)) / arr.length;
}

console.log(sumEven([1, 2, 3, 4, 6, 8, 9]));

// 7

const toSortArray = [9, 2, 5, 7, 4];

toSortArray.sort().map(value => console.log(value));

// 8


