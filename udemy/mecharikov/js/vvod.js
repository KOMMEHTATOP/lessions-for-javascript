/* ТИПЫ ДАННЫХ

1. Примитивные:
- Number: 2019, 1.5, NaN (not a Number), Infinity (получаем при делении на 0)
- String: "Hello", 'Hello', `Hello`
- Boolean: true, false
- Null: null (значение неизвестно)
- Undefined: undefined (указывает на то что переменной ничего не задано или в переменной нет значения)
- Symbol()

2. Объекты (объявляются в фигурных {} скобках. Содержит в себе ключь name со значением 'Baha' и т.д.):
(referens type) Передаются по ссылке.
- Object { name: 'Baha', age: 30} */





/* ПЕРЕМЕННЫЕ
var, let, const
let name = 'Baha';
console.log (name)
переменные могу начинаться с текста и со значков:
$ - Лучше не использовать т.к этот символ использует JQuerry
_ Лучше не использовать т.к. хз че

3 типа написания переменных:
CamelCase - userAge
Underscore = user_age
ХЗ как называется третий но все слова с большой буквы UserAge
все в нижнем регистре userage
 */



/* 
ПРЕОБРАЗОВАНИЯ ТИПОВ

undefined - при математических действиях кроме сложения со строкой будет NaN. 

1. Явные ПРЕОБРАЗОВАНИЯ 
- number to string (из числа в строку)
*/
let value;
/* 
value = String(10)
value = String(10+40)
value = (40).toString();
 */

// - Boolean to String (булиновые значения в строку)
value = String(true); /* В математических операциях true преобразовывается в число 1. Null и false к нулю 0. */
// Array to String (массив в строку)
value = String([1, 2, 3])
// Object to String (Объект в строку)
value = String({ name: 'Baha'});
// String to Number (строку в число)
value = Number('23');
value = Number(true);
value = Number(false);
// Если мы попытаться преобразовать строку к числу которая не может быть числом или к массиву ответ будет NaN.
value = Number('false');

value = parseInt('2000gjhdfjlghdf')  /* служит для выделения целых чисел из текста. В начале должны быть числа или пробел */
value = parseFloat('20.21gjhdfjlghdf')  /* служит для выделения дробных чисел из текста. В начале должны быть числа или пробел */

// Строку в булиновое- любое не пустое значение кроме нуля (0) будет true. все остальное false  
value = Boolean('hello')
value = Boolean('')

/* 
2. Не явные преобразования
КОНКАТЕНАЦИЯ  
Если строка может быть пробразована в число "5", то при математических выражениях преобразуется. 
value = 30 + '' + 30;
*/

console.log(value);
console.log(typeof value);