import { useState } from "react";
import React from "react";
import { MdAddBox } from "react-icons/md";

function InputTask({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleImputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() != "") {
      //pregunta si el imput viene con datos
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-row justify-center h-full w-full m-auto p-4">
      <input
        type="text"
        className="border-4 w-full py-2 text-lg placeholder:text-gray-500 px-1 "
        placeholder="Add a task"
        value={inputValue}
        onChange={handleImputChange}
      />
      <button onClick={handleAddTodo}>
        <MdAddBox size={60} />
      </button>
    </div>
  );
}

export default InputTask;
