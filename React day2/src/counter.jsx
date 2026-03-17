/*
usestate is a hook in React that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state. You can use it to manage and update the state of your component.
syntax: const [state, setState] = useState(initialState);

*/ 

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>🔥 Counter App</h1>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment ➕</button>
      <button onClick={() => setCount(count - 1)}>Decrement ➖</button>
    </div>
  );
}

export default Counter;