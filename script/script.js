'use strict';

// a = 5;
// console.log(a);

var number = 5;
var string = 'hello';
// var sym = symbol();
var boolean = true;
null; // не существует
undefined; // Существует, но не имеет значения
var obj = {};

console.log(4/0);
console.log('string' * 9);

let something;
console.log(something);

let person = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(person.name);
console.log(person['name']);

let array = ['plum.png', 'orange.jpg', 'apple.bmp'];


console.log(array[2]);

// alert('Hello world');

// let answer = confirm('Are you here?');

// let answer = +prompt('Есть ли вам 18 лет?');

// console.log(typeof(answer));

// console.log('arr' + ' - object');
// console.log(4 + ' - object');

let incr = 10,
    decr = 10;


console.log(incr--);
console.log(decr--);

console.log(5%2);
console.log('2' == 2);
console.log('2' === 2);

// = - Поисвоесние значение
// == - Проверка на равенство
// === Строгая проверка на тип данных


let isChecked = true,
    isClose = true;

console.log(isChecked && !isClose);
console.log(isChecked || !isClose);


