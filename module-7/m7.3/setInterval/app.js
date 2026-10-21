


let id1 = setInterval( ()=>{
    console.log("hello");
} , 2000 )

setTimeout( ()=>{
    clearInterval(id1)
} , 20000 )


