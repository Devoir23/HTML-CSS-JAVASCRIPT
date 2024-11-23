// Timer 
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup to stop the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div>
      <h1>Timer</h1>
      <p>Elapsed time: {seconds} seconds</p>
    </div>
  );
}

export default Timer;
