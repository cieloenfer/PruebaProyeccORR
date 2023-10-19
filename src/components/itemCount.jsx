import { useState } from "react"

export default function ItemCount() {
    
  const[count, setCount] = useState(0)

  function onIncrease() {
    if(count <7)
    setCount(count + 1)
  }

  function onDecrease() {
    if(count >1)
    setCount(count - 1)
  }
    
    return(
        <div>
            <button onClick={onDecrease}>-</button>
            <span>{count}</span>
            <butto onClick={onIncrease}>+</butto>
        </div>
    )
}




 