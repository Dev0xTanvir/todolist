import React from "react";

const Todolist = ({
  todolistitem,
  removetodoitem,
  handleedit,
  editmode,
  editid,
  onhandleupdatechange,
  oncheckboxhandelar,
}) => {
  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-md dark:bg-gray-800">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Todo List
      </h2>
      <ul className="space-y-3">
        {todolistitem.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg dark:bg-gray-700"
          >
            {editmode && editid === item.id ? (
              <input
                onChange={onhandleupdatechange}
                type="text"
                defaultValue={item.todomsg}
                className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-600 dark:text-white dark:border-gray-500"
              />
            ) : (
              <div className="flex items-center space-x-3">
                <input
                  onChange={() => oncheckboxhandelar(item.id)}
                  type="checkbox"
                  checked={item.iscomplit}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <h3
                  className={`text-lg ${
                    item.iscomplit
                      ? "line-through text-gray-400"
                      : "text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {item.todomsg}
                </h3>
              </div>
            )}
            <div className="flex gap-2">
              <button
                className={`px-4 py-2 rounded-lg font-medium ${
                  editmode && editid === item.id
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                }`}
                onClick={() => handleedit(item.id)}
              >
                {editmode && editid === item.id ? "Save" : "Edit"}
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                onClick={() => removetodoitem(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
