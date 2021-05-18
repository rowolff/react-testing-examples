import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Welcome from "./components/Welcome";
import Title from "./components/Title";
import Congratulations from "./components/Congratulations";

function App() {
  const [message, setMessage] = useState(undefined);
  const [fieldValue, setFieldValue] = useState("");

  const handleChange = ({ target }) => {
    setFieldValue(target.value);
  };

  const submitAnswer = () => {
    if (fieldValue === "42") {
      setMessage("correct");
    } else {
      setMessage(undefined);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <Counter />
        <Title />

        <label htmlFor="answer">What is the answer?</label>
        <input
          type="text"
          name="answer"
          onChange={handleChange}
          value={fieldValue}
        />
        <button onClick={submitAnswer} name="submit">
          Submit
        </button>

        <Congratulations message={message} />
      </header>
    </div>
  );
}

export default App;
