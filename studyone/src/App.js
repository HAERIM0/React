import './App.css';
// import Dialog from './Components/Composition2/Dialog';
// import WelcomDialog from './Components/Composition/WelcomDialog';
// import ThankDailog from './Components/Composition2/ThankDailog';
import Button from './Components/HOC/Button';
import Input from './Components/HOC/Input';
function App() {
  return (
    <div className="App">
      {/* <Dialog />
      // <WelcomDialog /> */}
      <ThankDailog />
      <Input />
      <Button />
    </div>
  );
}

export default App;
