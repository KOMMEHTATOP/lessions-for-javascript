const user = {
  firstName: 'Bahtiyar',
  age: 18,
  isAdmin: true,
  email: 'test@test.com',
  'user-adress': {
    city: 'Moskow'
  },
  skills: ['html', 'css', 'js']
};

let value;
let prop = 'skills';

value = user.firstName;
value = user['isAdmin'];
value = user['user-adress'];
value = user['user-adress'].city;
value = user[prop][1];

user.firstName = 'Baha'

value = user.firstName;

user.info = 'Some info';

value = user.info;

user['user-adress'].city = 'Volga';
user['user-adress'].country = 'Russia';


console.log(value);
console.log(user);


// ДОМАШНЕЕ ЗАДАНИЕ №3 ОБЪЕКТЫ (ОСНОВА)

// 1. Создать объект с полем product, равным ‘iphone’
// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
// 3. Добавить поле details, которое будет содержать объект с полями model и color

const newObject = {
  product: 'iphone',
  price: 1000,
  currency: 'dollar',
  details: {
    model: '',
    color: ''
  }
};

console.log(newObject);


