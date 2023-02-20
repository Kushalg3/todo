import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { databases } from "../appwrite/appwriteConfig";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const promise = databases.createDocument(
      "63f3a9d103e1dd30b7a8",
      "63f3aa102de0fd08041a",
      uuidv4(),
      { Todos: todo }
    );

    promise.then(
      function (response) {
        console.log(response);
        window.location.reload();
      },

      function (error) {
        console.log(error);
      }
    );

    setTodo("");
    // window.location.reload(false);
    // e.target.reset();
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form action="" className="flex justify-center mb-10">
        <input
          type="text"
          name=""
          id=""
          value={todo}
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
          onClick={handleSubmit}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
