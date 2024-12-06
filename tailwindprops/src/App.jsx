import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/cards";
function App() {
  const [count, setCount] = useState(0);
  // let myobj = {
  //   username: "siddharth",
  //   age: 20,
  // };
  return (
    <>
      <h1 className="bg-pink-400 text-white-400 p-4 rounded mb-4">
        Tailwind Test
      </h1>
      <Card username="siddharth" btnText="clickme"></Card>
      <Card username="samarth" btnText="visitme"></Card>
    </>
  );
}

export default App;
