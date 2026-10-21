

function vohra(name , age){
    this.naam = name;
    this.age = age;
    this.fun = function(){
        console.log('hello sam');
    }
}

let o1 =  new vohra("Samarth" , 26)
let o2 =  new vohra("Maverick" , 4)
console.log(o1);
console.log(o2);


// ----------------------------------
