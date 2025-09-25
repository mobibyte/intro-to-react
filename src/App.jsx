import { useState } from 'react'
import './App.css'
import { TodoList } from './components/TodoList';
import { AddButton, ClearButton } from "./components/Buttons";

function App() {
  const [todoList, setTodoList] = useState([]);

  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  }

  return (
    <>
      <h1>Todo List</h1>
        <TodoList todoList={todoList}/>
      <div className="card">
        <input type='text' onChange={handleChange} value={todo}/>
        <AddButton setTodo={setTodo} setTodoList={setTodoList} />
        <ClearButton setTodoList={setTodoList}/>
        
      </div>
    </>
  )
}

export default App
