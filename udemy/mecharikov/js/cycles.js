// Есть несколько циклов: While, do while, for, for of, for in

// WHILE - состоит из нескольких частей. Итератор (сколько раз нужно считать), условие (пока выражение true будет выполняться)
// пока(true) {тело выполняется}
// while() {}
// итератор i
/* let i = 0;
while(i++ < 10) {
  в скобочках нужно указать любое выражение которое когда нибуд станет false
  console.log(i);
} */
// _________________________________________________________________
// DO WHILE - сначала выполнит действие, потом произойдет какое-то условие

/* let i = 0 

while(i--) {
  console.log(i);
}
do {
  console.log('action')
  }  while (i > 0) */

// ___________________________________________________________________
// FOR (инициализатор; условие; шаг)
/* for (let i = 0; i < 10; i++) {
  console.log(i);
} */
// Если нужно пропустить итерацию continue
/* for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue
  }
  console.log(i);
} */
// Если нужно остановить цикл break
/* for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break
  }
  console.log(i);
} */


/* let str = 'Hello'
let res = ''
for (let i = 0; i < str.length; i++) {
  res += str[i] + '*'
}
console.log(res); */

// РАБОТА С МАССИВАМИ

/* let colors = ['red', 'blue', 'yellow', 'white', 'black']
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
  colors[i] = colors[i].toUpperCase()
}
console.log(colors); */


// ПЕРЕБИРАЕМ МАССИВЫ С ОБЪЕКТАМИ

/* const users = [
  {
    name: 'Baha',
    age: 30
  },
  {
    name: 'Den',
    age: 25
  },
  {
    name: 'Oleg',
    age: 15
  },
  {
    name: 'Gomo',
    age: 10
  }
]; */

// Доступ ко всем элементам в массиве (например ко всем именам)
/* for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
} */

// Создание нового объекта из массива в другом объекте
// ключи это name, а значения объекты пользователя
/* const usersObject = {};
for (let i = 0; i < users.length; i++) {
  usersObject[users[i].name] = users[i]
}

console.log(usersObject);
 */
// __________________________________________________
// FOR IN - нужен для перебора объектов
/* const users =
  {
    name: 'Baha',
    age: 30
  }; */
  // Тут нет итератора. Этот цикл пройдет по всем ключам объекта
  // называем переменную которую хотим создать, дальше in  и называем объект в котором перебираем. 
/*   for (let key in users) {
    В key будет содержаться ключ по каждой операции
    console.log(key);
    Чтобы получить значения ключей
    console.log(users[key]);
  } */

  // ______________________________________________________
  // FOR OF 
/*   for (let value of users) {
    console.log(value);
    
  } */