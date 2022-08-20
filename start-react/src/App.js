// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setkeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setkeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);

  return (

    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>



    // <div>
    //   <h1 className={styles.title}>Welcome back!</h1>
    //   <Button text={"Continue"} />
    // </div>
  );
}

export default App;
