

const API = "https://jsonplaceholder.typicode.com/posts";

// fetch("https://jsonplaceholder.typicode.com/posts")
fetch(API)
.then((data)=>{
    // console.log(data)
    return data.json()
})
.then((resp)=>{
    console.log(resp);
})
.catch((err)=>{
    console.log(err)
})


// fetch and promise - async await
