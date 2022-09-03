import React, {useState} from 'react'
import Todo from '../Todo';
import TodoForm from './TodoForm'

export default function TodoList() {

    const [todos, setTodos] = useState([]);

    function addTodo(todo) {

        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [...todos, todo];

        setTodos(newTodos);
    };

    function completeTodo(id) {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            };
            return todo;
        });
        setTodos(updateTodos);
    }

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
            />
        </div>
    )
};
