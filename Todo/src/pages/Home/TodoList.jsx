import React, {useState} from 'react'
import TodoForm from './TodoForm'

export default function TodoList() {

    const [todos, setTodos] = useState([]);

    function addTodo(todo) {

        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [...todos, todo];

        setTodos(newTodos);
    }

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>
    )
}
