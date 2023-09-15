import { useState } from "react"

export default function Counter(){
  const [count, counts] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    counts(newCount);
  }
  const handleReduce = () => {
    const newCount = count - 1;
    counts(newCount);
  }

  return(
    <div style={{border: '2px solid yellow' }}>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Remove</button>
    </div>
  )
}