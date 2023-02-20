import React, { useEffect, useState } from "react";
import { databases } from "../appwrite/appwriteConfig";

function Todos() {
  const [todos, setTodos] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const getTodos = databases.listDocuments(
      "63f3a9d103e1dd30b7a8",
      "63f3aa102de0fd08041a"
    );

    getTodos.then(
      function (response) {
        setTodos(response.documents);
      },

      function (error) {
        console.log(error);
      }
    );

    setLoader(false);
  }, []);

  //Delete Todo
  const deleteTodo = (id) => {
    const promise = databases.deleteDocument(
      "63f3a9d103e1dd30b7a8",
      "63f3aa102de0fd08041a",
      id
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

    // window.location.reload();
  };

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {todos &&
            todos.map((item) => (
              <div key={item.$id}>
                <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                  <div>
                    <p>{item.Todos}</p>
                  </div>
                  <div>
                    <span
                      className="text-red-400 cursor-pointer"
                      onClick={() => {
                        deleteTodo(item.$id);
                      }}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Todos;
