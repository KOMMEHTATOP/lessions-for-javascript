/* Вопросы к этому заданию
Получить число pi из Math и округлить его до 2-х знаков после точки
let value
value = Math.PI
console.log(value.toFixed(2));

Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
let value = Math.max(15, 11, 16, 12, 51, 12, 13, 51)
let value2 = Math.min(15, 11, 16, 12, 51, 12, 13, 51)
console.log(value); 
console.log(value2);  

Работа с Math.random:
a. Получить случайное число и округлить его до двух цифр после запятой
b. Получить случайное целое число от 0 до X. X - любое произвольное число.
 let value = Math.random()
 console.log(value.toFixed(2));
value = Math.floor(Math.random() * 10);
console.log(value);

Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let value = 0.6 + 0.7
console.log(value.toFixed(1));

Получить число из строки ‘100$’
let value
value = parseInt('100$')
console.log(value);
 */



