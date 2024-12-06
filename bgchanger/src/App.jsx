import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 gap-3 inset-x-0 px-2">
        <div className="flex flex-wrap gap-5 px-2 py-2 shadow-lg bg-white rounded-xl">
          <button
            className="shadow-lg bg-black px-2 rounded-xl text-white"
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className=" bg-blue-400 px-2 rounded-xl text-white"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className=" bg-red-400 px-2 rounded-xl text-white"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className=" bg-gray-400 px-2 rounded-xl text-white"
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
          <button
            className=" bg-green-400 px-2 rounded-xl text-white"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className=" bg-yellow-400 px-2 rounded-xl text-white"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
