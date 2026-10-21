


//promise return
// async function sam(){
//     return 100
// }

// console.log( sam() );

// async - akeela possible hai
// await - akele nahi (always used with async fn)

// ------------

// async function calling(){
//     const API = "https://jsonplaceholder.typicode.com/posts";
//     let data = await fetch(API);
//     // console.log(data); //meta
//     let resp = await data.json()
//     console.log(resp); //full
// }
// calling();

// -------------------

async function calling(){
    const API = "https://jsonplaceholder.typicode.com/posts";
    let data = await fetch(API);
    // console.log(data); //meta
    let resp = await data.json()
    console.log(resp); //full
}

console.log("hello 1");
calling();
console.log("hello 2");
console.log("hello 3");


// 1 resp 2 3
