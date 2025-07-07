export const demoTodo = (() => {
  const todos = [
    "Zustand Step by Step", 
    "UseStore: todos is the state, array of objects",
    "UseStore: 3 actions: addTodo, deleteTodo, toggleTodo",
    "Components: DisplayTodos, TodosControl",
  ];
  return todos.map((todo, index) => ({
    id: "demo-" + index,
    text: todo,
    completed: false,
  }));
});
