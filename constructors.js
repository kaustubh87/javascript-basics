'use strict';

/*function Person()
{
    this.name = 'Kvin',
    this.age = '28'
}
*/


function Person(name, age){
    this.name = name;
    this.age = age;
        
}
var kvinObj = new Person('kvin','30');



function display(object)
{       
    console.log(object);
}

display(kvinObj);


//Object.create illustration

var person = Object.create(Object.prototype, 
    {
        name:{
            value : 'Kvin',
            enumerable: true,
            writable: true,
            configurable: true
        },
        age:{
            value: '28',
            enumerable: true,
            writable: true,
            configurable: true
        }
});

display(person);