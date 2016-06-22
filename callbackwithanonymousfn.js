function multiplyByTwo(a,b,c,callback)
{
    var i, ar =[];
    
    for(i=0;i<3;i++)
        {
            ar[i] = callback(arguments[i] * 2);
        }
    return ar;
    
};


alert(multiplyByTwo(3,2,5,function(a){
    return a+1;
}));