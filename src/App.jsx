import "./index.css";
import Input from "./components/Input.jsx";
import Todo from "./components/Todo.jsx";
import Header from "./components/Header.jsx";
import { GlobalProvider } from "./Context/GlobalContext.jsx";

function App() {
  // function handleChange(text) {
  //   setTodo(text);
  // }
  //
  // function handleAddButton() {
  //   if (todo.trim() === "" || todo.length < 2) return;
  //   setTodosList((prevState) => [...prevState, todo]);
  //   setTodo("");
  // }
  //
  // function handleDelete(index) {
  //   setTodosList((prevState) => {
  //     let arr = [...prevState];
  //     arr.splice(index, 1);
  //     return arr;
  //   });
  // }
  //
  // function handleEdit(index, newText) {
  //   setTodosList((prevState) =>
  //     prevState.map((item, i) => (i === index ? newText : item)),
  //   );
  // }

  return (
    <GlobalProvider>
      <div className="flex justify-center bg-amber-50">
        <main className="bg-amber-200 w-[600px] h-screen flex flex-col justify-start gap-20 items-center ">
          <Header />
          <Input />
          <Todo />
        </main>
      </div>
    </GlobalProvider>
  );
}

export default App;
