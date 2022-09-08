import './App.css';
import Composition from './components/props/Composition';
import Extraction from './components/props/Extraction/Extraction';
import ClassComponent from './components/State/ClassComponent';
import FunctionalComponent from './components/State/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ClassComponent />
      <Composition />
      <Extraction />

    </div>
  );
}

export default App;
