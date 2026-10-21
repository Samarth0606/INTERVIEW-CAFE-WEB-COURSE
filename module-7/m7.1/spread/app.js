


let a = [10,20,30]
let b = [40 , 50]

let c = [...a , ...b] // [ 10 , 20 , 30 , 40 , 50 ]
console.log(c);

// ----------------------


let obj1 = {a:10, b:20}
let obj2 = {b:30, d:40}


let obj3 = {...obj1 , ...obj2}
console.log(obj3);
