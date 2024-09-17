import "./index.css";
import Input from "./components/Input.jsx";
import Todo from "./components/Todo.jsx";
import Header from "./components/Header.jsx";
import { useState } from "react";

function App() {
  const [todosList, setTodosList] = useState([]);
  const [todo, setTodo] = useState("");

  function handleChange(text) {
    setTodo(text);
  }

  function handleAddButton() {
    setTodosList((prevState) => {
      setTodo("");
      return [...prevState, todo];
    });
  }

  function handleDeleteButton(index) {
    setTodosList((prevState) => {
      let arr = [...prevState];
      arr.splice(index, 1);
      return arr;
    });
  }

  return (
    <div className="flex  justify-center bg-amber-50 ">
      <main className="bg-amber-200 w-[600px] h-screen flex flex-col justify-start gap-20 items-center ">
        <Header />
        <Input
          value={todo}
          onChangeInput={(e) => handleChange(e.target.value)}
          onAddButton={() => handleAddButton()}
        />
        <Todo value={todosList} onDeleteButton={handleDeleteButton} />
      </main>
    </div>
  );
}

export default App;
