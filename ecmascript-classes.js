'use strict';

class Person{
    constructor(name,age)
    
    {
        this.name = name
        this.age = age
    }
    
    sayHello(){
        console.log('Hello!!!');
    }
}



var kvin = new Person('Kvin', '28')


function display(object){
    alert(object);
}

display(kvin.age);