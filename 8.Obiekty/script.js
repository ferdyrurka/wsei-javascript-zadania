// 1

const flat = {
    id: "1_B",
    name: "Apartament 1_B",
    building: "A1",
    status: "free",
    changeName: function (name) {
        this.name = name;
    }
}

console.log(flat.id);
console.log(flat.name);
console.log(flat.building);
console.log(flat.status);

// 2

flat.changeName("Mieszkanie 1_B");
console.log(flat.name);


// 3

const numbers = {
    sum: 0,
    sumNumbersInArray: function (array) {
        this.sum = array.reduce((acc, number) => (acc + number));
    }
}

numbers.sumNumbersInArray([1, 1, 2, 3, 10])

console.log(numbers.sum);


// 4

const car = {
    producer: "Audi",
    model: "A4",
    version: "B8",
    age: 8,
    client: {
        name: "Jarosław Kowalski",
        age: 21,
    }
}

for (const key in car) {
    console.log(key + ':' + car[key]);
}

// 5

console.log(car.client.name);
console.log(car.client.age);

// 6

car.type = "Sedan";
car.soundOnEngineStart = function () {
    return "Hello";
}

console.log(car.type);
console.log(car.soundOnEngineStart());