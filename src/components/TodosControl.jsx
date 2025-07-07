export default function TodosControl({ handleAddTodo, todoText, setTodoText }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-start py-1">
      <form
        onSubmit={handleAddTodo}
        className="d-flex mini-container d-flex justify-content-between"
      >
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Todo Text"
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />
        <button
          className="btn btn-outline-light btn-sm px-2 mx-1"
          type="submit"
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </nav>
  );
}
