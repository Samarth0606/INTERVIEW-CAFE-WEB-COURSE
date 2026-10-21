
//accessing a variables even before its initialisation

//varible hoisting
console.log(a);
var a = 10;
console.log(a);

//fn hoisting
sam();
function sam(){
    console.log(b); //special error - DTZ
    let b = 200;
    console.log(b);
}



