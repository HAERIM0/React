import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "뤼액트";
  return (
    <div className="App">
      {name === "리액트" ? <h1>리액트 입니다</h1> : <h2>리액트가 아닙니다</h2>}
    </div>
  );
}

export default App;
