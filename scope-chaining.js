var globalvariable =1;

function outer(){
    var var1 = 4;
    function inner()
    {
        var var2 = 150;
        
        return globalvariable+var1+var2;
    }
    return inner();
}

console.log(outer());