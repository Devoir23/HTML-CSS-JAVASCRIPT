// learning about useEffect
import React, { useState, useEffect } from "react";

function  App(){
  const [count, setCount] = useState(0);

  // using useEffect to log a message
  useEffect(() => {
    console.log('count updated: ${count}');
  }, [count]);

  return(
    <dv>
      <h1>React useEffect Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </dv>
  );
}

export default App;