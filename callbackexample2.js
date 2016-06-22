function multiplybyTwo(a,b,callback){
    
    var i, ar= [];
    for(i=0;i<2;i++)
        {
            ar[i] = callback(arguments[i]*2);
        }
    return ar;
}

function addByOne(a)
{
    return a +1;
}

alert(multiplybyTwo(3,5,addByOne));