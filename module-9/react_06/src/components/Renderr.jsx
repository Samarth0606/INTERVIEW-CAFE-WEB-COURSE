import React from 'react'

function Renderr() {

    let luckyNumber = 7;
    let rn = Math.floor(Math.random()*10)


  return (
    <div>
        <h1 style={{backgroundColor:"yellow"}}>rn: {rn}</h1>
        { rn === luckyNumber ? <h1>Winner</h1> : <h1>TRY again</h1> }
    </div>
  )
}

export default Renderr



// import React from 'react'

// function Renderr() {

//     let luckyNumber = 7;
//     let rn = Math.floor(Math.random()*10)

//     let out = <h1>Winner</h1>
//     let out2 = <h1>TRY again</h1>


//   return (
//     <div>
//         <h1>rn: {rn}</h1>
//         { rn === luckyNumber ? out : out2 }
//     </div>
//   )
// }

// export default Renderr