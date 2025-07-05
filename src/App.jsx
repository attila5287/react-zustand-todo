import './App.css'
import DisplayTodos from './components/DisplayTodos'
import TodosControl from './components/TodosControl'

function App() {
  return (
    <div className="App">
      <header>
        <h1>React + Zustand Todo App</h1>
        <p>A simple todo application built with React and Zustand state management</p>
      </header>
      <main style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <TodosControl />
        <DisplayTodos />
      </main>
    </div>
  )
}

export default App
