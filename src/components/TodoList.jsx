import { TodoItem } from "./TodoItem";

export function TodoList({todoList}) {
    return (
        <ul>
            {todoList.map((todo, index) => (
                <TodoItem item={todo} key={index}/>
            ))}
        </ul>
    )
}