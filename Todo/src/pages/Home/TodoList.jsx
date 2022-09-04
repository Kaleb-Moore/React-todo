import React, {useState} from 'react'
import Todo from './Todo';
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

    function updateTodo(todo) {
        console.log(todos)
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todo.id ? todo.text : item)))
    }

    return (
        <div className='app-container'>
            <TodoForm onSubmit={addTodo}/>
            <div className="todo-container">
                <Todo 
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            </div>
        </div>
    )
};
