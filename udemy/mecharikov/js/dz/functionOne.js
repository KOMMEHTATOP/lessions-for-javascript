/* Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
Если нет ни одного аргумента, вернуть ноль: multiply() // 0
 */
/* function multiply() {
  if (arguments.length !== 0) {
    let res = 1;
    for (let i = 0; i < arguments.length; i++) {
      res *= arguments[i];
    }
    console.log(res);
    return res;
  } else {
    console.log(0);
    return 0;
  }
}
multiply(1, 2, 3, 4); */

//  ---------------------------------------------------------------------------------------
/* Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”. */
/* 
function reverseString(str) {
  let res = String(str);
  let naob = "";
  for (let i = res.length; i--; ) {
    naob += res[i];
  }
  console.log(naob);
  return naob;
}
reverseString("test");
reverseString("");
reverseString(null);
reverseString(undefined);
reverseString();
 */
// -----------------------------------------------------------------------
/* Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: */

/* function getCodeStringFromText(str) {
  let strText = String(str);
  let strNew = "";
  for (let i = 0; i < strText.length; i++)
    strNew += strText.charCodeAt([i]) + " ";
  console.log(strNew);
  return strNew.trim();
}
getCodeStringFromText(undefined);
 */
// ------------------------------------------------------------------------------
/* Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа. */

/* function guessTheNumber(num) {
  let cifra = Number(num);
  if (cifra > 10 || cifra < 0) {
    return new Error("Please provide number in range 0 - 10");
  } else if (cifra === "string" || cifra === isNaN) {
    return new Error("Please provide a valid number");
  }
    let rand = Math.floor(Math.random() * 10 + 1);
    // if (cifra === rand) {
    console.log("You win!");
    return cifra;
  } else {
    console.log(
      `You are lose, your number is ${cifra}, the random number is ${rand}`
    );
    return cifra;
  }
}
let b = guessTheNumber("2");
console.log(b); */

// ----------------------------------------------------------------------------------------

/* Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
Данное задание выполните после того как познакомитесь с методами массивов. */
/* function getArray(num) {
  let cifra = parseInt(num);
  let arrr = [];
  for (let i = 1; i <= cifra; i++) {
    // console.log(i);
    arrr.push(i);
  }
  return arrr;
}
getArray(10);
console.log(getArray(10)); */
// --------------------------------------------------------------------------------------------------

/* Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива. Данное задание выполните после того как познакомитесь с методами массивов:
doubleArray([1,2,3]) // [1,2,3,1,2,3] */

/* function doubleArray(arr) {
  let newDoublleArray = arr.concat(arr);
  console.log(newDoublleArray);
  return newDoublleArray;
}
doubleArray([1, 2, 3]); */

// -------------------------------------------------------------------------------------------------
/* Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений. Данное задание выполните после того как познакомитесь с методами массивов: 
changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д. */

/* function changeCollection(arr) {
  let res = [];
  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      let value = arguments[i].slice(1);
      res.push(value);
    } else {
      console.error(`Is not massive`);
    }
  }
  return res;
}
changeCollection([1, 2, 3], 2);

let firstFunction = changeCollection([1, 2, 3], ["a", "b", "c"], ["agh", "bd", "cc"]);

function arrayToString(ewq) {
  let str = "";
  for (let i = 0; i < ewq.length; i++) {
    let result = "[" + ewq[i].toString() + "]" + ", ";
    // console.log(result);
    str += result;
  }
  str = str.slice(0, -2);
  // console.log(str);
  return str;
}
arrayToString(firstFunction);
console.log(arrayToString(firstFunction)); */

// ----------------------------------------------------------------------
/* Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Если что-то не переданно то возвращать объект ошибки return new Error('Error message') Возвращать новый массив с пользователями соответсвующие указанным параметрам. */

/* const users = [
  {
    _id: "5e36b779dc76fe3db02adc32",
    balance: "$1,955.65",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: "Berg Zimmerman",
    gender: "male",
  },
  {
    _id: "5e36b779d117774176f90e0b",
    balance: "$3,776.14",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: "Deann Winters",
    gender: "female",
  },
  {
    _id: "5e36b779daf6e455ec54cf45",
    balance: "$3,424.84",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: "BAHA",
    gender: "male",
  },
];

function filterUsers(arr, key, value) {
  // Проверка входных значений
  if (!Array.isArray(arr)) return new Error("Not a massive");
  if (key === "string" || key === "") return new Error("Not have key");
  if (value === undefined || value === null) return new Error("Not have value");

  let result = [];
  // Выделяем каждый объект отдельно и заносим в отдельную переменную
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    // Перебираем все ключи в объекте, также присваиваем в переменную
    for (let currentKey in obj) {
      let objValue = obj[currentKey];
      if (currentKey === key && objValue === value) {
        result.push(obj["name"]);
      }
    }
  }
  console.log(result);
  return result;
}
filterUsers(users, "age", 36); */
