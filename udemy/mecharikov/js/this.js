/* Мы можем использовать функции в качестве методов!!!!!!!!!!!!!!!!! 
МЕТОД - когда функция передана в качестве свойста в объекте*/

/* const prod1 = {
  name: "Intel",
  price: 100,
  getPrice: function () {
    console.log(this);
  },
  motherbrand: {
    chastota: ["Mnogo"],
    vidyaha: function () {
      console.log(this);
    },
  },
}; */
// вызываем фунцию с методом объекта
// prod1.getPrice();
// prod1.motherbrand.vidyaha();
// КОНТЕКСТ ВЫЗОВА ОПРЕДЕЛЕЯЕТСЯ ПРИ ВЫЗОВЕ ФУНКЦИИ. НЕ ИМЕЕТ ЗНАЧЕНИЕ ГДЕ БЫЛА ОПРЕДЕЛЕНА ФУНКЦИЯ. Функцию можно передать в качестве свойства в объект.
/* function getPrice() {
  console.log(this.price);
}

const prod2 = {
  name: "AMD",
  price: 50,
  getPrice,
  //   По новому можно писать метод прямо в объекте
  getName() {
    console.log(this.name);
  },
};
prod2.getPrice(); /* получаем доступ к цене */
// prod2.getName(); /* Получаем имя через свой новый метод */

// МЕТОДЫ МОЖНО ПЕРЕДАВАТЬ ОТ ОДНОГО ОБЪЕКТА К ДРУГОМУ
// prod2.getName = prod1.getName;
// prod2.getName();
//  */

// ЦЕПОЧКИ ВЫЗОВОВ МЕТОДОВ. ПРИМЕР:
// split - превращяем в массив
// reverse - переворачиваем массив наоборот (первый параметр последний и т.д.)
// join - обратно склеили в строку
// ОНИ ВСЕ РАБОТАЮТ В ЦЕПОЧКИ, ПОТОМУ ЧТО КАЖДЫЙ МЕТОД ЕСТЬ У СЛЕДУЮЩЕГО В ЦЕПОЧКЕ
/* let str = "Hello World!";
const reversStr = str.split("").reverse().join("");
console.log(reversStr);
 */

function getPrice() {
  console.log(this.price);
}

function getName() {
  console.log(this.name);
  return this;
}

let prod3 = {
  name: "ARN",
  price: 20,
  getPrice,
  getName,
};
// prod3.getName().getPrice(); - напишет первое значение и вернет ошибку, т.к. у getName нет return (значит там indefined) и как следствие у него не можнт быть следущего метода getPrice. Если return this, все будет работать.
prod3.getName().getPrice(); /* все норм, т.к. getName будет объект prod3 и у него есть метод getPrice */

// ---------------ПОТЕРЯ КОНТЕКСТА------------------------
// МЕТОД CALL() - принимает первым аргументом объект в котором мы вызываем функцию.
// getPrice.call(prod3);

// МЕТОД
let prod4 = {
  name: "ARN",
  price: 20,
};
