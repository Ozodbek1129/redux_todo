import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../slices/todoSlice';

export default function Card() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ id: '', inputValue: '', inputTextArea: '' });

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (todo) => {
    setCurrentTodo(todo);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    dispatch(editTodo(currentTodo));
    setIsModalOpen(false);

  return (
    <div className='grid grid-cols-3 px-5'>
      {todos.map((e) => (
        <div key={e.id} className="max-w-sm p-6 my-5 mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.inputValue}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 break-words">{e.inputTextArea}</p>
          <button
            onClick={() => handleDelete(e.id)}
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Delete
          </button>
          <button
            onClick={() => handleEdit(e)}
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Edit
          </button>
        </div>
      ))}

      {isModalOpen && (
        <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50">
          <div className="w-96 h-96 border px-5 py-5 gap-5 shadow rounded-lg bg-white">
            <h2 className="font-bold mb-3">Edit Todo</h2>
            <div className="flex flex-col gap-3 mb-3">
              <h2 className="font-bold">Title</h2>
              <input
                type="text"
                value={currentTodo.inputValue}
                onChange={(e) => setCurrentTodo({ ...currentTodo, inputValue: e.target.value })}
                className="rounded-lg w-full"
              />

              <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                id="message"
                rows="4"
                value={currentTodo.inputTextArea}
                onChange={(e) => setCurrentTodo({ ...currentTodo, inputTextArea: e.target.value })}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Close
              </button>
              <button
                onClick={handleSave}
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
