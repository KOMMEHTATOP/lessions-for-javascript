const firstName = 'Bahtiyar';
const secondName = 'Basharov';
const age = 30;

let str;
str = 'Hi, my name is' + ' ' + firstName + ' ' + secondName;
str = '<ul>' +
        '<li>First name: ' + firstName + '</li>' + 
        '<li>Last name: ' + secondName + '</li>' + 
        '<li>Age: ' + age + '</li>' + 
      '</ul>';

      console.log(str);
      
// ES6

str = `
<ul>
  <li>First name: ${firstName}</li>
  <li>Last name: ${secondName}</li>
  <li>Age: ${age}</li>
</ul>
`;

document.body.innerHTML = str;