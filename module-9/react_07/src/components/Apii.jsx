import { useEffect } from "react";
import { useState } from "react";

function Apii() {

    const [dataa,setDataa] = useState([])
    
    
    useEffect(()=>{
        let API = "https://jsonplaceholder.typicode.com/posts";
        async function calling(){
            let data = await fetch(API);
            let resp = await data.json();
            console.log(resp);
        }
        calling()
        
    } , [])


  return (
    <div>Apii</div>
  )
}

export default Apii



// ------------------------------------------


// import { useEffect } from "react";
// import { useState } from "react";

// function Apii() {

//     const [dataa,setDataa] = useState([])
    
    
//     useEffect(()=>{
//         let API = "https://jsonplaceholder.typicode.com/posts";
//         fetch(API)
//         .then((data)=>{
//             // console.log(data) 
//             return data.json()
//         })
//         .then((resp)=>{
//             console.log(resp);
//             setDataa(resp)
//         })
//         .catch((err)=>{console.log(err) })
//     } , [])


//   return (
//     <div>Apii</div>
//   )
// }

// export default Apii