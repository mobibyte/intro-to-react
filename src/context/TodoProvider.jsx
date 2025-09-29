import { createContext, useContext, useState } from "react";

// Create a context and name it something symbolic
const TodoContext = createContext();

// Create a provider component to serve this context to all child components

export function TodoProvider({ children }) {
    // default todolist state
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState("");
    const [completed, setCompleted] = useState(0);
    const [removed, setRemoved] = useState(0);

    return (
        <TodoContext.Provider
            value={{
                todoList,
                setTodoList,
                todo,
                setTodo,
                completed,
                setCompleted,
                removed,
                setRemoved,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

// Custom hook that has access to those values passed in from the provider
export function useTodo() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodo must be used within a TodoProvider");
    }
    return context;
}
