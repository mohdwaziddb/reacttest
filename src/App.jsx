import React, { useEffect, useState, useMemo } from 'react'
import Child from "./Child";

const App = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    //alert("value change");
  }, [count]);

  const [name,setName] = useState("");
  
  const increase = ()=>{
    setcount(prev => prev +1);
  }


    const [count1, setCount1] = useState(0);
    const [text1, setText1] = useState("");

    const heavyCalculation = () => {
      console.log("Heavy calculation running...");
      let sum = 0;
      for (let i = 0; i < 100000000; i++) {
        sum += i;
      }
      return count1 * 10;
    };
    const result = heavyCalculation();

    const result_memo = useMemo(() => {
      console.log("Heavy calculation running...");
      let sum = 0;
      for (let i = 0; i < 100000000; i++) {
        sum += i;
      }
      return count1 * 10;
    }, [count1]);
  
  return (
    <div>
      <h2>Result: {result}</h2>
       <button onClick={() => setCount1(count1 + 1)}>Increase Count</button>
       <input
        placeholder="Type something"
        onChange={(e) => setText1(e.target.value)}
      />
      
      <h2>Result Memo: {result_memo}</h2>
      <button onClick={() => setCount1(count1 + 1)}>Increase Count Memo</button>
      <h1>my value is {count}</h1>
      <button onClick={() => setcount(count + 1)}>click me</button>
      <button onClick={() => setcount(count - 1)}>click me</button>
      {/* <Child name="Wazid Ansari" age="24"></Child> */}
      <Child onIncrease = {increase}></Child>

      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <p>Typed Name: {name}</p>


    </div>
  )
}

export default App
