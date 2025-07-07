export default function DisplayTodos({ todos, setTodos }) {
  
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
    <div className="mt-3">
      <ul className="mini-container list-group">
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