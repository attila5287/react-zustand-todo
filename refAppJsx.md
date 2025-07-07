```javascript

import { useState } from "react";
import useStore from "./store/useStore";
import "bootswatch/dist/quartz/bootstrap.min.css";
import "./App.css";

const todos = [
  {
    id: 1,
    text: "ToDo Sample",
    completed: false,
  },
  {
    id: 2,
    text: "ToDo Sample 2",
    completed: false,
  },
  {
    id: 3,
    text: "ToDo Sample 3",
    completed: false,
  },
];

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control form-control-lg bg-transparent text-light"
              placeholder="Add a new task"
            />
            <button className="btn btn-primary btn-lg bg-purple">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          {todos.map((todo, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="TODO card mt-2">
                <div className="card-body">
                  <h5 className="card-title">{todo.text}</h5>
                </div>
                <div className="card-footer d-flex gap-1 justify-content-between align-items-center">
                  <span className="text-muted"># {index + 1}</span>
                  <button className="btn btn-danger btn-sm px-2">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button className="btn btn-success btn-sm px-2">
                    <i className="fa-solid fa-check"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

```