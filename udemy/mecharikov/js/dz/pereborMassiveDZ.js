// -------------------------------Задание 1------------------------------------------
/* На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
каждый элемент которого будет хранить информацию о числе и его четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...] */

/* const arr = [1,2,3,5,8,9,10] 
const newArr = arr.map((el) => ({digit: el, odd: Boolean(el % 2)}))
console.log(newArr) */

// -------------------------------Задание 2------------------------------------------
/* Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true. */

/* const arr = [12, 4, 50, 1, 0, 18, 40]
const noZeroArr = arr.some((el) => el === 0)
console.log(noZeroArr) */


// -------------------------------Задание 3------------------------------------------
/* Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true */
/* const arr = ['yes', 'hello', 'no', 'easycode', 'what']
const newArr = arr.every((el) => el.length > 3)
console.log(newArr) */

// -------------------------------Задание 4------------------------------------------
/* Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}] 

Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!” */

/* const objArr = [
    {char:"a",index:12}, 
    {char:"w",index:8}, 
    {char:"Y",index:10}, 
    {char:"p",index:3}, 
    {char:"p",index:2}, 
    {char:"N",index:6}, 
    {char:" ",index:5}, 
    {char:"y",index:4}, 
    {char:"r",index:13}, 
    {char:"H",index:0}, 
    {char:"e",index:11}, 
    {char:"a",index:1}, 
    {char:" ",index:9}, 
    {char:"!",index:14}, 
    {char:"e",index:7}
]

const strChar = objArr.sort((prev, next) => prev.index - next.index).reduce((acc, currentValue) => acc += currentValue.char, '')
console.log(strChar) */


// -------------------------------Задание 5------------------------------------------
/* Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]*/

/* const arr = [ [14, 45], [1], ['a', 'c', 'd'] ]
const orderedArr = arr.sort((prev, next) => prev.length - next.length)
console.log(orderedArr) */


/*
// -------------------------------Задание 6------------------------------------------
Есть массив объектов:
[
{cpu: 'intel', info: {cores:2, сache: 3}},
{cpu: 'intel', info: {cores:4, сache: 4}},
{cpu: 'amd', info: {cores:1, сache: 1}},
{cpu: 'intel', info: {cores:3, сache: 2}},
{cpu: 'amd', info: {cores:4, сache: 2}}
]
Отсортировать их по возрастающему количеству ядер (cores). */

/* const pcObj = [
  {cpu: 'intel', info: {cores:2, сache: 3}},
  {cpu: 'intel', info: {cores:4, сache: 4}},
  {cpu: 'amd', info: {cores:1, сache: 1}},
  {cpu: 'intel', info: {cores:3, сache: 2}},
  {cpu: 'amd', info: {cores:4, сache: 2}}
]

const orderedPc = pcObj.sort((prev, next) => prev.info.cores - next.info.cores)
console.log(orderedPc) */


// -------------------------------Задание 7------------------------------------------
/* 3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [
{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
{title: 'prod3', price: 15}, {title: 'prod4', price: 25},
{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}] */

/* let products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
  ];

  filterCollection = (arr, minPrice, maxPrice) => {
    const filterProd = arr.filter((item) => {
      return item.price >= minPrice && item.price <= maxPrice
    })
    return filterProd.sort((prev, next) => prev.price - next.price)
  }
  
  console.log(filterCollection(products, 15, 30)) */


// =============================ЗАДАНИЯ ПО ТЕМЕ ИЗ LEARNJS==================================

/*1. 
Переведите текст вида border-left-width в borderLeftWidth
важность: 5
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно. */

/* let str = 'border-left-width'
const camelize = str.split('-').map((el, firstEl) => firstEl == 0 ? el: el[0].toUpperCase() + el.slice(1)).join('')
console.log(camelize) */
// --------------------------------------------------------------------------------------------

// 2. 
/* Фильтрация по диапазону
важность: 4
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.

Например:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)
 */

/* let arr = [5, 3, 8, 1]
let filtered = filterRange(arr, 1, 4)

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && b >= item)
}
console.log(filtered)
console.log(arr) */
// ----------------------------------------------------------------------------------------------

// 3.
/* Фильтрация по диапазону "на месте"
важность: 4
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.
Например:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]
 */

/* function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el < a || el > b) {
      arr.splice(i, 1)
      i--
      не понимаю вот этот участок!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
  }
}
let arr = [5, 3, 8, 1, 2]
filterRangeInPlace(arr, 1, 4)
console.log(arr) */
// ------------------------------------------------------------------------------------------------

// 4.
/* Сортировать в порядке по убыванию
важность: 4
let arr = [5, 2, 1, -10, 8];
// ... ваш код для сортировки по убыванию
alert( arr ); // 8, 5, 2, 1, -10
 */

/* let arr = [5, 2, 1, -10, 8]

arr.sort((prev, next) => prev - next)
console.log(arr) */
// -----------------------------------------------------------------------------------------------


// 5. 
/* Скопировать и отсортировать массив
важность: 5
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
 */

/* let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

function copySorted(arr) {
  return arr.slice().sort()
  ТОЖЕ НЕ ПОНЯЛ ЗАЧЕМ ВООБЩЕ ТУТ СОРТ??????????????????????????????????????????????????
}
console.log(sorted)
console.log(arr) */
// -----------------------------------------------------------------------------------------------

// 6.
/* Создать расширяемый калькулятор
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.
//////////////ПЕРВАЯ//////////////////////////
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
Пример использования:
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

//////////////ВТОРАЯ//////////////////////////
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.
*/

/* function calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b
  }
  this.calculate = function (str) {
    let split = str.split(' ')
    a = +split[0],
    op = +split[1],
    b = +split[2]
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN
    }
    return this.methods[op](a, b)
    НЕ РАЗОБРАЛСЯ ЧТО ВОЗВРАЩАЕТ ЭТА СТРОКА?????????????????????????????????????????????
  }
  this.addMethods = function (name, func) {
    this.methods[name] = func
  }
} */

// -----------------------------------------------------------------------------------------------

// 7.
/* Трансформировать в массив имён
важность: 5
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = ... ваш код
alert( names ); // Вася, Петя, Маша
*/

/* 
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
let names = users.map(item => item.name)
console.log(names) */
// ------------------------------------------------------------------------------------------------

// 8.
/* У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

Например:
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];
let usersMapped = ваш код

usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка. */

/* let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];
let usersMapped = users.map((item) => ({id: item.id, fullName: item.name + " " + item.surname}))
console.log(usersMapped[0].id)
console.log(usersMapped[0].fullName) */
// ------------------------------------------------------------------------------------------------

// 9
/* Отсортировать пользователей по возрасту
важность: 5
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);
// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
 */

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];
sortByAge(arr)

function sortByAge(arr) {
  return arr.sort((prev, next) => prev.age - next.age)
}
console.log(arr) */
// ------------------------------------------------------------------------------------------------

// 10.
/* Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]
shuffle(arr);
// arr = [2, 1, 3]
shuffle(arr);
// arr = [3, 1, 2]

Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая */

let arr = [1, 2, 3];
shuffle(arr);


function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5)
}

console.log(arr)