// ES5
const firstName = 'Bahtiyar';
const lastName = 'Basharov';
const age = 33;

let str;

str = 'Hi, my name is ' + firstName + ' ' + lastName

str = '<ul>' + 
'<li>Name: '+ firstName + '</li>' + 
'<li>Lastname: ' + lastName + '</li>' + 
'<li>Age: ' + age + '</li>' + 
'</ul>';

// ES6 - ввели значек ${}, который упрощает запись и чтение кода. Также в переменной можно проводить работы с DOM.
str = `
 <ul>
 <li>Firstname: ${firstName}</li>
 <li>lastName: ${lastName}</li>
 <li>Math.random: ${Math.random()}</li>
 <li>5+5: ${5+5}</li>
 </ul>
`

document.body.innerHTML = str

// console.log(str);