/* let value
value = 'a' > 'ab' 
value = 'a'.charCodeAt()
console.log(value); будет false потому что ab больше символов
чтобы посмотреть unicod символа существует метод charCodeAt(). Он вернет числовое значение символа. 
 */

// value = null
/* 
if(value == 10) {
  console.log('Yes', value)
} else {
  console.log('No', value)
}
 */
// Всегда выдает булиновое значение. Undefinet, Null, 0, NaN и пустая строка это false. 

/*  if(value) {
   console.log('Some actions', value);
 } else {
   console.log('Else', value);
 } */

//  ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
/* 
|| - или
&& - и
(!)  - не (без скобок, просто не могу закоментить без них) */

// value = null

// Проверить наличие записей в массиве
// value = 'daza'
/* if(value.length) {
  console.log(value)
} else {
  console.log('Net')
} */

// Проверить что массив является массивом можно функцией Array
/* if(Array.isArray(value)) {
  console.log(value)
} else {
  console.log('No')
}

 */

/* const user = {
  name: 'Bahtiyar'
}
Чтобы поверить есть ли поле name внутри объекта
if (user.name) {
  console.log('Yes, name is:', user.name);
} else {
  console.log('No');
} */
// ЕЩЕ есть метод hasOwnProperty('') - в качестве значения в скобках принимает имя ключа в объекте. Возвращает булиновое значение true/false. Но есть косяк, он не проверяет само значение ключа. Т.е. если будет null или 0, всеравно засчитается как false.

// console.log(user);

// ОПЕРАТОР (||) ИЛИ - запинается на правде. Каждое значение пытается преобразовать к true. Оператор часто используетс для определения значений переменной.   
/* 
let serverNickname = 'Bahtiyar' 
let nickname = serverNickname || 'default Nickname' 

console.log(nickname);  */

// value = 1 || 0
// console.log(value); /* вернет 1 потому что оператор || остановится на первой  правде. Т.е. 1 это true. Если ничего не найдет возвращает последний false */
/* 
let age = 20
if (age < 18 || age > 65) {
  console.log('Yes, age', age);
} else {
  console.log('No');
} */


// ОПЕРАТОР (&&) И - запинается на лжи. Каждое значение пытается преобразовать к false. Все в точности наоборот с ||

/* value = 1 && 0 && 3


producktPrice = 10
if (producktPrice >= 5 && producktPrice <= 8) {
  console.log('Yes');
} else {
  console.log('No');
  
}

console.log(value); */


value = 22

if (value > 10) {
  console.log('Yes,', value);
} else if (value <= 20) {
  console.log('Yes,', value);
} else {
  console.log('No');
  
}