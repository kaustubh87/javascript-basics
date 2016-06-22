var namedfunction = function(a,b)
{
    return a()+b();
    
}

function a(){
    return 1; 
}

function b(){
    return 2;
}

alert(namedfunction(a,b));