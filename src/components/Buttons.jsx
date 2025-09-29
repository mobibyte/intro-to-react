import { useTodo } from "../context/TodoProvider";

export function AddButton() {
    const { todo, setTodo, setTodoList, todoList } = useTodo();
    const handleAdd = () => {
        // Prevent empty entries
        if (todo.length === 0) {
            alert(" Must contain a todo!");
            return;
        }
        // Prevents duplicate entries
        if (todoList.includes(todo)) {
            alert(" Duplicate entry!");
            return;
        }
        setTodoList([...todoList, todo]);
        setTodo("");
    };

    return (
        <button
            onClick={handleAdd}
            className="px-4 py-2 mx-auto bg-blue-500 rounded-md text-white cursor-pointer"
        >
            Add Todo
        </button>
    );
}

export function RemoveButton({ todo }) {
    const { setTodoList, todoList, removed, setRemoved } = useTodo();
    const handleRemove = () => {
        setTodoList(todoList.filter((item) => item !== todo));
        // extra
        setRemoved(removed + 1);
    };
    return (
        <button
            className=" bg-red-400 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={handleRemove}
        >
            Remove
        </button>
    );
}

export function ClearButton() {
    const { setTodoList } = useTodo();
    const handleClear = () => {
        setTodoList([]);
    };

    return (
        <button
            onClick={handleClear}
            className="px-4 py-2 mx-auto bg-gray-500 rounded-md text-white cursor-pointer"
        >
            Clear Todos
        </button>
    );
}

export function CompleteButton({ todo }) {
    const { setTodoList, todoList, completed, setCompleted } = useTodo();
    const handleRemove = () => {
        setTodoList(todoList.filter((item) => item !== todo));
        // extra
        setCompleted(completed + 1);
    };
    return (
        <button
            className=" bg-emerald-400 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={handleRemove}
        >
            Complete
        </button>
    );
}
