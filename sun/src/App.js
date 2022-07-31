//import logo from './logo.svg';
import './App.css';
import Hello from "./component/Hello";
//import Welcom from './component/Welcome';
//import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <h3>props : properties</h3>
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
      {/* <Welcom /> */}
    </div>
  );
}

export default App;
