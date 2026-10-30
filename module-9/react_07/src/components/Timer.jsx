import { useEffect } from "react";
import { useState } from "react"

function Timer() {

    const [time,setTime] = useState(0);

    useEffect(()=>{
        let ID = setInterval(()=>{
            setTime(time+1)
        } , 1000)

        return ()=>clearInterval(ID) //cleanup fn
    } , [time])

  return (
    <div>
        <h1>Timer: {time}</h1>
    </div>
  )
}

export default Timer