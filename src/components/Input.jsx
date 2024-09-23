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
    <form onSubmit={handleClick} className="w-full">
      <div className=" flex justify-center gap-2  items-center border-black-2 rounded">
        <label
          htmlFor="todo-input"
          className="block text-sm font-medium text-gray-700"
        >
          Add Todo:
        </label>

        <input
          ref={todo}
          onChange={handleChange}
          type="text"
          id="todo-input"
          placeholder="what's on your mind ?"
          className="mt-1 w-2/3 rounded-md border-amber-200 shadow-sm sm:text-sm flex h-10 px-3 py-2file:border-0  file:text-sm    focus-visible:outline-none focus-visible:ring-2 "
        />
        <button className="bg-amber-100  rounded-lg border-none hover:bg-amber-300 inline-block border border-amber-600 px-10 py-3 text-sm font-medium text-black  hover:text-white focus:outline-none  active:bg-amber-400">
          Add
        </button>
      </div>
    </form>
  );
}

export default Input;
