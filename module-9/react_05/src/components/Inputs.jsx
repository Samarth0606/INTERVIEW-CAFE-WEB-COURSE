import { useMemo } from "react";
import { useState } from "react"

function Inputs() {

    const [count,setCount] = useState(0);

    const [inp,setInp] = useState(0);

    function handleInp(e){
        setInp(e.target.value)
    }

    let out = useMemo( ()=>{
        let sum = 0;
        for(let item=1; item<=inp;item++){
            console.log("loop ran");
            sum+=item;
        }
        return sum
    } , [inp] )

  return (
    <div>
        <input onChange={handleInp} type="number" value={inp} />
        <h1> Input value: {inp} </h1>
        <h1> Sum value: {out} </h1>

        <button onClick={()=>setCount(count+1)} >Inc - {count}</button>
    </div>
  )
}

export default Inputs