import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext.jsx";

function Todo() {
  // const [editIndex, setEditIndex] = useState(null);
  // const [editText, setEditText] = useState("");
  // const [completedTodos, setCompletedTodos] = useState(
  //   new Array(todosList.length).fill(false),
  // );

  const { todosList } = useContext(GlobalContext);
  console.log(todosList);

  // function handleEdit(index, text) {
  //   setEditIndex(index);
  //   setEditText(text);
  // }
  //
  // function onSave(index) {
  //   onEdit(index, editText);
  //   setEditIndex(null);
  //   setEditText("");
  // }
  //
  // function toggleComplete(index) {
  //   const newCompletedTodos = [...completedTodos];
  //   newCompletedTodos[index] = !newCompletedTodos[index];
  //   setCompletedTodos(newCompletedTodos);
  // }

  return (
    <div className="flex flex-col gap-7">
      {todosList.map((todo, index) => (
        <div className="flex gap-4" key={index}>
          <p className="w-full">{todo}</p>
          {/*<p*/}
          {/* // className={`w-full ${completedTodos[index] ? "line-through" : ""}`}*/}
          {/*>*/}
          {/*  {editIndex === index ? (*/}
          {/*    <input*/}
          {/*      value={editText}*/}
          {/*      onChange={(e) => setEditText(e.target.value)}*/}
          {/*      type="text"*/}
          {/*      className="flex h-10 w-[300px] rounded-lg border border-input px-3 py-2 text-sm"*/}
          {/*    />*/}
          {/*  ) : (*/}
          {/*    todo*/}
          {/*  )}*/}
          {/*</p>*/}

          <div className="flex gap-2">
            {5 === index ? (
              <>
                <button>Save</button>
                <button>Cancel</button>
              </>
            ) : (
              <button>Edit</button>
            )}
            <button>Complete</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
