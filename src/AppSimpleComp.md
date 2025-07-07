```jsx
import { useState } from "react";
import "bootswatch/dist/quartz/bootstrap.min.css";
import "./App.css";
import DisplayTodos from "./components/DisplayTodos";
import TodosControl from "./components/TodosControl";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Todo Sample",
      completed: false,
    },
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
    if (window.confirm("Are you sure you want to delete this todo?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <>
 
        <TodosControl handleAddTodo={handleAddTodo} todoText={todoText} setTodoText={setTodoText} />
      <DisplayTodos todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

    </>
  );
}
export default App;


```