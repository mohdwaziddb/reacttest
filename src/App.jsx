import React, { useEffect, useState } from 'react'

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
    </div>
  )
}

export default App
