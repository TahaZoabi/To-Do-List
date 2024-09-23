import { useContext, useRef } from "react";
import { GlobalContext } from "../Context/GlobalContext.jsx";

function Input() {
  const todo = useRef("");
  const { addTodo } = useContext(GlobalContext);

  function handleChange(e) {
    todo.current = e.target.value;
  }

  function handleClick(e) {
    e.preventDefault();
    if (todo.current.trim()) {
      addTodo(todo.current);
      todo.current = "";
      e.target.elements[0].value = "";
    }
  }
  return (
    <form
      onSubmit={handleClick}
      className="flex justify-center gap-2  items-center border-black-2 rounded"
    >
      <label htmlFor="todo-input" className="text-sm">
        Add Todo:
      </label>
      <input
        id="todo-input"
        ref={todo}
        onChange={handleChange}
        type="text"
        placeholder="add todo..."
        className="flex h-10 w-[400px] rounded-lg border border-input bg-white px-3 py-2 text-sm file:border-0  file:text-sm    focus-visible:outline-none focus-visible:ring-2 "
      />
      <button className="bg-amber-100 py-2 px-4 rounded-lg border-none hover:bg-amber-300">
        Add
      </button>
    </form>
  );
}

export default Input;
