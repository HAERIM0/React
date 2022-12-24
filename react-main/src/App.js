import React, { Component, useState } from "react";
// import Counter from "./Component/Counter";
import Counter from "./Component/Counter";
import Say from "./Component/Say";
import MyComponent from "./Component/MyConponent";
import Event from "./Component/Event";
import ValidationSample from "./Component/ValidationSample/ValidationSample";
import IterationSample from "./Component/IterationSample";
import LifeCycle from "./Component/LifeCycle";
import UseCounter from "./Component/Usecounter";
// import Average from "./Component/Average/";
import Average from "./Component/Average";
// const App = () => {
//   return <MyComponent name="React" />;
// };

// const App = () => {
//   return <MyComponent />;
// };

const App = () => {
  // const [visible, setVisible] = useState(false);//////

  return (
    // <MyComponent name="react" favoriteNumber={7}>
    //   리액트
    // </MyComponent>
    // <Counter />
    // <Say />
    // <Event />
    // <ValidationSample />
    // <IterationSample />
    // <IterationSample />
    // <LifeCycle />
    //   <div>
    // {
    /* <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <UseCounter />}
    </div> */
    // <UseCounter />
    // }
    <Average />
    // <Average />
  );
};
export default App;
