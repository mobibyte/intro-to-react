

export function AddButton({setTodo, setTodoList}) {
    const handleAdd = () => {
        if (todo.length === 0) return;
        setTodoList([...todoList, todo]);
        setTodo("");
      }

      return (
        <button onClick={handleAdd}>
            Add Todo
        </button>
      )
}

export function ClearButton({setTodoList}) {
    const handleClear = () => {
        setTodoList([]);
      }

    return (
        <button onClick={handleClear}>
          Clear Todos
        </button>
    )
}