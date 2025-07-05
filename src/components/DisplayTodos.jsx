import useStore from "../store/useStore";

const DisplayTodos = () => {
  // Use separate selectors to avoid creating new objects
  const todos = useStore((state) => state.todos);
  const toggleTodo = useStore((state) => state.toggleTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);

  return (
    <div>
      <h2>My Todos</h2>
      {todos.length === 0 ? (
        <p>No todos yet! Add one below.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                margin: "5px 0",
                backgroundColor: todo.completed ? "#f0f0f0" : "white",
              }}
            >
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                  flex: 1,
                  color: todo.completed ? "#888" : "#333",
                }}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button 
                onClick={() => deleteTodo(todo.id)}
                style={{
                  backgroundColor: "#ff4444",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayTodos; 