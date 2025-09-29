import { useTodo } from "../context/TodoProvider";

export function Input() {
    const { todo, setTodo } = useTodo();

    const handleChange = (event) => {
        setTodo(event.target.value);
    };

    return (
        <input
            type="text"
            onChange={handleChange}
            value={todo}
            className="border-2 border-gray-300 p-2 rounded-md w-2xl"
        />
    );
}
