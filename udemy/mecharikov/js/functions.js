//----------------------Function Declaration - можно вызывать в любом месте кода

function sayHello(firstName = "default", lastName = "default") {
  if (!firstName) return console.error("Not have firstName");
  console.log(firstName, lastName);
  console.log("Hello world");
  return `Hello ${firstName} ${lastName}`;
  // после return функция останавливается
}

let res = sayHello("Baha", "Basharov");
let res2 = sayHello("Bahtiyar", "Basharov") + "!";
let res3 = sayHello() + "!";
console.log(res);
/* Без return консоль выдаст undefined */
console.log(res2);
// Можно добавлять что-то
console.log(res3);
// Выводит undefined .т.к нет firstName, функция прекратилась
console.clear();
// -------------------------------------ОБЛАСТЬ ВИДИМОСТИ--------------------------------------

let x = 10;
function foo(x) {
  x = 20;
  console.log(x);
  return x;
}
foo();
console.log(x);

// Если не объявить переменную x внутри фунции, то она поменяет глобальную переменную и в консоли будет 20 20. Если мы хотим использовать использованную переменную внутри функции снаружи, необходимо ее сначала вернуть через return

// --------------------РАБОТА С ОБЪЕКТАМИ-------------------------------

/* const user = {
  name: "Ivan",
  age: 33,
};
function getObj(obj) {
  console.log(obj);
  obj.name = "Kola";
}
getObj(user);
 */

//----------------------Function Expression - разница в том что мы присваиваем функцию в переменную
const square = function (x) {
  return x * x;
};

// -----------------------------------САМОВЫЗЫВАЮЩИЕСЯ ФУНКЦИИ --------------------------------
// (function() {})() - где (function без имени(принятие параметров) {тело функции})(скобки вызова, их можно так же поставить сразу после фигурных)
(function (msg) {
  console.log(msg);
})("Hello World");
console.clear();
// ---------------------------------ARGUMENTS (иттерируемая коллекция - псевдомассив, который можно перебирать циклами)----------------------------------------
// Им не пользуются, т.к. он являетсоя объектом и не имеет методов, которые есть у массивов. Мы можем только перебрать его через циклы и все.
function doo(sssss) {
  // console.log(sssss);
  // console.log(arguments[1]);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
doo(11, "someone text", [1, 2, 3]);
