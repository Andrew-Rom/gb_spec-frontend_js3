"use strict";

// // ===== Задание 1 =====
// // Напишите функцию getPrototypeChain(obj), которая будет
// // возвращать цепочку прототипов для заданного объекта
// // obj. Функция должна вернуть массив прототипов, начиная
// // от самого объекта и заканчивая глобальным объектом
// // Object.prototype.

// function getPrototypeChain(obj) {
//   const prototypeArr = [obj];
//   let currentObj = obj;
//   while (Object.getPrototypeOf(currentObj) != null) {
//     currentObj = Object.getPrototypeOf(currentObj);
//     prototypeArr.push(currentObj);
//   }
//   return prototypeArr;
// };

// const myObject1 = {value1: "Object1"};
// const myObject2 = {value2: "Object2", __proto__: myObject1};
// const myObject3 = {value3: "Object3", __proto__: myObject2};

// console.log(getPrototypeChain(myObject3));


// // ===== Задание 2 =====
// // Создайте класс Animal, который будет представлять животное. У
// // класса Animal должны быть следующие свойства и методы:
// // ● Свойство name (строка) - имя животного.
// // ● Метод speak() - выводит в консоль звук, издаваемый животным.
// // Создайте подкласс Dog, который наследует класс Animal. Для
// // подкласса Dog добавьте дополнительное свойство и метод:
// // ● Свойство breed (строка) - порода собаки.
// // ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// // принесла мяч.".

// class Animal {
//   name;

//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`Animal ${this.name} makes noise`);
//   }
// }

// class Dog extends Animal {
//   breed;

//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   fetch() {
//     console.log(`Dog-${this.breed} ${this.name} brank a ball.`);
//   }
// }

// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.


// // ===== Задание 3 =====
// // Создать класс "Калькулятор" с приватными полями "последний результат" и "текущее значение".
// // Класс должен иметь публичные методы "сложить", "вычесть", "умножить" и "разделить", которые будут изменять значение текущего значения в соответствии с выбранной операцией.
// // Также класс должен иметь статическое поле "точность", которое будет задавать количество знаков после запятой при выводе результата.

// class Calculator {
//   #finalResult = 0;
//   #currentValue = 0;
//   static decimalValue = 2;

//   add(num) {
//     this.#finalResult = this.#currentValue;
//     this.#currentValue += num;
//   }

//   subtract(num) {
//     this.#finalResult = this.#currentValue;
//     this.#currentValue -= num;
//   }

//   multiply(num) {
//     this.#finalResult = this.#currentValue;
//     this.#currentValue *= num;
//   }

//   divide(num) {
//     if (num === 0) {
//       throw new Error("Divide by zero");
//     } else {
//       this.#finalResult = this.#currentValue;
//       this.#currentValue /= num;
//     }
//   }

//   #round(num) {
//     return num.toFixed(Calculator.decimalValue);
//   }

//   getfinalResult() {
//     return this.#round(this.#currentValue);
//   }
// }

// const calc = new Calculator();
// console.log(calc.getfinalResult());
// calc.add(5);
// console.log(calc.getfinalResult());
// calc.add(2);
// console.log(calc.getfinalResult());
// calc.subtract(1);
// console.log(calc.getfinalResult());
// calc.multiply(2);
// console.log(calc.getfinalResult());
// calc.divide(4);
// console.log(calc.getfinalResult());
// calc.divide(9);
// console.log(calc.getfinalResult());
// calc.divide(0);


// // ===== Задание 4 =====
// // Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта". 
// // Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту", которые будут изменять соответствующие поля объекта. 
// // Также класс должен иметь статическое поле "максимальный возраст", которое будет задавать максимально допустимый возраст для всех создаваемых объектов.

// class User {
//     #name;
//     #age;
//     #email;
//     static #maxAge = 90;

//     constructor (name, age, email) {
//         this.#name = name;
//         this.#age = (age > User.#maxAge) ?  User.#maxAge : age;
//         this.#email = email;
//     }
    
//     changeName(newName) {
//         this.#name = newName
//     }

//     changeAge(newAge) {
//         this.#age = (newAge > User.#maxAge) ?  User.#maxAge : newAge;
//     }

//     changeEmail(newEmail) {
//         this.#email = newEmail;
//     }

//     getInfo() {
//         console.log(`User ${this.#name} (age: ${this.#age}, email: ${this.#email})`);
//     }

// }

// const user1 = new User ("John", 18, "john@mail.com");
// user1.getInfo();
// const user2 = new User ("Bob", 180, "bob@mail.com");
// user2.getInfo();
// const user3 = new User ("Jane", 25, "jane@mail.com");
// user3.getInfo();
// user3.changeName("Linda");
// user3.getInfo();
// user3.changeAge(100);
// user3.getInfo();
// user3.changeEmail("heap@mail.net")
// user3.getInfo();


// // ===== Задание 5 =====
// // Создать класс "Товар" с приватными полями "название", "цена" и "количество". 
// // Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. 
// // Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.

// class Goods {
//     #name;
//     #price;
//     #quantity;
//     static maxQuantity = 100;

//     constructor(name, price, quantity) {
//         this.#name = name;
//         this.#price = price;
//         this.#quantity = (quantity > Goods.maxQuantity) ?  Goods.maxQuantity : quantity;
//     }

//     changePrice (namePrice) {
//         this.#price = namePrice;
//     }

//     changeQuantity (newQuantity) {
//         this.#quantity = (newQuantity > Goods.maxQuantity) ?  Goods.maxQuantity : newQuantity ;
//     }

//     getAmount() {
//         console.log(`All ${this.#name} costs ${(this.#price * this.#quantity)}`);
//     }
// };

// const bread = new Goods ("bread", 100, 50);
// bread.getAmount();

// const beer = new Goods ("Corona", 200, 200);
// console.log(beer);
// beer.changeQuantity(50);
// console.log(beer);
// beer.getAmount();
