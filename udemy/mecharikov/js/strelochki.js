/* 
function plus2(x, y) {
  return x + y
}
Тоже самое что 
const plus = (x, y) => x + y 
const plusRes = plus(1, 3) */


// Если нет аргументов
const withoutArgs = () => console.log('hello') /* Фигурные скобки не нужны т.к. параметры пустые и мы вполняем 1 действие */
// Если у нас 1 аргумент
const singArg  = x => x * 2; /* Круглые скобки нужны если есть параметр по умолчанию, например const singArg  = (x = 1) => x * 2 */
// Если больше 1 действия
const moreActions = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b /* return обязателен! */
}
// Если нужно вернуть объект
const reternObj = (str = '') => {
  return {
    value: str,
    length: str.length,
  }
}
// Сокращенная запись возврата объекта (по сути без retern нужно все писать в () )
const reternObj2 = (str = '') => ({
    value: str,
    length: str.length,
})

// --------------------ОСНОВНЫЕ ОТЛИЧИЯ ОТ ОБЫЧНЫХ ФУНКИЙ-------------------------

// 1. У обычной фунции есть псевдоколлекия arguments. 
/* 
function plusFoo(x, y) {
  console.log(arguments)
  return x + y
}
plusFoo(1, 2, 3, 'hello') */

// 2. Стрелочные функции не имеют собственного контекста this. Они его берут из контекста на уровень выше

const obj = {
  firstName: 'Baha',
  age: 15,
  getFirstName() {
    console.log(this)
  },
  // getAge: () => console.log(this), выдает объект виндоу
  // Исправить это можно вот так: 
  getAgeArrow: null,
  getAge() {
    // this.getAgeArrow = () => console.log(this) /* так сработает потому что у getAge объявлен как обычная функция и у него есть this (в данном случае он obj) */
    // Самое распространенное применение стрелочных функций это callback
    setTimeout(() => console.log(this))
  }
};
obj.getAge();
// obj.getAgeArrow();