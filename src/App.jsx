import "bootswatch/dist/quartz/bootstrap.min.css";
import "./App.css";
import DisplayTodos from "./components/DisplayTodos";
import TodosControl from "./components/TodosControl";
function App() {
  return (
    <>
      <TodosControl />
      <DisplayTodos />
    </>
  );
}
export default App;
