# React + Zustand Todo App

A modern, simple todo application built with React and Zustand state management library. This project demonstrates how to use Zustand for efficient state management in React applications.

## 🚀 Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Clean, modern UI
- ✅ Responsive design
- ✅ Efficient state management with Zustand

## 📋 What is Zustand?

Zustand is a small, fast, and scalable state management solution for React applications. It uses simplified flux principles and provides a comfortable API based on hooks. Unlike Redux, Zustand is:

- **Unopinionated**: No boilerplate code required
- **Simple**: Easy to learn and use
- **Fast**: Minimal re-renders with fine-grained subscriptions
- **Small**: Lightweight bundle size
- **TypeScript-friendly**: Built with TypeScript support

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone this repository**
   ```bash
   git clone <repository-url>
   cd react-zustand-todo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app.

## 📚 Step-by-Step Guide: Building the Todo App

### Step 1: Project Setup

This project was created using Vite with React template:

```bash
npm create vite@latest react-zustand-todo -- --template react
cd react-zustand-todo
npm install
```

### Step 2: Install Zustand

```bash
npm install zustand
```

### Step 3: Create the Zustand Store

Create `src/store/useStore.js`:

```javascript
import { create } from "zustand";

const useStore = create((set) => ({
  todos: [],
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
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useStore;
```

**Key Concepts:**
- `create()`: Creates a Zustand store
- `set()`: Updates the state immutably
- State contains `todos` array and action functions
- Actions use the spread operator to maintain immutability

### Step 4: Create the DisplayTodos Component

Create `src/components/DisplayTodos.jsx`:

```javascript
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
            <li key={todo.id} /* ... styling ... */>
              <span onClick={() => toggleTodo(todo.id)}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>
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
```

**Key Concepts:**
- `useStore()`: Hook to access the store
- Selector function: `(state) => state.property` - picks specific state slices
- Components automatically re-render when selected state changes
- **Important**: Use separate selectors instead of creating objects to avoid infinite loops

### Step 5: Create the TodosControl Component

Create `src/components/TodosControl.jsx`:

```javascript
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodosControl;
```

**Key Concepts:**
- Combines local state (`useState`) with global state (`useStore`)
- Only selects the `addTodo` action from the store
- Form validation before adding todos

### Step 6: Update the App Component

Update `src/App.jsx`:

```javascript
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
      <main>
        <TodosControl />
        <DisplayTodos />
      </main>
    </div>
  )
}

export default App
```

### Step 7: Add Styling

Update `src/App.css` with modern, clean styles for better user experience.

## 🧠 How Zustand Works

### State Management Flow

1. **Store Creation**: `create()` function creates a store with initial state and actions
2. **State Updates**: Actions use `set()` to update state immutably
3. **Component Subscriptions**: Components use `useStore()` to subscribe to state changes
4. **Selective Updates**: Only components that use changed state will re-render

### Zustand vs Redux

| Feature | Zustand | Redux |
|---------|---------|-------|
| Boilerplate | Minimal | Extensive |
| Learning Curve | Easy | Steep |
| Bundle Size | Small (~2KB) | Large (~15KB+) |
| TypeScript | Built-in | Requires additional setup |
| Middleware | Simple | Complex |

## ⚠️ Common Pitfalls & Best Practices

### 1. Avoid Creating Objects in Selectors (Infinite Loop Fix)

**❌ Wrong (causes infinite loops):**
```javascript
const { todos, toggleTodo, deleteTodo } = useStore((state) => {
  return { 
    todos: state.todos, 
    toggleTodo: state.toggleTodo,
    deleteTodo: state.deleteTodo 
  };
});
```

**✅ Correct (use separate selectors):**
```javascript
const todos = useStore((state) => state.todos);
const toggleTodo = useStore((state) => state.toggleTodo);
const deleteTodo = useStore((state) => state.deleteTodo);
```

### 2. Use Shallow Comparison When Needed

If you must return objects, use shallow comparison:
```javascript
import { shallow } from 'zustand/shallow';

const { todos, toggleTodo } = useStore(
  (state) => ({ todos: state.todos, toggleTodo: state.toggleTodo }),
  shallow
);
```

### 3. Memoize Complex Selectors

For expensive computations, use useMemo:
```javascript
const completedTodos = useStore((state) => 
  useMemo(() => state.todos.filter(todo => todo.completed), [state.todos])
);
```

## 🚀 Advanced Zustand Patterns

### 1. Nested State Management

```javascript
const useStore = create((set) => ({
  user: {
    name: "",
    profile: {
      email: "",
      preferences: {}
    }
  },
  updateUserProfile: (updates) =>
    set((state) => ({
      user: {
        ...state.user,
        profile: { ...state.user.profile, ...updates }
      }
    })),
}));
```

### 2. Middleware Usage

```javascript
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set) => ({
    // ... your state
  }), {
    name: "todo-store" // Store name in Redux DevTools
  })
);
```

### 3. Custom Hooks

```javascript
// Custom hook for todo operations
const useTodos = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useStore();
  
  const completedTodos = todos.filter(todo => todo.completed);
  const pendingTodos = todos.filter(todo => !todo.completed);
  
  return {
    todos,
    completedTodos,
    pendingTodos,
    addTodo,
    toggleTodo,
    deleteTodo
  };
};
```

### 4. Async Actions

```javascript
const useStore = create((set) => ({
  todos: [],
  loading: false,
  
  fetchTodos: async () => {
    set({ loading: true });
    try {
      const response = await fetch('/api/todos');
      const todos = await response.json();
      set({ todos, loading: false });
    } catch (error) {
      set({ loading: false });
      console.error('Failed to fetch todos:', error);
    }
  },
}));
```

## 🔧 Project Structure

```
src/
├── components/
│   ├── DisplayTodos.jsx    # Component to display todos
│   └── TodosControl.jsx    # Component to add todos
├── store/
│   └── useStore.js        # Zustand store definition
├── App.jsx                # Main app component
├── App.css                # Styling
└── main.jsx              # App entry point
```

## 📖 Learn More

- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🎉**
