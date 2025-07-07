export default function DisplayTodos({ todos, setTodos }) {
  
  const toggleTodo = (id) => {
    console.log("toggleTodo clicked: ", id);
    const clickedTodo = todos.find((todo) => todo.id === id);
    console.log("completed stat before click: ", clickedTodo.completed);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    console.log("deleteTodo clicked:", id);
    if (window.confirm("Are you sure you want to delete this todo?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div className="mini-container mt-2">
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item py-1 d-flex justify-content-between" key={todo.id}>
            <span className={todo.completed ? "text-decoration-line-through" : ""}>{todo.text}</span>
            <div className="d-flex justify-content-end gap-1">
              <button className="btn btn-outline-success btn-sm" onClick={() => toggleTodo(todo.id)}>
                {!todo.completed ? <i className="fa-solid fa-check"></i> : <i className="text-primary fa-solid fa-undo"></i>}
              </button>
              <button className="btn btn-outline-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}