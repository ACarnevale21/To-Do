import { useState } from "react";
import InputTask from "./components/InputTask";
import "./App.css";
import ContainerTask from "./components/ContainerTask";

function App() {
  //crea
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="max-w-[1040px] mx-auto my-4 rounded-lg border-4 shadow-xl">
        <h1 className="text-center m-auto p-4 text-4xl text-gray-600">
          TO DO LIST
        </h1>
        <InputTask addTodo={handleAddTodo} />
        <ContainerTask todos={todos} deleteTodo={handleDeleteTodo} />
      </div>
    </>
  );
}

export default App;
