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
  return (
    <div className="flex  justify-center bg-amber-50 ">
      <main className="bg-amber-200 w-[600px] h-screen flex flex-col justify-around items-center ">
        <Header />
        <Input
          value={todo}
          onChangeInput={(e) => handleChange(e.target.value)}
          onAddButton={() => handleAddButton()}
        />
        <Todo value={todosList} />
      </main>
    </div>
  );
}

export default App;
