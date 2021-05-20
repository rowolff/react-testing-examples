import React, { useState } from "react";

const Counter = ({ onSuccess }) => {
  const [buttonValue, setIncrement] = useState(0);

  const incement = () => {
    setIncrement((prevCount) => prevCount + 1);
  };

  if (buttonValue === 3) {
    onSuccess();
  }

  return (
    <button onClick={incement} title="incrementor">
      You clicked me {buttonValue} times
    </button>
  );
};

export default Counter;
