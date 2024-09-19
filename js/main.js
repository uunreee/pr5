'use strict';

// №1

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);

// №2

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

// // №3

let calculator = {
    read() {
        this.a = +prompt('Первое число:', 0);
        this.b = +prompt('Второе число:', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


// // №4

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));

// №5

let vasya = { name: "Вася", age: 20 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 40 };

let users = [vasya, petya, masha];

let names = users.map(user => user.name);

console.log(names);

// // №6

let pasha = { name: "Паша", age: 20 };
let karina = { name: "Элина", age: 30 };
let irina = { name: "Полина", age: 40 };

let users1 = [pasha, karina, masha];

function getAverageAge(users) {
  let totalAge = users1.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users1.length;
}

console.log(getAverageAge(users1));