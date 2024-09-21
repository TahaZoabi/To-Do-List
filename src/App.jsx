import "./index.css";
import Input from "./components/Input.jsx";
import Todo from "./components/Todo.jsx";
import Header from "./components/Header.jsx";
import { GlobalProvider } from "./Context/GlobalContext.jsx";

function App() {
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
