import useStore from "../store/useStore";

export default function DisplayTodos() {
  const { todos, toggleTodo, deleteTodo } = useStore();
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