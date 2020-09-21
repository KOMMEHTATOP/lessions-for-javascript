/* Дана строка: let string = "some test string";

Вопросы к этому заданию
Получить первую и последнюю буквы строки

Сделать первую и последнюю буквы в верхнем регистре

Найти положение слова ‘string’ в строке

Найти положение второго пробела (“вручную” ничего не считать)

Получить строку с 5-го символа длиной 4 буквы

Получить строку с 5-го по 9-й символы

Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

 */

let string = "some test string";
// Получить первую и последнюю буквы строки
// Сделать первую и последнюю буквы в верхнем регистре

value = string[0].toUpperCase()
console.log(value)

value2 = string[string.length -1].toUpperCase()
console.log(value2)

// Найти положение слова ‘string’ в строке
// Найти положение второго пробела (“вручную” ничего не считать)
sirch = string.indexOf('string')
sirch2 = string.indexOf(' ', 6)

console.log(sirch)
console.log(sirch2)

// Получить строку с 5-го символа длиной 4 буквы
// Получить строку с 5-го по 9-й символы
partOfSentence = string.slice(5, 9)
partOfSentence2 = string.substring(9, 5)
partOfSentence3 = string.substr(5, 4)

console.log(partOfSentence)
console.log(partOfSentence2)
console.log(partOfSentence3)

// Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
newStr = string.slice(0, -6)
console.log(newStr)

// Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

let a = 20
let b = 16

stringKonkat = a.toString() + b
console.log(stringKonkat)