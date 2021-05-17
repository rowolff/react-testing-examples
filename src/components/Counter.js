import React, { useState, useEffect } from "react";

const Counter = ({ onThresholdReached }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 2) {
      onThresholdReached();
    }
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return <button onClick={increment}>You clicked me {count} times</button>;
};

export default Counter;
