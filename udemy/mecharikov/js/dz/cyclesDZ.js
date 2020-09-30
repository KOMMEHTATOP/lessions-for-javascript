/* В данных задачах старайтесь не использовать методы массивов. Используйте циклы и условия.

Вопросы к этому заданию
На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
будут в верхнем регистре. Использовать for или while.
let str = 'i am in the easycode'
let strUp = ''
for (i = 0; i < str.length; i++) {
  if (i === 0 || str[i-1] === ' ') {
    strUp += str[i].toUpperCase()
  } else {
    strUp += str[i]
  }
}
console.log(strUp)

Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
str = 'tseb eht ma i'
strNaob = ''
for (let i = str.length; i--;) {
  console.log(str.length);
  strNaob += str[i]
}
console.log(strNaob);


Факториал числа - произведение всех натуральных чисел от 1 до n

включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
let a = 10
for (i = 1; i <= 10; i++) {
 a *= i
}
console.log(a);


На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.


Дан объект:

let list = {
name: ‘denis’,
work: ‘easycode’,
age: 29
}
Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in. */

let str = '“JavaScript is a pretty good language”'
let strNew = ''
for (i = 0; i < str.length; i++) {
  if (i === 0 || str.length[i-1] === " ") {
    strNew += str[i].toUpperCase()
  } else if (str[i] !== ' ') {
    strNew += str[i]
  }
  
}
console.log(strNew);