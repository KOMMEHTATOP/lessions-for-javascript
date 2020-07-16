// let value;

// value = 1 > 2;

// value = 'a' > 'ab';
// value = 'a'.charCodeAt(); /* Вернет числовое значение символа */

// console.log(value);

// КАК РАБОТАЕТ IF ELSE

/* if (условие/выражение - которое преобразовывается в буливое значение true/false) {
  если условие верно, то действие выполнится тут без else.
} else {
  если условиe в начале не выполнено то действие будет тут.
} */

// value = 10;

// if (value !== 10) {
//   console.log('yes')
// } else {
//   console.log('no')
// };

// value = NaN;

// // ТУТ работает код если булиновое значение TRUE
// if (value) {
//   console.log('someone actions', value);
// } else {
//   console.log('else', value);
// };

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ - || (или), && (и), !(не, или возвращает противоположное значение true в false и т.д.)

// Оператор || - запинается на правде. Каждое значение пытаеся преобразовать к true. Возвращает первое положительное значение (true) или если не найдет последний false
// value = 1 || 0;
// console.log(value); /* Покажет 1 потому что он true */

// let age = 10;
// if (age < 16 || age > 40 ) {
//   console.log('Подходит по возрасту');
// } else {
//   console.log('Возраст не подходит');
// }

// let serverNickName = 'Ivanovich';
// let nickName = serverNickName || 'Default nickname' 

// console.log(nickName);



// Оператор && - запинается на лжи. Каждое значение пытаеся преобразовать к false

// value = 1 && 0 && 4;
// console.log(value); /* Покажет 0, потому что 0, это первая лож. */

// productPrice = 30;
// if (productPrice >= 5 && productPrice <= 20) {
//   console.log('Беру');
// } else {
//   console.log('Дорого, не беру')
// };


// Задача: Есть ли что-то в массиве?
// value = [1];
// // if (value.length) {
// //   console.log(value);
// // } else {
// //   console.log('array is empty');
// // };

// // Задача: Проверить что массив является массивом. Спец.функция Array.isArray() возвращает true || false в зависимости от того является ли вложение массивом или нет.
// if (Array.isArray(value)) {
//   console.log(value);
// } else {
//   console.log('array is empty');
// };


// Проверить есть ли поле name в объекте
// let user = {
//   name: 'Ivan'
// };

// if (user.name) {
//   console.log(user.name);
// } else {
//   console.log('else');
// };

// // или можно через метод hasOwnProperty(), в значении указываем что ищем. Метод возвращает булиновое значение.  Но он не проверяет значение внутри.
// if (user.hasOwnProperty('name')) {
//   console.log(user.name);
// } else {
//   console.log('else');
// };

// ВЛОЖЕННЫЕ УСЛОВИЯ

// value = 10;
// if (value < 10) {
//   console.log('value < 10', value);
// } else if (value >= 10) {
//   console.log('value >= 10', value);
// } else {
//   console.log('else');
// }

// ДОМАШНЕЕ ЗАДАНИЕ №4

//1. Чему равно а, почему?

// let a = 0 || 'string'; /* string - потому что это не пустая строка, т.е. true.  */

// let a = 1 && 'string'; /* string - последний true. Т.к. && ищет false, если не находит дает последнее true значение */

// let a = null || 25; /* 25 */

// let a = null && 25; /* null */

// let a = null || 0 || 35; /* 35 */

// let a = null && 0 && 35; /* null */

// 2. Что отобразится в консоли. Почему?

// 12 + 14 + '12' /* 2612 - 26+строка, т.е. конкатенация 12 */

// 3 + 2 - '1' /* 4 - т.к. текст будет приобразован в число */

// '3' + 2 - 1 /* 31 - конкатенация и результат вычитания 2-1 */

// true + 2 /* 3 - true этот как 1*/

// +'10' + 1 /* Унарный + делает "10" числом */

// undefined + 2 /* NaN - undefined не число. Это свой отдельный тип или Глобальный объект */

// null + 5 /* 5 потому что null это когда значение есть но оно пустое. Литерал */

// true + undefined /* NaN undefined не число */


// 3. Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

// let dz3 = 'hidden';
// if (dz3 == 'hidden') {
//   dz3 = 'visible';
// } else {
//   dz3 = 'hidden';
// }
// console.log(dz3);

// 4. Создать переменную и присвойте ей число.

// Используя if, записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

// let dz3 = 2;
// if (dz3 == 0) {
//   dz3 = 1;
// } else if (dz3 < 0) {
//   dz3 = 'less then zero';
// } else {
//   dz3 *= 10; /* Короткая запись dz3 = dz3 * 10 */
// }
// console.log(dz3);

// 5. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

// let car = {
//   name: 'Lexus',
//   age: 10,
//   create: 2008,
//   needRepair: false
// }

// if (car.age > 5) {
//   console.log('Need Repair');
//   car.needRepair = true;
// } else {
//   car.needRepair = false;
// }

// console.log(car);

// 6. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

// let  item = {
//   name: 'Intel core i7',
//   price: '100$',
//   discount: '33'
// }

// let price = parseFloat(item.price);
// let discount = parseFloat(item.discount);
// // проверяем что цена и скидки это цифры
// if (!isNaN(price)&&!isNaN(discount)) {
//   priceWithDiscount = price*(1 - discount/100)+'$';
//   console.log(priceWithDiscount)
// } else {
//   console.log(item.price)
// }

// 7. Дан следующий код:

// let product = {
//   name: “Яблоко”,
//   price: “10$”
//   };
  
//   let min = 10; // минимальная цена
//   let max = 20; // максимальная цена
  
//   Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

// let product = {
//   name: 'Яблоко',
//   price: '20$'
// };

// let price = parseFloat(product.price); 

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

//   if (price >= min && price <= max) {
//     console.log(product.name)
//   } else {
//     console.log('Товар не найден')
//   };

  // ТЕРНАРНЫЕ ОПЕРАТОРЫ
  
  let a = 1;
  let b = 0;
  
  // if (a > 0) {
  //   b = a;
  // } else {
  //   b += 1;
  // }
  
  // синтаксис выглядит так: 
  // выражение (принимает булиновое значение) ? если true : если false; 
// let c = a > 0 ? b = a : b += 1;
//   console.log(`b: ${b}, c: ${c}`);
  // Еще короче запись
b = a > 0 ? a : b + 1;
console.log(`b: ${b}`);

// или можно увеличить условия
  // выражение ? если true : выражение ? если true : если false;

  c = a > 0 ? 2 : a < 0 ? 3 : 0;
  console.log(`c: ${c}`)
