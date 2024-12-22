import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../slices/todoSlice";

export default function Card() {
  const [inputValue, setInputValue] = useState("");
  const [inputTextArea, setInputTextArea] = useState("");
  const dispatch = useDispatch()
  // const todos = useSelector((state) => state.todo.todos);

  
  const handleSave = () => {
    if (!inputValue.trim() || !inputTextArea.trim()) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }
    dispatch(
      addTodo({
        id: Date.now(),
        inputValue,
        inputTextArea,
      })
    );
    // console.log("Redux todos:", todos);
    setInputValue("");
    setInputTextArea("");
  };


  const [isModalOpen, setIsModalOpen] = useState(false);

return (
  <div className="">
    <div className="flex justify-around items-center my-5 pb-5 shadow-md ">
      <h2 className="text-3xl">Todo</h2>
      <button
        onClick={() => setIsModalOpen(true)}
        type="button"
        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        + Yangi todo qo'shish
      </button>
    </div>

    {isModalOpen && (
     <div className="flex justify-center items-center">
       <div className=" w-96 h-80 border px-5 py-5 gap-5 shadow rounded-lg">
        <div className="flex flex-col gap-3 mb-3">
          <h2 className="font-bold">Title</h2>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="rounded-lg w-full"
          />

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            value={inputTextArea}
            onChange={(e) => setInputTextArea(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <button
          onClick={() => setIsModalOpen(false)}
          type="button"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Close
        </button>
        <button
          onClick={() => {
            handleSave();
            setIsModalOpen(false);
          }}
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Save
        </button>
      </div>
     </div>
    )}
  </div>
);

}
