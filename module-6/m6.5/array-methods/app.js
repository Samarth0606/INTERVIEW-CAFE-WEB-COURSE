

// forEach - method (not a loop)

// let arr = [10,20,30,40 , "sam" , true , undefined] //heterogenous


// let arr = [10,20,30,40]

// foreach doesnot returns anything
// let ret = arr.forEach( function(item,index){
//     console.log(item, ":" ,  index);
//     return 100;
// } )
// console.log(ret); //undefined

// -------------------

// map() => new Array return length same as of original array
// let newArr = arr.map( function(item,index){
//     return item*item*item
// } )

// console.log(arr);
// console.log(newArr);


// -------------------

// filter()-> returns truthy values (sach)
// -> new array - length fixed nhi rehti
let arr = [10,20,30,40]
let ret = arr.filter( function(item,index){
    if(item >= 30){
        return item
    }
} )

console.log(arr);
console.log(ret);



