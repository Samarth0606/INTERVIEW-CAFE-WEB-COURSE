

// const API = "https://jsonplaceholder.typicode.com/posts"

// axios.get(API) //return promise
// .then((resp)=>{
//     console.log(resp.data);
// })
// .catch((err)=>{
//     console.log(err);
// })

// -------------------

// async-await

async function callingAPI(){
    try{
        const API = "https://jsonplaceholder.typicode.com/posts"
        let resp = await axios.get(API)
        if(resp.status === 200){
            console.log(resp.data);
        } else{
            console.log("API not working");
        }
    }
    catch(err){
        console.log(err); 
    }
}
callingAPI()

