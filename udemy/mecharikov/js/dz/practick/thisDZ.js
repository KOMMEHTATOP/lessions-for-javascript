// // --------------------------------------------ЗАДАЧА №1------------------------------------------
/* Создать объект, который описывает ширину и высоту
прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {width:..., height:..., getSquare:...};
 */

/* const rectangleObj = {
  widthObj: 80,
  heightObj: 30,
  getSquare,
};

console.log(rectangleObj.getSquare());

function getSquare() {
  return this.widthObj * this.heightObj;
} */

// --------------------------------------------ЗАДАЧА №2------------------------------------------
/* Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
price: 10,
discount: '15%',
... };
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5
 */

/* const priceObj = {
  price: 100,
  discount: "15%",
  getPrice,
  getPriceWithDiscount,
};

function getPrice() {
  return this.price;
}
function getPriceWithDiscount() {
  return this.price - this.price * (parseInt(this.discount) / 100);
}

console.log(priceObj.getPrice());
console.log(priceObj.getPriceWithDiscount());

const anyObj = {
  price: 200,
  discount: "23%",
  //   getPrice,
  //   getPriceWithDiscount,
};

console.log(getPrice.call(anyObj, "*")); /* Метод call - первым аргументом указываем контектс вызова, дальше дополнительный аргумент.*/
// console.log(getPriceWithDiscount.apply(anyObj)); /* Тоже самое но работает с массивами, хз почему нет ошибки */
// console.log(getPriceWithDiscount.bind(anyObj, "*")); /* Вызывает  */ */

// --------------------------------------------ЗАДАЧА №3------------------------------------------

/* Создать объект, у которого будет поле высота и метод “увеличить
высоту на один”. Метод должен возвращать новую высоту:
object.height = 10;
object.inc(); // придумать свое название для метода
object.height; // 11; */

/* const obj = {
  heightObj: 10,
  incrHeigth,
};
function incrHeigth() {
  return (this.heightObj += 1);
}
console.log(obj);
obj.incrHeigth();
console.log(obj); */

// --------------------------------------------ЗАДАЧА №4------------------------------------------
/* Создать объект “вычислитель”, у которого есть числовое свойство
“значение” и методы “удвоить”, “прибавить один”, “отнять один”.
Методы можно вызывать через точку, образуя цепочку методов:

const numerator = {
value: 1,
double: function () {...},
plusOne: function () {...},
minusOne: function () {...},
}

numerator.double().plusOne().plusOne().minusOne();
numerator.value // 3 */

const numerator = {
  value: 1,
  double: function () {
    this.value *= 2;
    return this;
  },
  plusOne: function () {
    this.value++;
    return this;
  },
  minusOne: function () {
    this.value--;
    return this;
  },
};

// console.log(numerator.double());
// console.log(numerator.plusOne());
// console.log(numerator.minusOne());

numerator.double().plusOne().plusOne().minusOne();
numerator.value;
console.log(numerator.value);
