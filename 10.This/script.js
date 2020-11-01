// 1

function Person(name, surname, age, country, city) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.favouriteDishes = [];

    this.showDetails = function () {
        console.log(`name: ${this.name} ${this.surname} age: ${this.age} country: ${this.country}, ${this.city}`);
    }

    this.addOneYear = function () {
        ++this.age;
    }
}

const person = new Person('Adam', 'Kowalski', 21, 'Poland', 'Cracow', 'pl');
const person2 = new Person('Jan', 'Nowak', 33, 'Poland', 'Cracow', 'pl');

person.showDetails();
person.addOneYear();

person.showDetails();

person.addOneYear();
person.addOneYear();
person.addOneYear();
person.showDetails();

person2.showDetails();
person2.addOneYear();

person2.showDetails();

person2.addOneYear();
person2.addOneYear();
person2.addOneYear();
person2.showDetails();

// 2

Person.prototype.addNewFavouriteDishes = function (name) {
    this.favouriteDishes.push(name);
}

Person.prototype.showFavouriteDishes = function () {
    console.log("Favourite dishes is: " + this.favouriteDishes.join(', '))
}

person.showFavouriteDishes();
person.addNewFavouriteDishes('Tortilla');
person.addNewFavouriteDishes('Kebab');
person.showFavouriteDishes();

person2.addNewFavouriteDishes('Pizza');

// 3

function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;

    this.sum = function () {
        return (this.num1 + this.num2);
    }
    this.subtraction = function () {
        return (this.num1 - this.num2);
    }
    this.multiplication = function () {
        return (this.num1 * this.num2);
    }
    this.division = function () {
        if (!num2)
            throw new Error("Cannot divide by zero");

        return this.num1 / this.num2;
    }
}

const calc1 = new Calculator(2, 3);
const calc2 = new Calculator(2, 2);
const calc3 = new Calculator(3, 0);

console.log(calc1.sum());
console.log(calc1.subtraction());

console.log(calc2.multiplication());
console.log(calc2.division());

console.log(calc3.division());

// 4

function Ladder(maxSteps, dangerousJumpStep) {
    this.maxSteps = maxSteps;
    this.dangerousJumpStep = dangerousJumpStep;
    this. currentStep = 0;

    this.goUp = function () {
        ++this.currentStep;

        if (this.currentStep >= this.maxSteps) {
            this.currentStep = this.maxSteps;
            console.log('you are at the end of the ladder');

            return;
        }

        console.log('to the top of the ladder was left ' + (this.maxSteps - this.currentStep));
    };

    this.goDown = function () {
        --this.currentStep;

        if (this.currentStep <= 0) {
            this.currentStep = 0;
            console.log('you are on the ground');

            return;
        }

        console.log('left to the ground ' + (this.maxSteps - (this.maxSteps - this.currentStep)));
    };

    this.jumpToTheGround = function () {
        if (this.currentStep > this.dangerousJumpStep) {
            console.log('and you broke something');
        } else {
            console.log('Good jump');
        }

        this.currentStep = 0;
    };
}

const ladder = new Ladder(5, 2);
//up
ladder.goUp();
ladder.goUp();
ladder.goUp();
ladder.goUp();
ladder.goUp();
ladder.goUp();

//down
ladder.goDown();
ladder.goDown();
ladder.goDown();
ladder.goDown();
ladder.goDown();

//up and down

ladder.goUp();
ladder.goUp();
ladder.goDown();
ladder.goUp();
ladder.goDown();
ladder.goDown();

//jump dangerous

ladder.goUp();
ladder.goUp();
ladder.goUp();
ladder.jumpToTheGround();

// jump ok

ladder.goUp();
ladder.goUp();
ladder.jumpToTheGround();

