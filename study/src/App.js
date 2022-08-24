import logo from './logo.svg';
import './App.css';

function App({ number }) {
  return number % 2 === 0 ? <h1>{number}</h1> : <h3>{number}</h3>;
}

export default App;
