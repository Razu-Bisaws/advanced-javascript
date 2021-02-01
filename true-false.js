//Falsy value
//false
//0;
//"";
//undefine;
//null;
//Nan
//Truthy value
//'0', '', [],
let name = "false"
if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}