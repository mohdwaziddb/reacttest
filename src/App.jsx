import React, { useEffect, useState } from 'react'
import Child from "./Child";

const App = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    alert("value change");
  }, [count]);
  
  return (
    <div>
      <h2>heading</h2>
      <h1>my value is {count}</h1>
      <button onClick={() => setcount(count + 1)}>click me</button>
      <button onClick={() => setcount(count - 1)}>click me</button>
      <Child name="Wazid Ansari" age="24"></Child>
    </div>
  )
}

export default App
