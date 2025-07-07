import { create } from "zustand";
import { demoTodo } from "../data";

const useStore = create((set) => ({
  todos: demoTodo(),
  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
  deleteTodo: (id) =>
    set((state) => {
      if(window.confirm("Are you sure you want to delete this todo?")){
        return {
          todos: state.todos.filter((todo) => todo.id !== id),
        }
      }
      return state;
    }),
}));

export default useStore; 