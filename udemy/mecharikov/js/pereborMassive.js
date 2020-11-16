// ПЕРЕБИРАЮЩИЕ МЕТОДЫ

// forEach - просто перебор массива. Ничего не возвращает. 
// filter - фильтрует
// map - ввозвращает новый массив, основываясь на результате callback
// reduce - разворачивает массив
// some/every - позволяет проверить если ли в массиве что-то
// sort - сортровка
// find - поиск элемента в массиве

const users = [
  {
    _id: "5cdce6ce338171bb473d2855",
    index: 0,
    isActive: false,
    balance: 2397.64,
    age: 39,
    name: "Lucile Finley",
    gender: "female",
    company: "ZOXY",
    email: "lucilefinley@zoxy.com",
    phone: "+1 (842) 566-3328",
    registered: "2015-07-12T09:39:03 -03:00"
  },
  {
    _id: "5cdce6ce0aa8d071fa4f4cc5",
    index: 1,
    isActive: true,
    balance: 2608.48,
    age: 33,
    name: "Woodward Grimes",
    gender: "male",
    company: "FORTEAN",
    email: "woodwardgrimes@fortean.com",
    phone: "+1 (960) 436-3138",
    registered: "2014-09-08T03:24:39 -03:00"
  },
  {
    _id: "5cdce6ce103de120d32d6fe4",
    index: 2,
    isActive: true,
    balance: 1699.99,
    age: 25,
    name: "Robinson Coleman",
    gender: "male",
    company: "GENMOM",
    email: "robinsoncoleman@genmom.com",
    phone: "+1 (852) 543-3171",
    registered: "2019-04-23T08:24:58 -03:00"
  },
  {
    _id: "5cdce6cebada7a418d8ccb3d",
    index: 3,
    isActive: true,
    balance: 2621.84,
    age: 25,
    name: "Austin Benton",
    gender: "male",
    company: "ZILIDIUM",
    email: "austinbenton@zilidium.com",
    phone: "+1 (977) 573-2627",
    registered: "2016-08-02T10:08:24 -03:00"
  },
  {
    _id: "5cdce6ced81fe99596d9cef5",
    index: 4,
    isActive: true,
    balance: 1297.31,
    age: 37,
    name: "Casandra Stout",
    gender: "female",
    company: "ANACHO",
    email: "casandrastout@anacho.com",
    phone: "+1 (929) 465-3804",
    registered: "2018-04-14T11:27:26 -03:00"
  },
  {
    _id: "5cdce6ce6c3ae6c4d6f39e88",
    index: 5,
    isActive: false,
    balance: 2165.49,
    age: 20,
    name: "Valencia Carrillo",
    gender: "male",
    company: "XEREX",
    email: "valenciacarrillo@xerex.com",
    phone: "+1 (977) 522-3378",
    registered: "2014-02-14T11:45:27 -02:00"
  }
];

// ----------------------forEach--------------------
// Может принимать как 1 так и несколько значений
/* users.forEach((user, i, arr) => {
  console.log(user, i, arr)
}); */

// --------------------filter-----------------------
// Хотим отсортировать людей с возрастом меньше 30. 
// Фильтр вернет новый массив основываясь на результате вызова callback. Все что будет true запишется в новый массив, false проигнорируется. 
/* const userLess30 = users.filter(user => user.age > 30)
console.log(userLess30)

const activeUsers = users.filter(user => user.isActive === true )
console.log(activeUsers) */


// ---------------------------map----------------------------------
// Создает новый массив из того что возвращает callback
// мы хотим получить все имена пользователей. MAP принимает также 3 аргумента (необзятельно) и вернет новый массив состоящий из тех значений которые вернет на каждой иттерации колбек.
// const usersName = users.map((user) => user.name) 
// Формируем новый массив с интересующими данными (Имя и возраст)
/* const usersName = users.map((user) => ({ name: user.name, age: user.age})) 
console.log(usersName) */

// ----------------------------reduce------------------------------------
// Позволяет преобразовать массив в другу сущность. Или что-то посчитать.
// Принимает 2 агрумента (первый это колбэк c 2 аргументами (acc, user) - первое значение это аккумулятор acc (в ней хранится результат предыдущей иттерации), а второе значение колбэка это сам user. Второй аргумент метода это стартовое значение, в данном случае 0)

// К примеру посчитать баланс всех users\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Длинная запись
/* const totalBalance = users.reduce((acc, user) => {
  console.log(acc)
  return acc += user.balance
}, 0);
console.log(totalBalance) */

// Тоже самое но покороче
/* const totalBalance = users.reduce((acc, user) => acc += user.balance, 0);
console.log(totalBalance) */

// Формируем из массива объект\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Например мы хотим объект где ключем будет _id, значением весь объект пользователя. 
/* const usersObj = users.reduce((acc, user) => {
  acc[user._id] = user;
  return acc
}, {})
console.log(usersObj)  */

// --------------------some/every------------------------------
// Метод Some возвращает true/false, если хотя бы для 1 элемента массива колбэек вернет true
/* const isMale = users.some((user) => user.gender === 'male')
console.log(isMale) */
// Метод Every проверяет каждый элемент массива вернет 
/* const isAllMale = users.every((user) => user.gender === 'male')
console.log(isAllMale) */
// Проверить всем ли пользователям больше 18 лет\\\\\\\\\\\\\\\\\\\\\\\
/* const isAll18 = users.every(user => user.age > 18)
console.log(isAll18) */

// -----------------------find----------------------------------------
// Ищем пользователя Casandra Stout. Тут все просто. 
/* const user = users.find(user => user.name === 'Casandra Stout' )
console.log(user) */

// ---------------------------sort-----------------------------------
// ИЗМЕНЯЕТ ИСХОДНЫЙ МАССИВ
// Сортирует по лексическому значению (как строки). Т.е. по порядку от A до Я
/* const strArr = ['denis', 'bill', 'anna']
strArr.sort()
console.log(strArr) */
// Массив чисел так не работает!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! К примеру ниже 7 в лексическом значении больше других чисел.
/* const numArr = [10, 7, 44, 32]
numArr.sort()
console.log(numArr) */

// Чтобы все нормально работало нужно передать callback, в котором есть 3 значения. Больше, 0, меньше. Т.е. если 10 - 7 равно 3, значит 10 больше 7 и нужно поставить 7 вперед, если 7 - 44 равно -37 значит все ок, если значение 0, то ничего не происходит. Так работает сортировка ниже prev - next
/* const numArr = [10, 7, 44, 32]
numArr.sort((prev, next) => prev - next)
console.log(numArr) */

// Сортируем пользователей в массиве по возрасту
users.sort((prevUser, nextUser) => prevUser.age - nextUser.age)
console.log(users)