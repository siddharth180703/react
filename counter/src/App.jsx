import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //let count = 0;
  let [count, setCounter] = useState(0);
  const addValue = () => {
    //console.log("added");
    count = count + 1;
    setCounter(count);
  };
  const subValue = () => {
    //console.log("subtracted");
    count = count - 1;
    setCounter(count);
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value:{count}</h2>
      <button onClick={addValue}>ADD {count}</button>
      <br></br>
      <button onClick={subValue}>REMOVE {count}</button>
      <p>counter: {count}</p>
    </>
  );
}

export default App;
