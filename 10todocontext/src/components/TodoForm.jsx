import React, { useState } from "react";
import { usetodo } from "../contexts";
const TodoForm = () => {
  const [todo, settodo] = useState();
  const { addTodo } = usetodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ id: Date.now(), todo: todo, completed: false });
    settodo("");
  };
  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
