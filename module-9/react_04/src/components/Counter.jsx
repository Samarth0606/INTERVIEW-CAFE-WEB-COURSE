import { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);

    function handleInc(){
        setCount(count+1)
    }
    function handleDec(){
        setCount(count-1)
    }

  return (
    <div>
        <button onClick={handleInc}>+ inc</button>
        <h1>Counter: {count} </h1>
        <button onClick={handleDec}>- dec</button>
    </div>
  )
}

export default Counter