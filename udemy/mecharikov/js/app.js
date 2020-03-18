// alert('Hello World!');

// null - нет ничего. Это отдельный вид.
// undefined - переменная есть, но ей ничего не задано/присвоено.
// Infinity - математическая бесконечность.

// ОБЪЕКТ - набор свойств и методов
console.table({ name: 'Denis', age: 30 }); /* name - ключ, Denis - значение */
// МАССИВЫ в [] скобках
console.log([1, 2, 3, 4]); /* Массив может содержать любые данные. */

// ЧИСЛА И МАТЕМАТИЧЕСКИЕ ОПЕРАЦИИ
// ОПЕРАТОРЫ
// +, -, *, /, %-(это взятие остатка деления. Пример: value = 5 % 2 будет 1 и т.д.).

const num1 = 10;
const num2 = 20;
let value;

value = num1 + num2;
value = value + 100; /* Чтобы увеличить значение к примеру на 100 */
value +=100; /* эта короткая запись и делает тоже самое что выше */

console.log(value);

// ДРОБНЫЕ ЧИСЛА

value = 0.6 + 0.7

console.log(value);
value = parseFloat(value.toFixed(2)); /* или поставить унарный + перед value.toFixed(2), т.е. получиться value = +value.toFixed(2)*/
console.log(value);

// также есть вариант просто все данные умножить на 10. Т.е. value = 0.6 * 10 + 0.7 * 10

console.clear();

// MATH - объект для работы с числами

value = Math.PI;
value = Math.random(); /* Метод генерирует случайное число */
value = Math.round(2.2); /* Метод округляет все как в математике до и после половины */
value = Math.ceil(3.1); /* Метод округляет всегда в большую сторону */
value = Math.floor(2.9); /* Метод округляет всегда в меньшую сторону */
value = Math.min(123, 23, 43, 56); /* Метод показыает минимальную цифру среди своих данных */
value = Math.max(123, 23, 43, 56); /* Метод показыает максимальную цифру среди своих данных */

console.log(value);

console.clear();

// Задача вернуть рандомное число от 0 до 10

value = Math.floor(Math.random()*10+1); /* Прибавили 1 чтобы можно было получить 10. */
console.log(value);


// Задача получить рандомный элемент массива

const arr = ['red', 'black', 'green', 'yellow', 'white', 'blue', 'orange', 'pink'];
value = Math.floor(Math.random()*arr.length); /* length - длинна массива */

console.log(value, arr[value]);

console.clear();

// ДОМАШНЕЕ ЗАДАНИЕ №8
// 1. Получить число pi из Math и округлить его до 2-х знаков после точки

value = parseFloat((Math.PI).toFixed(2));
console.log(value);

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

value = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value);

value = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(value);

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.

value = parseFloat(Math.random().toFixed(2));
console.log(value);

value = Math.floor(Math.random()*10);
console.log(value);

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

value = 0.6 + 0.7
value = +value.toFixed(2) /* Есть 3 вида приведения в норму. parseFloat, унарный +, тупо все умножить на 10 */

console.log (value);

// 5. Получить число из строки ‘100$’

value = '100$';
console.log(parseFloat(value));

console.clear();

// СТРОКИ

const firstName = 'Baha';
const secondName = 'Basharov';
const age = 32;
const strg = 'Hello, my name Baha!!!';

let valueStr;

valueStr = firstName + secondName;
valueStr = firstName + ' ' + secondName;
valueStr += ' to go ' + age;

valueStr = firstName.length;
valueStr = firstName[2]
// ПОЛУЧИТЬ ПОСЛЕДНИЙ ЭЛЕМЕНТ ИЗ СТРОКИ
valueStr = secondName[secondName.length -1] /* Т.к. отсчет начинается с 0, то 8й буквы в фамилии Basharov не видно, поэтому чтобы получить последний символ нужно отнять 1. */

// МЕТОДЫ К СТРОКАМ

valueStr = firstName.toUpperCase(); /* Большие буквы */
valueStr = firstName.toLowerCase(); /* Маленькие буквы */
valueStr = firstName.concat(' ', secondName); /* Конкатенация строк*/
valueStr = strg.indexOf('m'); /* Возвращает индекс первой искомой буквы. Вторым аргументом можно задать позицию начала, например: ("m", 10) поиск пойдет после 10 символа. Чувствителен к регистру*/

valueStr = strg.includes('my'); /* Дает булиновое значение есть или нету такой строки. Чувствителен к регистру*/

valueStr = strg.slice(0, 5) /* Выерзать кусок строки (от сюда, до сюда) */
valueStr = strg.replace('Baha', 'Bahtiyar') /* Найти и заменить */

console.log(valueStr);
