import React, { useEffect, useState, useMemo } from 'react'
import Child from "./Child";
import axios from "axios";

const App = () => {

  // ================= PAGINATION STATE =================
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
    );
    setUsers(res.data);
  };

  // ================= EXISTING CODE =================
  const [count, setcount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [text1, setText1] = useState("");

  const heavyCalculation = () => {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) sum += i;
    return count1 * 10;
  };

  const result_memo = useMemo(() => {
    return heavyCalculation();
  }, [count1]);

  return (
    <div>
      {/* ================= PAGINATION UI ================= */}
      <h2>Pagination Example</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>Page {page}</span>

      <button onClick={() => setPage(page + 1)}>
        Next
      </button>

      <hr />

      {/* ================= useMemo ================= */}
      <h2>Result Memo: {result_memo}</h2>
      <button onClick={() => setCount1(count1 + 1)}>Increase Count</button>
      <input onChange={(e) => setText1(e.target.value)} />

      {/* ================= NORMAL COUNT ================= */}
      <h1>my value is {count}</h1>
      <button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>

      <Child onIncrease={() => setcount(prev => prev + 1)} />
    </div>
  );
};

export default App;
