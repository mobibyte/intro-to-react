import { RemoveButton, CompleteButton } from "./Buttons";
import { useTodo } from "../context/TodoProvider";

export function TodoList() {
    const { todoList } = useTodo();
    return (
        <div className="container mx-auto">
            {todoList.map((todo, index) => (
                <div
                    key={index}
                    className={
                        "flex flex-row justify-between p-2 bg-amber-100 rounded-md mb-4 align-middle"
                    }
                >
                    <h3 className="text-lg  my-auto">{todo}</h3>
                    <div className="flex flex-row gap-4">
                        <CompleteButton todo={todo} />
                        <RemoveButton todo={todo} />
                    </div>
                </div>
            ))}
        </div>
    );
}
