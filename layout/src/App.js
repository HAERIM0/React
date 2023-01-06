import "./App.css";
import Aside from "./component/Aside/Aside";
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Section from "./component/Section/Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Section />
      <Aside />
    </div>
  );
}

export default App;
