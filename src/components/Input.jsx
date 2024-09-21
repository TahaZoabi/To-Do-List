import { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext.jsx";

function Input() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(GlobalContext);

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleClick() {
    addTodo(todo);
    setTodo("");
  }

  return (
    <div className="flex justify-center gap-2  items-center border-black-2 rounded">
      <input
        value={todo}
        onChange={handleChange}
        type="text"
        placeholder="add todo..."
        className="flex h-10 w-[400px] rounded-lg border border-input bg-white px-3 py-2 text-sm file:border-0  file:text-sm    focus-visible:outline-none focus-visible:ring-2 "
      />
      <button
        onClick={() => handleClick()}
        className="bg-amber-100 py-2 px-4 rounded-lg border-none hover:bg-amber-300"
      >
        Add
      </button>
    </div>
  );
}

export default Input;
