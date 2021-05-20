import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Welcome from "./components/Welcome";
import Title from "./components/Title";
import Congratulations from "./components/Congratulations";

function App() {
  const [message, setMessage] = useState(undefined);

  const handleSuccess = () => {
    setMessage("You are a good clicker");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <Counter onSuccess={handleSuccess} />
        <Title />
        <Congratulations message={message} />
      </header>
    </div>
  );
}

export default App;
