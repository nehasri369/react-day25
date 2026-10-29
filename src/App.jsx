import React, { useCallback, useState } from 'react'
import Child from './Child';

const App = () => {

  const[count,setCount] = useState(0);

  let clicking = useCallback(() => {
    setCount((prev) => prev + 1)
  },[])

  console.log("Parent Re-rendered")
  
  return (
    <div>

      <h3>Count : {count}</h3>

      <button onClick={clicking}>Parent Click</button>
      <Child handleclick={clicking} />
    
    </div>
  )
}

export default App