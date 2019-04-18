"use strict";
// Виведіть число згенерованевипадковим чином
console.log(Math.random());
// Об’явіть змінні різних типів, виведіть їх на екран
var variableNumber = 2;
const variableFloat = 2.8;
let variableString = "Hello world";
var variableObj = {
    name: 'Алёна',
    surname: 'Куриленко'
};
const variableArr = [1, 'привет', 2, [1, 2, 3], { name: 'Валерка', surname: 'Жмых' }];
let variableBoolean = true;
var variableUndefined = undefined;
const variableNull = null;
// Збережіть суму двох чисел і збережіть її у третю змінну, виведіть її на екран
var num = 2 + 2;
var num2 = num;
console.log(num2);
// Створіть файл script.js. Підключіть його в нижню частину файлу index.html. створіть три діалогових вікна з alert(), prompt(), confirm()
alert('Привет!');
prompt('Сколько тебе лет?');
confirm('Тебе уже есть 18?');
// Запитайте у користувача його вік. Виведіть фразу “Ваш вік ____”7
var userAge = prompt('Сколько тебе лет?');
document.write('Ваш вік ' + userAge);
// Ввести  кількість  купленого  товару,  ціну  за  одиницю.  Виведіть  суму покупки
var staffAmount = prompt('Кол-во товара?');
var staffPrice = prompt('Цена за еденицу?');
console.log(staffAmount * staffPrice);
// Введіть число –визначте чи воно від’ємне
var num3 = prompt('Введите число');
console.log(num3 < 0 ? `Число ${num3} отрицательное` : `Число ${num3} отрицательное`);
// Введіть номер дня тижня, виведіть його назву.
var weekNum = prompt('Введите номер дня недели');
switch(weekNum) {
    case 1: console.log('Понедельник'); break;
    case 1: console.log('Вторник'); break;
    case 1: console.log('Среда'); break;
    case 1: console.log('Четверг'); break;
    case 1: console.log('Пятница'); break;
    case 1: console.log('Суббота'); break;
    case 1: console.log('Воскресенье'); break;
    default: console.log('Нет такого номера у дня недели!');
}
// Виведіть таблицю множення числа 6
for (var i = 2; i <= 9; i++) {
    console.log(`6 * ${i} = ${6 * i}`);
}
// Задайте  одномірний  масив n=5. Виведіть  квадрат  третього  числа,  суму першого і останнього елемента суму квадратів від’ємних елементів
var arr2 = [3, -5, 6, -2, 15];
console.log(arr2[2]**2);
console.log(arr2[0] + arr2[arr2.length-1]);
var sum = 0;
for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] < 0) sum += (arr2[i]**2);
}
console.log(sum);
// Створіть об’єкт машина. Поля:ім’явласника, назва моделі, об’ємдвигуна.Створіть масив  з  кількома об’єктами,  виведіть  машину  з  мінімальним об’ємом двигуна
var cars = [
    {
        master: 'Куриленко А.Ю.',
        name: 'Ваз 2106',
        engineCapacity: '1.5'
    },
    {
        master: 'Жмышенко В.А.',
        name: 'Ferrari California',
        engineCapacity: '4.2'
    }
];
// Введіть 4 числа, Знайти max{min(a, b), min(c, d)
console.log(Math.min(-228, 15));
console.log(Math.max(1488, 5));
// Задайте  слово,  виведіть  його  довжину  та  запищіть  його  в  зворотньому порядку.
var word = 'Тилимилитрямдия';
console.log(word.length);
console.log(word.split('').reverse().join(''));