'use strict'; //it allows js to throw errors in places js fails. Using strict mode disallows using deprecated
//form of js

var person = {
    'name': 'kvin',
    'age': '23'
};

person.sayHello = function(){
    alert("Hello World");
}


person.sayHello();