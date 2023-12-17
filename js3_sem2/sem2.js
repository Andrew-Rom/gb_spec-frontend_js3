"use strict";

// // ===== Задание 1 =====
// // 1. Создайте объект Person, представляющий человека, с
// // следующими свойствами: name, age и gender. Добавьте
// // также методы introduce и changeName. Метод introduce
// // должен выводить информацию о человеке, включая его
// // имя, возраст и пол. Метод changeName должен изменять
// // имя человека на новое заданное значение.
// // Person.name = "John";
// // Person.age = 25;
// // Person.gender = "male";
// // Person.introduce(); // Ожидаемый результат: My name is
// // John. I'm 25 years old and I identify as male.
// // Person.changeName("Mike");

// const Person = {
//     name : "",
//     age : 0,
//     gender : "",
//     introduce : function () {
//         console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
//     },
//     changeName : function (newName) {
//         this.name = newName;
//     }
// };

// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce();
// Person.changeName("Mike");
// Person.introduce();

// // ===== Задание 2 =====
// // 1. Создайте объект Animal со свойством name и методом eat(), который
// // выводит сообщение о том, что животное ест. Создайте объект Dog со
// // свойством name и методом bark(), который выводит сообщение о
// // том, что собака лает. Используйте одалживание метода eat() из
// // объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// // что собака ест.
// // // Одалживание метода eat() из объекта Animal к объекту Dog
// // Dog.eat = Animal.eat;
// // Dog.eat(); // Вывод: Rex is eating.

// const Animal = {
//     name : "",
//     eat : function () {
//         console.log(`${this.name} is eating`);
//     }
// };

// const Dog = {
//     name : "Rex",
//     bark : function () {
//         console.log(`${this.name} is barking`);
//     }
// };

// Dog.eat = Animal.eat;
// Dog.eat();


// // ===== Задание 3 =====
// // 1. Создайте объект calculator с методами add(), subtract() и multiply(),
// // которые выполняют соответствующие математические операции над
// // двумя числами. Используйте методы call и apply для вызова этих
// // методов с передачей аргументов.
// // console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// // console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

// const Calculator = {
//   add: function (num1, num2) {
//     return num1 + num2;
//   },
//   subtract: function (num1, num2) {
//     return num1 - num2;
//   },
//   multiply: function (num1, num2) {
//     return num1 * num2;
//   },
// };

// console.log(Calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(Calculator.subtract.apply(null, [5, 3])); // Вывод: 2

// const calc = {
//   n1: 2,
//   n2: 4,
// };
// console.log(Calculator.add.call(calc, calc.n1, calc.n2));
// console.log(Calculator.subtract.apply(calc, [calc.n1, calc.n2]));

// // // Далее просто эксперименты
// // const Calculator2 = {
// //   add: function () {
// //     return this.num1 + this.num2;
// //   },
// //   subtract: function () {
// //     return this.num1 - this.num2;
// //   },
// //   multiple: function (a, b) {
// //     return this.num1 * this.num2;
// //   },
// // };
// // const calc2 = {
// //   num1: 10,
// //   num2: 18,
// // };
// // console.log(Calculator2.add.call(calc2));


// // ===== Задание 4 =====
// // 1. Создайте класс Person, который имеет свойства name и age, а также
// // метод introduce(), который выводит сообщение с представлением
// // имени и возраста персоны.
// // const person = new Person("John", 25);
// // person.introduce(); // Вывод: My name is John and I'm 25 years old.

// class Person {
//     name;
//     age;

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     };

//     introduce() {
//         console.log(`My name is ${this.name} and I'm ${this.age} years old`);
//     };
// };

// const person = new Person("John", 25);
// person.introduce();


// // ===== Задание 5 =====
// // Создайте класс BankAccount, который представляет банковский счет.
// // У него должны быть свойства accountNumber (номер счета) и balance
// // (баланс), а также методы deposit(amount) для пополнения счета и
// // withdraw(amount) для снятия денег со счета. Класс должен иметь
// // также статическое свойство bankName, которое содержит название
// // банка.
// // const account1 = new BankAccount("1234567890", 1000);
// // account1.deposit(500); // Вывод: Deposited 500 into account
// // 1234567890. New balance: 1500
// // account1.withdraw(200); // Вывод: Withdrawn 200 from account
// // 1234567890. New balance: 1300
// // account1.withdraw(1500); // Вывод: Insufficient funds in account
// // 1234567890

// class BankAccount {
//     static bankName = "Super Bank";
//     accountNumber;
//     balance;

//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     };

//     deposit(amount) {
//         this.balance += amount;
//         console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
//     };

//     withdraw(amount) {
//         if (amount > this.balance) {
//             console.log(`Insufficient funds in account ${this.accountNumber}`);
//         } else {
//             this.balance -= amount;
//             console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
//         }
//     };
// };

// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500);
// account1.withdraw(200);
// account1.withdraw(1500);
