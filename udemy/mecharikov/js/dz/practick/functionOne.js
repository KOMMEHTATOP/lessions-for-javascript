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

function guessTheNumber(num) {
  let cifra = Number(num);
  if (cifra > 10 || cifra < 0) {
    return new Error("Please provide number in range 0 - 10");
  } else if (cifra === "string" || cifra === isNaN) {
    return new Error("Please provide a valid number");
  }
  let rand = Math.floor(Math.random() * 10 + 1);
  if (cifra === rand) {
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
console.log(b);
