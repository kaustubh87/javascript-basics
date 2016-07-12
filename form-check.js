var name = document.getElementById('Name');

name.onfocus = function(){
    if(name.value== "your name")
        {
            name.value = "";
        }
}

name.onblur = function(){
    if(name.value==" ")
        {
            name.value ="your name";
        }
}