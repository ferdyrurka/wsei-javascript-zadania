// 1

const randomName = () => {
    console.log("Udało się!");

}

randomName();

// 2

const randomArg = (arg) => {
    console.log(arg);

}

randomArg('test');

// 3

const returnArray = (param) =>{
    return param;
}
returnArray([1,2,3]);

// 4

const printString = (str) => {
    let c = 0;
    let time = setInterval(() => {
        console.log(str);
        if (++c >= 5) {
            clearInterval(time);
            console.log('Koniec');
        }
    }, 3000)
}

printString('string');
