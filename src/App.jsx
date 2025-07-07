import { useState } from "react";
import "bootswatch/dist/quartz/bootstrap.min.css";
import "./App.css";
import DisplayTodos from "./components/DisplayTodos";
import TodosControl from "./components/TodosControl";
import { demoTodo } from "./data";
function App() {
  const [todos, setTodos] = useState(demoTodo());

  return (
    <>
      <TodosControl todos={todos} setTodos={setTodos} />
      <DisplayTodos todos={todos} setTodos={setTodos}/>
    </>
  );
}
export default App;
