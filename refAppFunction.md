# App Function State Management Pattern

## Overview
This document explains the recommended pattern for managing state in your React Todo app using both Zustand (global state) and useState (local state).

## Use Zustand Store (Global State) for:
- `todos` array
- `addTodo`, `toggleTodo`, `deleteTodo` functions
- Any state that needs to be shared across components

## Use `useState` (Local State) for:
- Input field value (for adding new todos)
- Any local UI state that doesn't need to be shared

## Recommended App Component Pattern

```javascript
import { useState } from "react";
import useStore from "./store/useStore";
import "bootswatch/dist/minty/bootstrap.min.css";
import "./App.css";

function App() {
  // Local state for input field
  const [inputValue, setInputValue] = useState("");
  
  // Global state from Zustand
  const { todos, addTodo, toggleTodo, deleteTodo } = useStore();
  
  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue(""); // Clear input after adding
    }
  };

  return (
    // Your JSX here
  );
}

export default App;
```

## Key Principles:
- **Zustand Store**: For data that multiple components need to access
- **useState**: For local component state that doesn't need to be shared
- **Performance**: This approach keeps your components efficient and your state management clean

## Benefits:
- Clean separation of concerns
- Optimal performance
- Easy to maintain and scale
- Follows React best practices

Your current Zustand store is perfectly set up for managing the todos globally, while `useState` handles the temporary input state locally within the App component. 