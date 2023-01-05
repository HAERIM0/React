import logo from "./logo.svg";
import "./App.css";
import Header_top from "./component/Header/Header_top/Header_top";
import Header_bottom from "./component/Header/Header_bottom/Header_bottom";
import Nav_top from "./component/Nav/Nav_top/Nav_top";
import Nav_bottom from "./component/Nav/Nav_bottom/Nav_bottom";

function App() {
  return (
    <div className="App">
      <Header_top />
      <Header_bottom />
      <Nav_top />
      <Nav_bottom />
    </div>
  );
}

export default App;
