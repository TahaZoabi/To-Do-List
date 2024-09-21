import { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext.jsx";

function Todo() {
  const { todosList, deleteTodo, editTodo } = useContext(GlobalContext);

  const [editTodoState, setEditTodoState] = useState({ index: null, text: "" });
  const [completedTodos, setCompletedTodos] = useState(
    new Array(todosList.length).fill(false),
  );

  function handleEdit(index) {
    setEditTodoState({ index, text: todosList[index] });
  }

  function handleSave() {
    if (editTodoState.text.trim() !== "") {
      editTodo(editTodoState.text, editTodoState.index);
      setEditTodoState({ index: null, text: "" });
    }
  }

  function handleDelete(index) {
    deleteTodo(index);
  }

  function toggleComplete(index) {
    const newCompletedTodos = [...completedTodos];
    newCompletedTodos[index] = !newCompletedTodos[index];
    setCompletedTodos(newCompletedTodos);
  }

  return (
    <div className="flex flex-col gap-7">
      {todosList.map((todo, index) => (
        <div className="flex gap-4" key={index}>
          <p
            className={`w-full ${completedTodos[index] ? "line-through" : ""}`}
          >
            {editTodoState.index === index ? (
              <input
                value={editTodoState.text}
                onChange={(e) =>
                  setEditTodoState({ ...editTodoState, text: e.target.value })
                }
                type="text"
                className="flex h-10 w-[300px] rounded-lg border border-input px-3 py-2 text-sm"
              />
            ) : (
              todo
            )}
          </p>

          <div className="flex gap-2">
            {editTodoState.index === index ? (
              <>
                <button onClick={handleSave}>Save</button>
                <button
                  onClick={() => setEditTodoState({ index: null, text: "" })}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => toggleComplete(index)}>Complete</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
