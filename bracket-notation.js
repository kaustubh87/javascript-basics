'use strict';

var person = {
    name: 'Kvin',
    age : '28'
}

person['name'] = 'kvin'
console.log(person['name'])

console.log(Object.getOwnPropertyDescriptor(person,'name'))