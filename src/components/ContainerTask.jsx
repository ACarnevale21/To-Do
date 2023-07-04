import React, { useState } from "react";

function ContainerTask({ todos, deleteTodo, editTodo }) {
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState("");

  const handleDeleteTodo = (index) => {
    deleteTodo(index);
  };

  const handleEditTodo = (index, value) => {
    setEditIndex(index);
    setEditValue(value);
  };

  const handleSaveTodo = () => {
    editTodo(editIndex, editValue);
    setEditIndex(-1);
    setEditValue("");
  };

  return (
    <ul className="border-4 rounded-lg h-full w-full m-4 p-4 ">
      {todos.map((item, idx) => (
        <li key={idx} className="p-2 bg-gray-200 rounded-md mb-2">
          {idx === editIndex ? (
            <div>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button
                className="ml-2 bg-green-500 text-white px-2 py-1 rounded"
                onClick={handleSaveTodo}
              >
                Save
              </button>
            </div>
          ) : (
            <div>
              {item}
              <button
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDeleteTodo(idx)}
              >
                Delete
              </button>
              <button
                className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
                onClick={() => handleEditTodo(idx, item)}
              >
                Edit
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ContainerTask;
