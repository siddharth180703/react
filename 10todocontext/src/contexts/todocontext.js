import { useContext, createContext } from "react";
export const todocontext = createContext({
  todos: [{ id: 1, todo: "Todo msg", completed: "false" }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});
export const Todoprovider = todocontext.Provider;
export const usetodo = () => {
  return useContext(todocontext);
};
