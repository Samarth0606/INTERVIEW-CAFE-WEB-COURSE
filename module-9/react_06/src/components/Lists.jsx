import React from 'react'

function Lists() {

    let arr = ["sam" , "mav" , "kash" , "simba"]

  return (
    <div>
        {
            arr.map((item,index)=>{
                return(
                    <h1 key={index} style={{color: (index%2==0) ? "red" : "green"}} > {index}: {item} </h1>
                )
            })
        }
    </div>
  )
}

export default Lists