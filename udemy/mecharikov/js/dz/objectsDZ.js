/* Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.


Вопросы к этому заданию
Создать объект с полем product, равным ‘iphone’

Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

Добавить поле details, которое будет содержать объект с полями model и color */

// Создать объект с полем product, равным ‘iphone’
const newObject = {
  product: 'iphone'
}
// Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
newObject['price'] = '1000'
newObject['currency'] = 'dollar'
// Добавить поле details, которое будет содержать объект с полями model и color
newObject['details'] = {}
newObject['details'].model = '2210'
newObject['details'].color = 'yellow'

console.log(newObject);
