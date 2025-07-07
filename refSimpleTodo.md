# Simple Todo App with useState

## Overview
This is the simplest version of a todo app built with React using only `useState` for state management. No external libraries required except React.

## Complete Simple Todo App

```javascript
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Simple Todo App</h1>
      
      {/* Input Section */}
      <div className="row mb-4">
        <div className="col-md-8 offset-md-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add a new task..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="btn btn-primary" 
              onClick={addTodo}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Todo List */}
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {todos.length === 0 ? (
            <p className="text-center text-muted">No todos yet. Add one above!</p>
          ) : (
            <ul className="list-group">
              {todos.map(todo => (
                <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    <span 
                      className={todo.completed ? "text-decoration-line-through text-muted" : ""}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Todo Stats */}
      {todos.length > 0 && (
        <div className="row mt-3">
          <div className="col-md-8 offset-md-2">
            <div className="text-center text-muted">
              <small>
                Total: {todos.length} | 
                Completed: {todos.filter(todo => todo.completed).length} | 
                Pending: {todos.filter(todo => !todo.completed).length}
              </small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
```

## Key Features:
- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Enter key support for adding todos
- ✅ Todo statistics (total, completed, pending)
- ✅ Responsive design with Bootstrap classes
- ✅ Empty state message

## State Management:
- `todos`: Array of todo objects
- `inputValue`: Current input field value

## Todo Object Structure:
```javascript
{
  id: Date.now(),        // Unique identifier
  text: "Task content",  // Todo text
  completed: false       // Completion status
}
```

## Functions:
- `addTodo()`: Adds new todo to the list
- `toggleTodo(id)`: Toggles completion status
- `deleteTodo(id)`: Removes todo from list
- `handleKeyPress(e)`: Handles Enter key for adding todos

## Styling:
- Uses Bootstrap classes for styling
- Responsive design
- Clean, minimal interface
- Visual feedback for completed items

This is the simplest, most straightforward implementation of a todo app using only React's built-in `useState` hook. 