import React, { useState } from "react";

const useInput = (initiaValue, validator) => {
  const [value, setValue] = useState(initiaValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  let willUpdate = true;
  if (typeof validator === "function") {
    willUpdate = validator(value);
  }
  if (willUpdate) {
    setValue(value);
  }
  return { value, onChange };
};

const Input = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);

  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default Input;
