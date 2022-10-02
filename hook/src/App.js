import "./App.css";
import React, { useState } from "react";

function App() {
  const [item, setItem] = useState(1);
  const inin = () => setItem(item + 1);
  const outout = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello{item}</h1>
      <button onClick={inin}>inin</button>
      <button onClick={outout}>outout</button>
    </div>
  );
}

export default App;
