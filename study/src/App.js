import Composition from './components/Composition';
import './App.css';
import Extraction from './components/Extraction/Extraction';
import ClassComponent from './components/State/ClassComponent';
import FunctionalComponent from './components/State/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionalComponent />
      <Composition />
      <Extraction />


    </div>
  );
}

export default App;
