var person = "Person1";
var anotherPerson = person;
person = "Person2";

//console.log(person);
//console.log(anotherPerson);

/*Object Literals*/

var myBooks = {};

myBooks = {
    name: 'Sherlock',
    pages: 128,
    title: 'Hello World',
    contents: function(){  
        //console.log('This book is very good');
    }
    
}

//console.log(myBooks);
//console.log(myBooks.contents());

/*Object constructors*/

var mango = new Object();
mango.color = "Orange";
mango.shape = "Round";
mango.sweetness = 8;

mango.sweetnessLevel = function(){
    //console.log(" I am very sweet");
}


//console.log(mango);
//console.log(mango.sweetnessLevel());


/* Constructor pattern for creating Objects */

function Fruit(name, color, shape, sweetness)
{
    this.color = color;
    this.name = name;
    this.shape = shape;
    this.sweetness = sweetness;
    
    this.showName = function(){
        //console.log("This is a type of " +name);
    }
}

var orange = new Fruit("orange", "yellow", "round", 7);
//console.log(orange.showName());

/* Prototype Pattern for Creating Objects */

function Fruit(){
    
}

Fruit.prototype.color="yellow";
Fruit.prototype.sweetness = 8;
Fruit.prototype.name = "Mango";

Fruit.prototype.showName = function(){
    console.log('I am a ' +this.name);
}


var mango = new Fruit();
console.log(mango.showName());

/* Prototype based property / inheritance */

function Plant(){
    this.color = "red";
    this.size = "circle";
}

Plant.prototype.showDetails = function(){
    //console.log('I am a fruit having color ' +this.color + ' and shape ' +this.size);
}

function Fruit(color, size)
{
    this.color = color;
    this.size =size;
    
}


Fruit.prototype = new Plant();

var banana = new Fruit('brown', 'rectangle');

//console.log(banana.showDetails());


function parent(){
    this.age = 80;
}


parent.prototype.sex = 'Male';

var dad = new parent();
dad.age = 62;
console.log(dad.age);

console.log(dad.sex);

console.log(dad.toString());













