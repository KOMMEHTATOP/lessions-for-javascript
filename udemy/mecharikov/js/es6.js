const firstName = 'Bahtiyar';
const secondName = 'Basharov';
const age = 30;

let str;
str = 'Hi, my name is' + ' ' + firstName + ' ' + secondName;
str = '<ul>' +
        '<li>First name: ' + firstName + '</li>' + 
        '<li>Last name: ' + secondName + '</li>' + 
        '<li>Age: ' + age + '</li>' + 
      '</ul>';

      // console.log(str);
      
// ES6 - запись ниже новая

str = `
<ul>
  <li>First name: ${firstName}</li>
  <li>Last name: ${secondName}</li>
  <li>Age: ${age}</li>
</ul>
`;

document.body.innerHTML = str;

// ДОМАШНЕЕ ЗАДАНИЕ №9

// 1. Получить первую и последнюю буквы строки
// 2. Сделать первую и последнюю буквы в верхнем регистре

let string = 'some test string';

let firstLetter;
firstLetter = string[0].toUpperCase(); /* Первый элемент строки */

let lastLetter;
lastLetter = string[string.length -1].toUpperCase(); /* Последний элемент строки */

console.log(firstLetter, lastLetter);

let neWExpression = `${string[0].toUpperCase()}${string.slice(1, -1)}${string[string.length -1].toUpperCase()}`;
console.log(neWExpression);

// 3. Найти положение слова ‘string’ в строке

let serchString;
serchString = string.indexOf('string');

console.log(serchString);

// 4. Найти положение второго пробела (“вручную” ничего не считать)

serchString = string.indexOf(' ', 5);

console.log(serchString);

// 5. Получить строку с 5-го символа длиной 4 буквы
let fiveForString;
fiveForString = string.substr(5, 4);

console.log(fiveForString);

// 6. Получить строку с 5-го по 9-й символы

let fiveNineString;
fiveNineString = string.slice(5, 10);
console.log(fiveNineString);

// 7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

let minusSixLetter;
minusSixLetter = string.slice(0, -6);
console.log(minusSixLetter);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

let a = 20;
let b = 16;

let stringAB = a + b.toString();

console.log(stringAB);