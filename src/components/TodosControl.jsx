import { useState } from "react";
import useStore from "../store/useStore";

const TodosControl = () => {
  const addTodo = useStore((state) => state.addTodo);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  }

  return (
    <div>
      <h2>Add New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a new todo..."
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
          <button 
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodosControl; 