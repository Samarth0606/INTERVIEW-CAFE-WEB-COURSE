import React from 'react'

function Person( {naam,age,isMale} ) {

    console.log(naam);
    console.log(age);
    console.log(isMale);
    

  return (
    <div>Person

        <h1>Name: {naam} </h1>
        <h1>Age: {age} </h1>
        <h1>isMale: { JSON.stringify(isMale) } </h1>
    </div>
  )
}

export default Person

// -------------------------------------------------------------

// import React from 'react'

// function Person( props ) {

//     console.log(props); //objects
//     console.log(props.naam); //objects
//     console.log(props.age); //objects
//     console.log(props.isMale); //objects
    

//   return (
//     <div>Person

//         <h1>Name: {props.naam} </h1>
//         <h1>Age: {props.age} </h1>
//         <h1>isMale: { JSON.stringify(props.isMale) } </h1>
//     </div>
//   )
// }

// export default Person