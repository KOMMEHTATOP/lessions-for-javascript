// МЕТОД .filter - Метод filter() вызывается на массиве и принимает функцию в качестве первого аргумента, которая определяет условие фильтрации, которое может быть бесконечно гибким. Создаёт новый массив, отфильтровывая все элементы, которые не проходят по условиям при выполнении callback() функции. Если callback() выдаёт true, то этот элемент будет включен в финальный массив. НЕ ИЗМЕНЯЕТ ИЗНАЧАЛЬНЫЙ МАССИВ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* let numbers = [1, 2, 3, 4, 5, 6];
function isEven(x) {
  return x % 2 === 0;
}
let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
-------------------------------------------------------------------------------------------------- */

// МЕТОД .map() превращает список значений в иные(модифицированные вами в переданной функции) значения, не изменяя оригинальный массив.
/* let numbers = [1, 2, 3, 4, 5, 6];
function double(x) {
  return x * 2;
}
let doubleNumbers = numbers.map(double);
console.log(doubleNumbers); 
----------------------------------------------------------------------------------------------------*/

// МЕТОД .reduce() аккумулирует все значения коллекции в единое значение. Второй аргумент может быть любым доступным типом в Javascript.
/* let numbers = [1, 2, 3, 4, 5, 6];
function sum(total, value) {
  return total + value;
}
let total = numbers.reduce(sum, 0);
console.log(total); 
------------------------------------------------------------------------------------------------------*/
// ФУНКЦИЯ ВНУТРИ ФУНКЦИИ - НАЧАЛО ПЕ...ЦА!!!!!!!!!!!!!!!!

// Создаем функцию с любым параметром
/* function doWithLoading(fn) {
  console.log("Начало загрузки");

  let returnValue = fn();
  console.log("Конец загрузки");
  return returnValue;
}
function process() {
  console.log("Загружаем...");
}

doWithLoading(process); */

// ------------------------------------------------------------------------------------------------------

// ФУНКЦИИ ВОЗВРАЩАЮЩИЕ ФУНКЦИЮ....
/* 
function createGenerator(prefix) {
  let index = 0;
  return function generateNewID() {
    index++;
    return prefix + index.toString();
  };
}
let generateNewID = createGenerator("вызов номер: ");
console.log(generateNewID());
------------------------------------------------------------------------------------------------------ */

// ЗАДАЧА: Получить массив элементов из длинны элеменов (т.е. [8, 5, 4, 6])
/* const names = ["Bahtiyar", "Denis", "Ylia", "Maksim"];

function mapArray(arr, fn) {
  const res = [];
  for (i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

// Функция указвающая количество символов
function nameLength(el) {
  //   console.log(el);
  return el.length;
}
// Функция верхний регистр
function nameToUppercase(el) {
  return el.toUpperCase();
}

// mapArray(name, nameLength);
const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUppercase);
console.log(result);
console.log(result2); 
-------------------------------------------------------------------------------------------------------*/

// ЗАДАЧА:
/* function greening(firstName) {
  return function (lastName) {
    return `Hello, ${firstName} ${lastName}`;
  };
} */
// ПОМОЙНЫЙ (ПОДРОБНЫЙ) ВАРИАНТ:
/* const testGreeting = greening("Bahtiyar");
const fullName = testGreeting("Basharov"); */

// НОРМАЛЬНЫЙ ВАРИАНТ: Можно сразу указать параметр вложенной функции
/* const fullName = greening("Bahtiyar")("Basharov");

console.log(fullName); */
// ------------------------------------------------------------------------------------------

// ЕШЕ ПРИМЕР
/* function question(job) {
  if (job === "developer") {
    return function (name) {
      return `${name}, что такое JS?`;
    };
  } else if (job === "teacher") {
    return function (name) {
      return `${name}, какой предмет вы преподаете?`;
    };
  }
}

const developerQuestion = question("developer");
console.log(developerQuestion("Baha"));

const teacherQuestion = question("teacher");
console.log(teacherQuestion("Baha")); */

// ----------------------------СОЗДАТЬ СЛОВАРЬ!!!!!!!!!!!!!!!!!!!!!!!!---------------------------
/* Это будет объект в котором название ключа будет должность, а значение вопрос */
/* const jobDictionary = {
  developer: "что такое JS?",
  teacher: "какой предмет вы преподаете?",
}; */

// ТАЖЕ ЗАДАЧА ЧТО ВЫШЕ, НО С ИСПОЛЬЗОВАНИЕМ СЛОВАРЯ
function question(job) {
  // СОЗДАЕМ СЛОВАРЬ!
  const jobDictionary = {
    developer: "что такое JS?",
    teacher: "какой предмет вы преподаете?",
  };
  // ОБРАЩЕНИЕ К СЛОВАРЮ
  return function (name) {
    return `${name}, ${jobDictionary[job]}`;
  };
}

const developerQuestion = question("developer");
console.log(developerQuestion("Baha"));

const teacherQuestion = question("teacher");
console.log(teacherQuestion("Baha"));
