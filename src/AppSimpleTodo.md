```JS

import { useState } from "react";
import "bootswatch/dist/quartz/bootstrap.min.css";
import "./App.css";

function App() {
    const demoTodo = {
            id:1,
            text: "Todo Sample",
            completed: false
    };
  const [todos, setTodos] = useState([
    demoTodo    
  ]);
  const [todoText, setTodoText] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), text: todoText, completed };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    setTodoText("");
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-start py-1">
        <form
          onSubmit={handleAddTodo}
          className="d-flex mini-container d-flex justify-content-between"
        >
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Todo Text"
            onChange={(e) => setTodoText(e.target.value)}
            value={todoText}
          />
          <button
            className="btn btn-outline-light btn-sm px-2 mx-1"
            type="submit"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </form>
      </nav>
      <div className="mini-container container mt-2">
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              className="list-group-item py-1 d-flex justify-content-between"
              key={todo.id}
            >
              <span
                className={todo.completed ? "text-decoration-line-through" : ""}
              >
                {todo.text}
              </span>
              <div className="d-flex justify-content-end gap-1">
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => {
                    toggleTodo(todo.id)
                    console.log("completed", todo.id);
                  }}
                >
                {!todo.completed ? <i className="fa-solid fa-check"></i> : <i className="text-primary fa-solid fa-undo"></i>}
                </button>
                <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this todo?")) {
                        deleteTodo(todo.id);
                        console.log("delete", todo.id);
                      }
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default App;

```