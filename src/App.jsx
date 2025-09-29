import { TodoList } from "./components/TodoList";
import { AddButton, ClearButton } from "./components/Buttons";
import { Input } from "./components/Input";
import { useTodo } from "./context/TodoProvider";

function App() {
    const { removed, completed } = useTodo();
    return (
        <main
            className={`min-h-dvh bg-amber-50 flex flex-col justify-items-center text-center gap-8 p-8`}
        >
            <h1 className="text-3xl font-bold">Todo List</h1>
            <div className="flex flex-row gap-8 mx-auto">
                <p>Completed: {completed}</p>
                <p>Removed: {removed}</p>
            </div>
            <div className="flex flex-col gap-4 mx-auto">
                <Input />
                <div className="flex flex-row gap-8 mx-auto">
                    <AddButton />
                    <ClearButton />
                </div>
            </div>
            <TodoList />
        </main>
    );
}

export default App;
