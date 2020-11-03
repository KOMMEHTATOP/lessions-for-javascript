/* Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:
firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки
*/

/* function firstFunc(arr, fn) {
  let str = "New value: ";
  for (i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    str += fn(arr[i]);
  }
  return str;
}

function handler1(el) {
  let newSlovo = el[0].toUpperCase() + el.slice(1);
  return newSlovo;
}
console.log(firstFunc(["my", "name", "is", "Trinity"], handler1));

function handler2(el) {
  return Number(el) * 10 + ", ";
}
console.log(firstFunc([10, 20, 30], handler2));

function handler3(el) {
  return `${el.name} is ${el.age}, `;
}

console.log(
  firstFunc(
    [
      { age: 45, name: "Jhon" },
      { age: 20, name: "Aaron" },
    ],
    handler3
  )
);

function handler4(el) {
  return el.split("").reverse().join("") + ", ";
}

console.log(firstFunc(["abc", "123"], handler4));
 */

//  ---------------------------------------------------------------------------
/* Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. */

/* function every(arr, fn) {
  if (!Array.isArray(arr)) {
    return new Error("Первый параметр не массив!");
  }
  if (!fn || typeof fn !== "function") {
    return new Error("Второй параметр не функция!");
  }
  return fn(arr);
}

function helper(arr) {
  for (let value of arr) {
    return value >= 5;
  }
}

every([5, 6, 5], helper);
console.log(every([2, 6, 5], helper));


ВТОРОЕ РЕШЕНИЕ!!!!!!!!!!!!!


function every(arr, fn) {
  if (!Array.isArray(arr)) {
    return new Error("Первый параметр не массив!");
  }
  if (!fn || typeof fn !== "function") {
    return new Error("Второй параметр не функция!");
  }

  let arrIndex = [];
  let arrEl = [];

  for (i = 0; i > arr.length; i++) {
    arrIndex.push(i);
    arrEl.push(arr[i]);
  }
  return fn(arrEl, arrIndex);
}

function helper(arrEl, arrIndex) {
  let res = [];
  for (let value of arrEl) {
    if (value < 5) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
}

every([5, 6, 2], helper);
console.log(every([6, 6, 5], helper));
 */
