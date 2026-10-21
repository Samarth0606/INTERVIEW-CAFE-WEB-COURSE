

// function Vohra(name , age){
//     this.naam = name;
//     this.age = age;
//     this.fun = function(){
//         console.log('hello sam');
//     }
// }

// let o1 =  new Vohra("Samarth" , 26)
// let o2 =  new Vohra("Maverick" , 4)
// console.log(o1);
// console.log(o2);

// --------------------------

class Vohra{
    constructor(name,age){
        this.naam = name;
        this.age = age;
    }
    fun(){
        console.log('hello sam');
    }
}

class Sam extends Vohra{
    constructor(name,age,gender){
        super(name,age)
        this.gender = gender;
    }
    bye(){
        console.log('bye sam');
    }
}


let o1 =  new Vohra("Samarth" , 26)
let o2 =  new Sam("Maverick" , 4 , "male")
console.log(o1);
console.log(o2);







