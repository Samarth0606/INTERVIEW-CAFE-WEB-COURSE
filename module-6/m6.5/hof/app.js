
//hof
// function a(fn){
//     console.log("i am inside A");
//     fn()
// }

// function b(){
//     console.log("i am inside B");
// }

// a(b);

// ------------------------------

function a(){ //hof
    console.log("i am inside A");

    function b(){
        console.log("i am inside B");
    }
    return b;
}

a();

