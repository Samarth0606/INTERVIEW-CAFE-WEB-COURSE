function a(fn){ //hof
    console.log("i am inside A");
    fn()
}

//cb fn
function b(){
    console.log("i am inside B");
}

a(b);

// jis fn ko aap a argument pass krte hai usse CB kehte hai