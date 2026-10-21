
// how `this` keyword is called.

// 1. direct calling -> window (global object)

// function sam(){
//     console.log(this);
// }
// sam()

// 2. object calling => object jiske andar vo  fn hota hai

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this);
//     }
// }
// obj.fn()


// ----------------------------

// eg:
// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this);    
//     }
// }


// obj.fn()

// let ans = obj.fn;
// ans()

// -----------------------------

// 3. constructor fn => this - newly created object

// function Sam(){
//     this.age = 26;
// }

// let o1 = new Sam()
// let o2 = new Sam()

// -----------------------------


// 4. arrow fn => parent ki this value point


// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this);
//     }
// }

// obj.fn();

// let obj = {
//     a: 10,
//     fn: ()=>{
//         console.log(this);
//     }
// }

// obj.fn();

let obj = {
    a: 10,
    fn: function(){
        console.log(this , "1"); //window
        let sam = ()=>{
            console.log(this , "2");// window
        }
        sam()
    }
}

// obj.fn();
let ans = obj.fn;
ans()



// let sum = (a,b)=>{
//     return a+b
// }

// sum(10,20)
