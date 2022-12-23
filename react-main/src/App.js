import React, { Component } from "react";
// import Counter from "./Component/Counter";
import Counter from "./Component/Counter";
import Say from "./Component/Say";
import MyComponent from "./MyConponent";
import Event from "./Component/Event";
const App = () => {
  return <MyComponent name="React" />;
};

const App = () => {
  return <MyComponent />;
};

const App = () => {
  return (
    <MyComponent name="react" favoriteNumber={7}>
      리액트
    </MyComponent>
    <Counter />
    <Say />
    <Event />
  );
};
export default App;
