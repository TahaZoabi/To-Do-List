import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Todo({ todosList, onDelete, onEdit }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [completedTodos, setCompletedTodos] = useState(
    new Array(todosList.length).fill(false),
  );

  function handleEdit(index, text) {
    setEditIndex(index);
    setEditText(text);
  }

  function onSave(index) {
    onEdit(index, editText);
    setEditIndex(null);
    setEditText("");
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
          <p className={`w-40 ${completedTodos[index] ? "line-through" : ""}`}>
            {editIndex === index ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                type="text"
                className="flex h-10 w-[300px] rounded-lg border border-input px-3 py-2 text-sm"
              />
            ) : (
              todo
            )}
          </p>
          <div className="flex gap-2">
            {editIndex === index ? (
              <>
                <button onClick={() => onSave(index)}>Save</button>
                <button onClick={() => setEditIndex(null)}>Cancel</button>
              </>
            ) : (
              <button onClick={() => handleEdit(index, todo)}>Edit</button>
            )}
            <button onClick={() => toggleComplete(index)}>Complete</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
