import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Welcome from "./components/Welcome";
import Title from "./components/Title";
import Congratulations from "./components/Congratulations";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <Counter />
        <Title />
        <Congratulations message={undefined} />
      </header>
    </div>
  );
}

export default App;
