import { useState } from "react"

function User( {naam} ) {

    let [username,setUsername] = useState(naam);

    function handleNaam(){
    //    username = "anynomous"
        setUsername("Anonymous")
    }

  return (
    <div>
        <h1> User: {username} </h1>
        <button onClick={handleNaam}s>Logout</button>
    </div>
  )
}

export default User




// function User( {naam} ) {

//     let username = naam;

//     function handleNaam(){
//         console.log(username , "before");
//         username = "Anonymous"
//         console.log(username , "after");
//     }

//   return (
//     <div>
//         <h1> User: {username} </h1>
//         <button onClick={handleNaam}s>Logout</button>
//     </div>
//   )
// }

// export default User