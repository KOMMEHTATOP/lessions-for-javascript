/* Вопросы к этому заданию
Чему равно а, почему?
let a = 0 || 'string'; - Будет string потому что стринг строка/true. Оператор нашел правду.
let a = 1 && 'string';  string потому что не нашел false. Оператор вернет последнее значение
let a = null || 25; 25
let a = null && 25; null
let a = null || 0 || 35; 35
let a = null && 0 && 35; null

Что отобразится в консоли. Почему?
12 + 14 + '12' = 2612 - конкатенация 
3 + 2 - '1' = 4
'3' + 2 - 1 = 31 потому что сначала конкатенация потом вычитание
true + 2 = 3 тру это 1
+'10' + 1 = 11 потому что унарный + преобразовал строку 10
undefined + 2 = NaN потому что undefined не числовое значение
null + 5 = 5  потому что null это false, а это значит 0
true + undefined - Nan. Потому что undefined складывается с числом

Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let proivol = 'hidden'
if (proivol == 'hidden') {
  console.log('“visible”');
} else {
  console.log('“hidden”');
}


Создать переменную и присвойте ей число.

Используя if, записать условие:
- если переменная равна нулю, присвоить ей 1;
- если меньше нуля - строку “less then zero”;
- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let randomNum = 0
if (randomNum == 0) {
  randomNum = 1
} else if (randomNum < 0) {
  randomNum = '“less then zero”'
} else if (randomNum > 0) {
  randomNum *= 10
}
console.log(randomNum)

Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.

Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = { 
  name: 'Lexus', 
  age: 10, 
  create: 2008, 
  needRepair: false
}
if (car.age > 5) {
  console.log('Need Repair'),
  car.needRepair = true
} else {
  car.needRepair = false
}
console.log(car)


Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.

Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
let item = { 
  name: 'Intel core i7', 
  price: '200', 
  discount: '16%' 
}
let normPrice = parseFloat(item.price)
let normDiscount = parseFloat(item.discount)

if (item.price == '') {
  console.table(item);
  console.log('Нет в наличии');
} else if (!isNaN(normPrice) && !isNaN(normDiscount)) {
  item.priceWithDiscount = Math.round(normPrice * (1 - normDiscount/100 ))
  console.table(item);
  console.log('Цена со скидкой', item.priceWithDiscount);
} else if (item.discount == '') {
  console.table(item);
  console.log('Стоимость:', normPrice);
}



Дан следующий код:
let product = {
name: “Яблоко”,
price: “10$”
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
let product = {
  name: 'Яблоко',
  price: '15$'
}
min = 10
max = 20

if (parseFloat(product.price) >= min && parseFloat(product.price)<= max) {
  console.log(product.name);
} else {
  console.log('Товаров не найдено');
}
 */

