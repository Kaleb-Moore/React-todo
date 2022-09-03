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
    };

    function removeTodo(id) {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    function updateTodo(id, newValue) {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(todo => (todo.id === id ? newValue : todo)))
    }

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
};
