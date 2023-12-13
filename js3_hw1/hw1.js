"use strict";

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
let minValue = Math.min(...arr);
console.log(`В массиве ${arr} минимальное число: ${minValue}.`);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
  let count = 0;
  return {
    increment: () => {
      ++count;
    },
    decrement: () => {
      --count;
    },
    counter: () => {
      return count;
    },
  };
}

let firstCounter = createCounter();
console.log(firstCounter.counter());

for (let i = 0; i < 10; i++) {
  firstCounter.increment();
}
console.log(firstCounter.counter());

for (let i = 0; i < 3; i++) {
  firstCounter.decrement();
}
console.log(firstCounter.counter());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(element, searchingClass) {
  if (element.classList.contains(searchingClass)) {
    return element;
  }
  for (const childElement of element.children) {
    const result = findElementByClass(childElement, searchingClass);
    if (result) {
      return result;
    }
  }
  return null;
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
