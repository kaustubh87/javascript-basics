'use strict';


Object.defineProperty(Array.prototype,'last' ,{
    get: function(){
        return this[this.length-1];
    }
});

var array1 = ['ball1','ball2','ball3'];

console.log(array1.last);