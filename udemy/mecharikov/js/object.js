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