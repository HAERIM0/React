import './App.css';
// import ControlledComponent from './components/Form/ControlledComponent';
// import UncontrolledComponent from './components/Form/UncontrolledComponent';
import State from './components/Hooks/State';
import Reducer from "./components/Hooks/Reducer";
// import Composition from './components/props/Composition';
// import Extraction from './components/props/Extraction/Extraction';
// import ClassComponent from './components/State/ClassComponent';
// import FunctionalComponent from './components/State/FunctionalComponent';
// import ClassComponent2 from './components/LifeCycle/ClassComponent';
// import Event from "./components/Event/Event";
// import Condition from './components/ConditionRendering/Condition';
// import List from './components/List/List';

function App() {
  return (
    <div className="App">
      <Reducer />
      <State />
      {/* <UncontrolledComponent />
      <ControlledComponent /> */}
      {/* <List />
      <Condition />
      <Event />
      <ClassComponent2 />
      <FunctionalComponent />
      <ClassComponent />
      <Composition />
      <Extraction /> */}
    </div>
  );
}

export default App;