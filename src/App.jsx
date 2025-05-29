import React, {useReducer, useState } from "react";
import Todolist from "./Component/Todolist";
import {UseReducer} from './Hooks/UseReducer'

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [updateValue, setUpdateValue] = useState("");
  const [state, dispach] = useReducer(UseReducer, {name: 'Tanvir'})
    console.log(state);
      
  const [todos, setTodos] = useState([
    {
      todomsg: "At last one more character",
      iscomplit: true,
      id: 1,
    },
  ]);

  // Handle input change
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  // Add todo item
  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      {
        todomsg: inputValue,
        iscomplit: false,
        id: prev.length + 1,
      },
    ]);
    setInputValue("");
  };

  // Remove todo item
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // Edit todo item
  const handleEdit = (id) => {
    if (editMode && editId === id) {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, todomsg: updateValue } : item
        )
      );
      setEditMode(false);
      setEditId(null);
      setUpdateValue("");
    } else {
      setEditMode(true);
      setEditId(id);
      const currentTodo = todos.find((item) => item.id === id);
      setUpdateValue(currentTodo.todomsg);
    }
  };

  // Update edit input value
  const handleUpdateChange = (event) => {
    setUpdateValue(event.target.value);
  };

  // Toggle checkbox
  const checkboxHandler = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, iscomplit: !item.iscomplit } : item
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Todo App
        </h1>
        <div className="flex mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={handleInput}
            placeholder="Enter a new task..."
            className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          <button
            type="button"
            onClick={addTodo}
            className="px-4 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700"
          >
            Add
          </button>
        </div>
        <Todolist
          todolistitem={todos}
          removetodoitem={removeTodo}
          handleedit={handleEdit}
          editmode={editMode}
          editid={editId}
          onhandleupdatechange={handleUpdateChange}
          oncheckboxhandelar={checkboxHandler}
        />
      </div>
    </div>
  );
};

export default App;
